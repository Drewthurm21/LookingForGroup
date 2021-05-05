from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Event, Registration

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>/events')
@login_required
def user_events(id):
    user_events = Event.query.filter_by(host_id=id).all()
    events = [event.to_dict() for event in user_events]
    return jsonify(events)


@user_routes.route('/<int:id>/registrations')
@login_required
def user_registrations(id):
    user_registrations = Registration.query.filter_by(user_id=id).all()
    return jsonify([registration.to_dict() for registration in user_registrations])
