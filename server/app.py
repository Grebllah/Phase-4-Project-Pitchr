#!/usr/bin/env python3

from flask import request, Flask
from flask_restful import Resource
from flask_migrate import Migrate
from flask_cors import CORS

from config import app, db, api
from models import Post


@app.route('/')
def index():
    return '<h1>Project Server</h1>'

if __name__ == '__main__':
    app.run(port=5555, debug=True)

