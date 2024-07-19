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

def make_posts():
    Post.query.delete()
    posts = []

    for i in range(20):
        post = Post(
            username=rc(usernames),
            title=fake.name,
            type="poem",
            body=fake.sentence(),
        )
        posts.append(post)

    db.session.add_all(posts)
    db.session.commit()  
    print("...", posts)

if __name__ == '__main__':
    with app.app_context():
        make_posts()