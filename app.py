from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def home():
   return render_template('index.html')

#specify route for teams
@app.route('/html/teams.html')

def teams():
    return render_template ("teams.html")

#specify route for athletes
@app.route('/html/athletes.html')

def athletes():
    return render_template ("athletes.html")

#return home route
@app.route('/index.html')

def return_home():
   return render_template('index.html')

if __name__ == '__main__':
   app.run(host='0.0.0.0', port=5000, debug=True)
