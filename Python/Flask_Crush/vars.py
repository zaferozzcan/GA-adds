from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def hi():
    return render_template('about.html', names=["Zafer", "Ecem", "Elif"])

@app.route('/<string:name>')
def greeting(name):
    return "Hello {}".format(name)


if __name__ == "__main__":
    app.run(debug=True)