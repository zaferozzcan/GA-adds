from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api", methods=["GET"])
def index():
    return {
        "name":["Zafer", "Ecem"]
    }

if __name__=="__main__":
    app.run(debug=True)