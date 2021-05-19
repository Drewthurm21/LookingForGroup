from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DecimalField, DateTimeField, SelectField
from wtforms.validators import DataRequired, ValidationError
from app.models import User
import datetime


class EventForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    image_url = StringField('image_url')
    category_id = IntegerField('category_id', validators=[DataRequired()])
    price = DecimalField('price')
    date = DateTimeField('date', validators=[DataRequired()])
    tickets = IntegerField('tickets', validators=[DataRequired()])
    server_id = StringField('server_id')
    channel_id = StringField('channel_id')
