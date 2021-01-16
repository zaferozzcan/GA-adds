const express = require("express");
const methodOverride = require("method-override");
const PORT = 3000
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

// data
const mongoose = require('mongoose');
const Log = require("./models/logs");
const Logs = require("./models/logs");

mongoose.connect('mongodb://localhost:27017/logDB', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

// show  route
app.get("/logs", (req, res) => {
    Log.find({}, (err, data) => {
        res.render("index.ejs", {
            log: data
        })
    })
})

// create show
app.get("/logs/new", (req, res) => {
    res.render("new.ejs")
})

// create route
app.post("/logs", (req, res) => {
    Log.create(req.body, (err, data) => {
        if (!err) console.log("new entry created");
        console.log("Create Error", err);
    })
    res.redirect("/logs")
})

// edit view
app.get("/logs/:title/edit", (req, res) => {
    res.render("edit.ejs", {
        title: req.params.title
    })
})

// edit/put route
app.put("/logs/:title/edit", (req, res) => {
    console.log("edit body", req.body);
    console.log("edit params", req.params.title);
    Log.findOneAndUpdate({ title: req.params.title }, { title: req.body.title, entry: req.body.entry, shipIsBroken: req.body.broken }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log("updated");
        }
    })
    res.redirect("/logs")
})



// delete 
app.delete("/logs/:title", (req, res) => {
    Log.findOneAndDelete({ title: req.params.title }, (err, res) => {
        if (!err) { console.log("Data is deleted") }
        else { console.log(err); }

    })
    res.redirect("/logs")
})





app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})