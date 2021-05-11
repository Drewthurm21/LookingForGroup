from app.models import db, Event
from faker import Faker
import random
# Adds a demo user, you can add other users here if you want

faker = Faker()


def seed_events():

    event = Event(
        title='Frostbyte Gaming presents:  Apex Arena',
        description='Text your skills in the ultimate arena challenge. Compete against other top teams in 3v3 combat. Win season points and earn a place in our Grand Championship tournament!',
        image_url='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg00.deviantart.net%2F983b%2Fi%2F2017%2F221%2Fe%2F7%2Fgaming_event_banner_by_kaushitha-dbjgzzj.jpg&f=1&nofb=1',
        category_id=1,
        price=9.99,
        host_id=1,
        date=faker.future_datetime(end_date='+90d'),
        server_id='334131863423549450',
        channel_id='334131863423549450'
    )
    db.session.add(event)

    event = Event(
        title='Poketime!!',
        description='This is a FREE casual Pokemon trading event. Connect with other members of the community and trade pokemon to complete your pokedex!',
        image_url='https://images.unsplash.com/photo-1542779283-429940ce8336?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        category_id=1,
        price=0.0,
        host_id=1,
        tickets=1000,
        date=faker.future_datetime(end_date='+90d'),
        server_id='839942777001082941',
        channel_id='839942777001082944'
    )
    db.session.add(event)

    event = Event(
        title='Fifa Fantasy League Draft',
        description='Join a lobby draft your teams. Compete in a short bracket style tournament using the team you built in the draft! How well can you build a team? Will you make it to the World cup!?',
        image_url='https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
        category_id=1,
        price=20.00,
        host_id=1,
        date=faker.future_datetime(end_date='+90d'),
        server_id='558777956181475369',
        channel_id='558784885222014983'
    )
    db.session.add(event)

    event = Event(
        title='!Barcade Brawl!',
        description='Do you guys miss playing classic games at your local barcade?  WE DO TOO! Join us in a night of streaming classic NES and Arcade games. A few beers, a few buds and a few brawls...  What more could you ask for? (BYOB)',
        image_url='https://images.unsplash.com/photo-1523843268911-45a882919fec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        category_id=1,
        price=15.99,
        host_id=1,
        date=faker.future_datetime(end_date='+90d'),
        server_id='840530998482960384',
        channel_id='840530998482960387'
    )
    db.session.add(event)
    event = Event(
        title='FPS Coaching & Lessons',
        description='I have been coaching FPS players for 10+ years. I have played on professional teams and placed in top IEM and ESL tournaments in CSGO and . Please feel free to contact me concerning lessons and coaching by leaving a comment on my event page.  ',
        image_url='https://images.unsplash.com/photo-1600861194942-f883de0dfe96?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80',
        category_id=1,
        price=15.99,
        host_id=1,
        date=faker.future_datetime(end_date='+90d')
    )
    db.session.add(event)

    for i in range(25):
        event = Event(
            title=faker.text(max_nb_chars=30),
            description=faker.sentence(nb_words=20),
            image_url=f"https://source.unsplash.com/random?sig={random.randint(0, 10000)}/1920x1080",
            category_id=faker.pyint(min_value=1, max_value=15),
            price=faker.pyint(min_value=1, max_value=150),
            host_id=faker.pyint(min_value=1, max_value=5),
            date=faker.future_datetime(end_date='+90d'),
            server_id='839942777001082941',
            channel_id='839942777001082944'
        )
        db.session.add(event)
        event2 = Event(
            title=faker.text(max_nb_chars=30),
            description=faker.sentence(nb_words=20),
            image_url=f"https://source.unsplash.com/random?sig={random.randint(0, 10000)}/1920x1080",
            category_id=faker.pyint(min_value=1, max_value=15),
            price=faker.pyint(min_value=1, max_value=150),
            host_id=faker.pyint(min_value=1, max_value=5),
            date=faker.future_datetime(end_date='+90d'),
            server_id='839942777001082941',
            channel_id='839942777001082944'
        )
        db.session.add(event2)
        event3 = Event(
            title=faker.text(max_nb_chars=30),
            description=faker.sentence(nb_words=20),
            image_url=f"https://source.unsplash.com/random?sig={random.randint(0, 10000)}/1920x1080",
            category_id=faker.pyint(min_value=1, max_value=15),
            price=faker.pyint(min_value=1, max_value=150),
            host_id=faker.pyint(min_value=1, max_value=5),
            date=faker.future_datetime(end_date='+90d'),
            server_id='839942777001082941',
            channel_id='839942777001082944'
        )
        db.session.add(event3)

    db.session.commit()


def undo_events():
    db.session.execute('TRUNCATE events RESTART IDENTITY CASCADE;')
    db.session.commit()
