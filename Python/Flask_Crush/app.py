from flask import Flask 

app = Flask(__name__) #/ creating app instance


@app.route("/")
def hel_world():
    return '<h1>Hello World<h1>'



if __name__ =="__main__":
    app.run(debug=True)