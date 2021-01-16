from flask import Flask, g
from flask_cors import CORS

import models
from resources.dogs import dog # adding this line

DEBUG = True
PORT = 8000

app = Flask(__name__)

@app.before_request
def before_request():
    """Connect to the database before each request"""
    g.db = models.DATABASE
    g.db.connect()

@app.after_request
def after_request(response):
    """Close the database connection after each request"""
    g.db.close()
    return response


CORS(dog, origins=['http://localhost:3000'], supports_credentials=True) # adding this line


app.register_blueprint(dog, url_prefix='/api/v1/dogs') # adding this line