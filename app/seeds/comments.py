from app.models import db, Comment


# Adds a demo user, you can add other users here if you want
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
        content="Terrible. I'm never coming to an event hosted by this guy again. I waited over 45 minutes to get a zoom invite and then by the time I got in everyone already had groups made and I STILL HAD TO PLAY ALONE!  REEEEE!@"
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

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the comments table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
