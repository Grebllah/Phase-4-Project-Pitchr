from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from config import db
# Models go here!

class Post(db.Model, SerializerMixin):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    title = db.Column(db.String)
    type = db.Column(db.String)
    body = db.Column(db.String)

    def __repr__(self):
        return f'<Post by {self.username}: {self.body}.>'