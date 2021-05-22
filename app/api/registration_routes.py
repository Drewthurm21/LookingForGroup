from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Event, Registration

registration_routes = Blueprint('registrations', __name__)


# return all registrations
@registration_routes.route('')
def get_regs():
    all_registrations = Registration.query.all()
    registrations = [registration.to_dict()
                     for registration in all_registrations]
    return jsonify(registrations)


# return registrations for an event
@registration_routes.route('/event/<int:id>')
def get_event_regs(id):
    event_registrations = Registration.query.filter_by(event_id=id).all()
    event_regs = [reg.to_dict() for reg in event_registrations]
    return jsonify(event_regs)


# return registrations for a user
@registration_routes.route('/user/<int:id>')
def get_user_regs(id):
    user_registrations = Registration.query.filter_by(user_id=id).all()
    user_regs = [reg.to_dict() for reg in user_registrations]
    return jsonify(user_regs)


# register a user for an event
@registration_routes.route('', methods=["POST"])
@login_required
def register_user():
    event_id = request.form['event_id']
    tickets = request.form['tickets']
    event = Event.query.get(event_id).to_dict()
    if (event.get_tickets() - tickets) >= 0:
        registration = Registration(
            user_id=current_user.id,
            event_id=event_id,
            tickets=tickets
        )
        db.session.add(registration)
        db.session.commit()
        return registration.to_dict()
    return {'errors': 'Not enough tickets left =('}
