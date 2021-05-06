from .db import db
from sqlalchemy.orm import relationship
from .avatar import Avatar
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    avatar_id = db.Column(
        db.Integer, db.ForeignKey('avatars.id'), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    @property
    def password(self):
        return self.hashed_password

    # hash user password
    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def get_username(self):
        return self.username

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }

    avatars = relationship('Avatar', back_populates='users')
    events = relationship(
        'Event', back_populates='host', cascade=('all, delete'))
    registrations = relationship('Registration', back_populates='user')
    comments = relationship(
        'Comment', back_populates='user', cascade=('all, delete'))
