from app.models import db, User
# Adds a demo user, you can add other users here if you want


def seed_users():

    demo = User(username='Drew',
                avatar_id='6',
                email='drew',
                password='asdf')

    db.session.add(demo)

    demo = User(username='Demo2',
                avatar_id='2',
                email='demo2@aa.io',
                password='password2')

    db.session.add(demo)

    demo = User(username='Demo3',
                avatar_id='3',
                email='demo3@aa.io',
                password='password3')

    db.session.add(demo)

    demo = User(username='Demo4',
                avatar_id='4',
                email='demo4@aa.io',
                password='password4')

    db.session.add(demo)

    demo = User(username='Demo5',
                avatar_id='5',
                email='demo5@aa.io',
                password='password5')

    db.session.add(demo)

    demo = User(username='Demo6',
                avatar_id='1',
                email='demo6@aa.io',
                password='password6')

    db.session.add(demo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
