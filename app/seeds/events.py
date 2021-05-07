from app.models import db, Event


# Adds a demo user, you can add other users here if you want
def seed_events():

    event = Event(
        title='First event',
        description='This is a test event.',
        image_url='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg00.deviantart.net%2F983b%2Fi%2F2017%2F221%2Fe%2F7%2Fgaming_event_banner_by_kaushitha-dbjgzzj.jpg&f=1&nofb=1',
        category_id=1,
        price=5.99,
        host_id=1,
        server_id=334131863423549450,
        channel_id=334131863423549450
    )
    db.session.add(event)

    event = Event(
        title='Second event',
        description='This is test event 2.',
        image_url='https://images.unsplash.com/photo-1542779283-429940ce8336?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        category_id=1,
        price=5.99,
        host_id=1,
        server_id=839942777001082941,
        channel_id=839942777001082944
    )
    db.session.add(event)

    event = Event(
        title='Third event',
        description='This is test event 3.',
        image_url='https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
        category_id=1,
        price=5.99,
        host_id=1,
        server_id=558777956181475369,
        channel_id=558784885222014983
    )
    db.session.add(event)

    event = Event(
        title='Fourth event',
        description='This is test event 4.',
        image_url='https://images.unsplash.com/photo-1523843268911-45a882919fec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        category_id=1,
        price=5.99,
        host_id=1,
    )
    db.session.add(event)
    event = Event(
        title='Fifth event',
        description='This is test event 5.',
        image_url='https://images.unsplash.com/photo-1600861194942-f883de0dfe96?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80',
        category_id=1,
        price=5.99,
        host_id=1,
    )
    db.session.add(event)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the events table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the event from the table, and resets
# the auto incrementing primary key


def undo_events():
    db.session.execute('TRUNCATE events RESTART IDENTITY CASCADE;')
    db.session.commit()
