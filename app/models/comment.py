from .db import db
from sqlalchemy.orm import relationship
import datetime


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    event_id = db.Column(db.Integer, db.ForeignKey(
        'events.id'), nullable=False)
    content = db.Column(db.String(500), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'event_id': self.event_id,
            'content': self.content,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'username': self.user.get_username()
        }

    user = relationship('User', back_populates='comments')
    event = relationship('Event', back_populates='comments')
