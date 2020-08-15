from flask import Flask, request, render_template, url_for

import os
import requests
import json

app = Flask(__name__)

@app.route('/')
@app.route('/home', methods=['POST'])
def home_page():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)