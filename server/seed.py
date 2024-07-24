#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import Post
from config import db

fake = Faker()
usernames = [fake.email() for i in range(4)]
titles = [fake.name() for i in range(10)]

def make_posts():
    Post.query.delete()
    posts = []

    for i in range(20):
        post = Post(
            username=rc(usernames),
            title=rc(titles),
            type="poem",
            body=fake.sentence(),
        )
        posts.append(post)

    db.session.add_all(posts)
    db.session.commit()

if __name__ == '__main__':
    with app.app_context():
        make_posts()