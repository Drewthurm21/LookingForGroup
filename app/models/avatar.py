from .db import db
from sqlalchemy.orm import relationship


class Avatar(db.Model):
    __tablename__ = 'avatars'

    id = db.Column(db.Integer, primary_key=True)
    img_url = db.Column(db.String(500), nullable=False, unique=True)

    def get_url(self):
        return self.img_url

    def to_dict(self):
        return {
            'id': self.id,
            'img_url': self.img_url
        }

    users = relationship('User', back_populates='avatars')
