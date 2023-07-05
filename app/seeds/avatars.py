from app.models import db, Avatar


# Adds a demo user, you can add other users here if you want
def seed_avatars():

    avatar = Avatar(
        img_url='https://avatarfiles.alphacoders.com/284/284364.jpg')
    db.session.add(avatar)
    avatar = Avatar(
        img_url='https://avatarfiles.alphacoders.com/284/284363.jpg')
    db.session.add(avatar)
    avatar = Avatar(
        img_url='https://avatarfiles.alphacoders.com/284/284362.jpg')
    db.session.add(avatar)
    avatar = Avatar(
        img_url='https://avatarfiles.alphacoders.com/284/284361.jpg')
    db.session.add(avatar)
    avatar = Avatar(
        img_url='https://avatarfiles.alphacoders.com/284/284360.jpg')
    db.session.add(avatar)
    avatar = Avatar(
        img_url='https://avatarfiles.alphacoders.com/116/thumb-1920-116368.jpg')
    db.session.add(avatar)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the avatars table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_avatars():
    db.session.execute('DELETE from avatars;')
    db.session.commit()
