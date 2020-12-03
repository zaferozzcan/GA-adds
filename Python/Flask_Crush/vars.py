from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('home.html')

@app.route('/about/<name>')
def about(name):
    return render_template("about.html", names=name)


if __name__ == "__main__":
    app.run(debug=True)