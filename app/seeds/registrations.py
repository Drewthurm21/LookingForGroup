from app.models import db, Registration


def seed_registrations():

    registration = Registration(user_id='2', event_id='2', tickets=3)
    db.session.add(registration)
    registration = Registration(user_id='3', event_id='3', tickets=3)
    db.session.add(registration)
    registration = Registration(user_id='4', event_id='4', tickets=3)
    db.session.add(registration)
    registration = Registration(user_id='5', event_id='5', tickets=3)
    db.session.add(registration)
    registration = Registration(user_id='2', event_id='3', tickets=3)
    db.session.add(registration)
    registration = Registration(user_id='3', event_id='4', tickets=3)
    db.session.add(registration)
    registration = Registration(user_id='4', event_id='5', tickets=3)
    db.session.add(registration)
    registration = Registration(user_id='5', event_id='1', tickets=3)
    db.session.add(registration)
    registration = Registration(user_id='2', event_id='4', tickets=3)
    db.session.add(registration)
    registration = Registration(user_id='3', event_id='5', tickets=3)
    db.session.add(registration)
    registration = Registration(user_id='4', event_id='1', tickets=3)
    db.session.add(registration)
    registration = Registration(user_id='5', event_id='2', tickets=3)
    db.session.add(registration)
    registration = Registration(user_id='2', event_id='5', tickets=3)
    db.session.add(registration)
    registration = Registration(user_id='3', event_id='1', tickets=3)
    db.session.add(registration)
    registration = Registration(user_id='4', event_id='2', tickets=3)
    db.session.add(registration)
    registration = Registration(user_id='5', event_id='3', tickets=3)
    db.session.add(registration)
    registration = Registration(user_id='1', event_id='5', tickets=3)
    db.session.add(registration)

    db.session.commit()


def undo_registrations():
    db.session.execute('DELETE from registrations;')
    db.session.commit()
