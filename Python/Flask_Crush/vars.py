from flask import Flask 

app = Flask(__name__)

@app.route("/")
def hi():
    return "Selam"

@app.route('/<string:name>')
def greeting(name):
    return "Hello {}".format(name)


if __name__ == "__main__":
    app.run(debug=True)