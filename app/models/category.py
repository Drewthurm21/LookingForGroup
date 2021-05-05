from .db import db
from sqlalchemy.orm import relationship

class Category(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(50), nullable=False, unique=True)

    def to_dict(self):
        return {
            'id': self.id,
            'category': self.category
        }

    events = relationship('Event', back_populates='category')
