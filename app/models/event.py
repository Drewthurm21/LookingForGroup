from .db import db
from sqlalchemy.orm import relationship

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

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'image_url': self.image_url,
            'category_id': self.category_id,
            'price': self.price,
            'host_id': self.host_id,
        }

    host = relationship(
        'User', back_populates='events')
    category = relationship('Category', back_populates='events')
    registrations = relationship('Registration', back_populates='event')
    comments = relationship('Comment', back_populates='event')
