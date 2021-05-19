from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Event
from app.forms import EventForm
from app.aws import get_unique_filename, upload_file_to_s3

event_routes = Blueprint('events', __name__)


# return all events
@event_routes.route('')
def events():
    all_events = Event.query.all()
    events = [event.to_simple_dict() for event in all_events]
    return {'events': events}


# return a single event
@event_routes.route('/<int:id>')
def event(id):
    event = Event.query.get(id)
    return event.to_dict()


# delete an event
@event_routes.route('/<int:id>', methods=['DELETE'])
def drop_event(id):
    event = Event.query.get(id)
    db.session.delete(event)
    db.session.commit()
    return event.to_dict()


# post a new event
@event_routes.route('', methods=['POST'])
@login_required
def post_event():
    form = EventForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        if ('image' in request.files):
            image = request.files['image']
            image.filename = get_unique_filename(image.filename)
            upload = upload_file_to_s3(image)
            url = upload['url']
        else:
            url = 'https://github.com/Drewthurm21/LookingForGroup/blob/main/images/main_logo.PNG?raw=true'
    event = Event(
        title=form.data['title'],
        description=form.data['description'],
        image_url=url,
        category_id=form.data['category_id'],
        price=form.data['price'],
        host_id=form.data['host_id'],
        date=form.data['date'],
        server_id=form.data['server_id'],
        channel_id=form.data['channel_id']
    )
    db.session.add(event)
    db.session.commit()
    return event.to_dict()
