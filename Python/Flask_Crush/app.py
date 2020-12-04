from flask import Flask, render_template, request, redirect

app = Flask(__name__) #/ creating app instance


@app.route("/", methods=["GET"])
def about():
    return render_template("about.html")

@app.route("/<string:name>")
def greeting(name):
    return render_template("hello.html", name=name)

@app.route("/get", methods=["GET","POST"])
def about_GET():
    if(request.method=="POST"):
        name = request.form["name"]
        return redirect("/<string:name>")
    return render_template("form.html")


if __name__ =="__main__":
    app.run(debug=True)