from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Event, Registration, Comment

event_routes = Blueprint('events', __name__)


# return all events
@event_routes.route('/')
def events():
    all_events = Event.query.all()
    events = [event.to_dict() for event in all_events]
    return jsonify(events)
