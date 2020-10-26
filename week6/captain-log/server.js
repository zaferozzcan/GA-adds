const express = require("express");
const PORT = 3000
const app = express();

app.use(express.urlencoded({ extended: true }))

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

// create
app.post("/log/create", (req, res) => {
    Log.create(req.body, (err, data) => {
        if (!err) console.log("new entry created");
        console.log("Create Error", err);
    })
})

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})