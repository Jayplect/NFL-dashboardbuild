#import dependencies
from flask import Flask, render_template, url_for, request
#from flask_cors import CORS
#from flask import render_template


#create an object of the class
app=Flask(__name__)
cors = CORS (app)

#specify route for index page
@app.route('/', methods =['GET'])

def index():
    return render_template ("index.html")

#specify route for teams
@app.route('/teams')

def teams():
    return render_template ("teams.html")

#specify route for athletes
@app.route('/teams/athletes')

def athletes():
    return render_template ("athletes.html")

#invoke script
if __name__ == "__main__":
    app.run(host= '0.0.0.0', debug=True)
