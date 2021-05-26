from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DecimalField
from wtforms.fields.html5 import DateTimeLocalField
from wtforms.validators import DataRequired, ValidationError
from app.models import User
import datetime


class EventForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    category_id = IntegerField('category_id', validators=[DataRequired()])
    price = DecimalField('price')
    date = DateTimeLocalField('date', validators=[DataRequired()])
    tickets = IntegerField('tickets', validators=[DataRequired()])
    server_id = StringField('server_id')
    channel_id = StringField('channel_id')
