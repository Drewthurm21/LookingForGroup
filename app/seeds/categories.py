from app.models import db, Category


# Adds a demo user, you can add other users here if you want
def seed_categories():

    category = Category(category='Call of Duty')
    db.session.add(category)
    category = Category(category='League of Legends')
    db.session.add(category)
    category = Category(category='Minecraft')
    db.session.add(category)
    category = Category(category='Valorant')
    db.session.add(category)
    category = Category(category='Rocket League')
    db.session.add(category)
    category = Category(category='Apex Legends')
    db.session.add(category)
    category = Category(category='Among Us')
    db.session.add(category)
    category = Category(category='Fortnight')
    db.session.add(category)
    category = Category(category='Valheim')
    db.session.add(category)
    category = Category(category='Battlefield')
    db.session.add(category)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the categories table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_categories():
    db.session.execute('DELETE from categories;')
    db.session.commit()
