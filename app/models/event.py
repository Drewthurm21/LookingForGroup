from .db import db
from sqlalchemy.orm import relationship
import datetime


class Event(db.Model):
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key=True, unique=True)
    title = db.Column(db.String(90), nullable=False)
    description = db.Column(db.String(500))
    image_url = db.Column(db.String(300), nullable=True)
    category_id = db.Column(db.Integer, db.ForeignKey(
        'categories.id'), nullable=False)
    price = db.Column(db.Numeric(asdecimal=False), nullable=False)
    host_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    date = db.Column(
        db.DateTime, default=datetime.datetime.utcnow, nullable=False)
    tickets = db.Column(db.Integer, nullable=False, default=0)
    server_id = db.Column(db.String(64))
    channel_id = db.Column(db.String(64))

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'image_url': self.image_url,
            'category_id': self.category_id,
            'price': self.price,
            'tickets': self.tickets,
            'host_id': self.host_id,
            'date': self.date,
            'server_id': self.server_id,
            'channel_id': self.channel_id,
            'comments': [comment.to_dict() for comment in self.comments]
        }

    def to_simple_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'image_url': self.image_url,
            'category_id': self.category_id,
            'price': self.price,
            'date': self.date,
        }

    def get_tickets(self):
        return self.tickets

    def sell_tickets(self, num):
        if not self.tickets - num < 0:
            self.tickets -= num
            return self.tickets

    host = relationship(
        'User', back_populates='events')
    category = relationship('Category', back_populates='events')
    registrations = relationship('Registration', back_populates='event')
    comments = relationship('Comment', back_populates='event')
