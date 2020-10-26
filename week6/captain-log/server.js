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


app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})