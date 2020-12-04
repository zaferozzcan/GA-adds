from flask import Flask, render_template, request

app = Flask(__name__) #/ creating app instance


# @app.route("/", methods=["GET"])
# def about():
#     return render_template("about.html")

@app.route("/get", methods=["GET","POST"])
def about_GET():
    print(request.form)
    return render_template("form.html")

if __name__ =="__main__":
    app.run(debug=True)