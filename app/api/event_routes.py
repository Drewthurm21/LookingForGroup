from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Event, User
from app.forms import EventForm
from app.aws import get_unique_filename, upload_file_to_s3

event_routes = Blueprint('events', __name__)


# return all events
@event_routes.route('')
def events():
    all_events = Event.query.order_by(Event.date.asc())
    events = [event.to_simple_dict() for event in all_events]
    return {'events': events}


# return all events relevant to a user
@event_routes.route('/user/<int:id>')
def events_by_user(id):
    registered_events = []
    user = User.query.get(id).to_dict()
    for event_id in user['registrations']:
        registered_events.append(Event.query.get(event_id).to_simple_dict())
    hosted_events = Event.query.filter_by(host_id=id)
    host_events = [event.to_simple_dict() for event in hosted_events]
    return {
        'hosted_events': host_events,
        'registered_events': registered_events
    }


@event_routes.route('/<int:id>')
def event(id):
    """
    Returns a single event by id
    """
    event = Event.query.get(id)
    return event.to_dict()


@event_routes.route('/<int:id>', methods=['DELETE'])
def drop_event(id):
    """
    Deletes a new event to the website
    """
    event = Event.query.get(id)
    db.session.delete(event)
    db.session.commit()
    return event.to_dict()


@event_routes.route('', methods=['POST'])
@login_required
def post_event():
    """
    Posts a new event to the website
    """
    form = EventForm()
    url = 'https://github.com/Drewthurm21/LookingForGroup/blob/main/images/main_logo.PNG?raw=true'

    if ('image' in request.files):
        image = request.files['image']
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        url = upload['url']

    event = Event(
        title=form.data['title'],
        description=form.data['description'],
        image_url=url,
        category_id=form.data['category_id'],
        price=form.data['price'],
        host_id=current_user.id,
        date=request.form['date'],
        server_id=form.data['server_id'],
        channel_id=form.data['channel_id'],
        tickets=form.data['tickets']
    )
    db.session.add(event)
    db.session.commit()
    return event.to_dict()
