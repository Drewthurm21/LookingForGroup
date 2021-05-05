from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Event, Registration, Comment

user_routes = Blueprint('users', __name__)


# return all users
@user_routes.route('/')
@login_required
def users():
    all_users = User.query.all()
    users = [user.to_dict() for user in users]
    return jsonify(users)


# return single user
@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


# return events hosted by a user
@user_routes.route('/<int:id>/events')
@login_required
def user_events(id):
    user_events = Event.query.filter_by(host_id=id).all()
    events = [event.to_dict() for event in user_events]
    return jsonify(events)


# return registrations for a user
@user_routes.route('/<int:id>/registrations')
@login_required
def user_registrations(id):
    user_registrations = Registration.query.filter_by(user_id=id).all()
    registrations = [registration.to_dict()
                     for registration in user_registrations]
    return jsonify(registrations)


# return comments posted by a user
@user_routes.route('/<int:id>/comments')
@login_required
def user_comments(id):
    user_comments = Comment.query.filter_by(user_id=id).all()
    comments = [comment.to_dict() for comment in user_comments]
    return jsonify(comments)


# delete a user
@user_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_user(id):
    user = User.query.get(id)
    db.session.delete(user)
    db.session.commit()
    return user.to_dict()
