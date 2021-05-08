from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, User, Event, Comment
import datetime

comment_routes = Blueprint('comments', __name__)


# get comments
@comment_routes.route('/')
def get_comments():
    all_comments = Comment.query.all()
    comments = [comment.to_dict() for comment in all_comments]
    return jsonify(comments)


# get a single comment
@comment_routes.route('/<int:id>')
def get_comment(id):
    comment = Comment.query.get(id)
    return comment.to_dict()


# post a comment
@comment_routes.route('/', methods=['POST'])
@login_required
def post_comment():
    event_id = request.json['event_id']
    content = request.json['content']
    comment = Comment(
        user_id=current_user.id,
        event_id=event_id,
        content=content,
        created_at=datetime.datetime.now()
    )
    db.session.add(comment)
    db.session.commit()
    return comment.to_dict()


# edit a comment
@comment_routes.route('/<int:id>', methods=['PATCH'])
@login_required
def edit_comment(id):
    comment = Comment.query.get(id)
    comment.content = request.json['content']
    comment.updated_at = datetime.datetime.now()
    db.session.add(comment)
    db.session.commit()
    return comment.to_dict()


# delete a comment
@comment_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_comment(id):
    comment = Comment.query.get(id)
    db.session.delete(comment)
    db.session.commit()
    return comment.to_dict()
