from app.models import db, Comment
from faker import Faker
import datetime
# Adds a demo user, you can add other users here if you want

faker = Faker()


def seed_comments():

    comment = Comment(
        user_id='1',
        event_id=1,
        content='Awesome event!  This was great, thanks!'
    )
    db.session.add(comment)

    comment = Comment(
        user_id='2',
        event_id='1',
        content='Meh, this was okay I guess.'
    )
    db.session.add(comment)

    comment = Comment(
        user_id='3',
        event_id='1',
        content="Terrible. I'm never coming to an event hosted by this guy again! I waited over 45 minutes to get a zoom invite and then by the time I got in everyone already had groups made and I STILL HAD TO PLAY ALONE!  REEEEE!@"
    )
    db.session.add(comment)

    comment = Comment(
        user_id='4',
        event_id='1',
        content='Meh, this was okay I guess.'
    )
    db.session.add(comment)

    comment = Comment(
        user_id='5',
        event_id='1',
        content='Meh, this was okay I guess.'
    )
    db.session.add(comment)

    for i in range(100):
        comment = Comment(
            user_id=faker.pyint(min_value=1, max_value=5),
            event_id=faker.pyint(min_value=1, max_value=50),
            content=faker.sentence(nb_words=30),
            created_at=faker.date_time_this_year(),
            updated_at=datetime.datetime.utcnow()
        )
        db.session.add(comment)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the comments table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
