from app.models import db, Registration


def seed_registrations():

    registration = Registration(user_id='2', event_id='2')
    db.session.add(registration)
    registration = Registration(user_id='3', event_id='3')
    db.session.add(registration)
    registration = Registration(user_id='4', event_id='4')
    db.session.add(registration)
    registration = Registration(user_id='5', event_id='5')
    db.session.add(registration)
    registration = Registration(user_id='2', event_id='3')
    db.session.add(registration)
    registration = Registration(user_id='3', event_id='4')
    db.session.add(registration)
    registration = Registration(user_id='4', event_id='5')
    db.session.add(registration)
    registration = Registration(user_id='5', event_id='1')
    db.session.add(registration)
    registration = Registration(user_id='2', event_id='4')
    db.session.add(registration)
    registration = Registration(user_id='3', event_id='5')
    db.session.add(registration)
    registration = Registration(user_id='4', event_id='1')
    db.session.add(registration)
    registration = Registration(user_id='5', event_id='2')
    db.session.add(registration)
    registration = Registration(user_id='2', event_id='5')
    db.session.add(registration)
    registration = Registration(user_id='3', event_id='1')
    db.session.add(registration)
    registration = Registration(user_id='4', event_id='2')
    db.session.add(registration)
    registration = Registration(user_id='5', event_id='3')
    db.session.add(registration)
    registration = Registration(user_id='1', event_id='5')
    db.session.add(registration)

    db.session.commit()


def undo_registrations():
    db.session.execute('TRUNCATE registrations RESTART IDENTITY CASCADE;')
    db.session.commit()
