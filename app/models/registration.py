from .db import db
from sqlalchemy.orm import relationship


class Registration(db.Model):
    __tablename__ = 'registrations'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    event_id = db.Column(db.Integer, db.ForeignKey(
        'events.id'), nullable=False)
    tickets = db.Column(db.Integer, nullable=False, default=1)

    def get_event(self):
        return self.event_id

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'event_id': self.event_id,
            'tickets': self.tickets
        }

    user = relationship('User', back_populates='registrations')
    event = relationship('Event', back_populates='registrations')
