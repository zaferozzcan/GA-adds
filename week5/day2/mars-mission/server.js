require("dotenv").config();
const express = require("express");
const { get } = require("http");
const marsMissions = require("./modals/marsMissionData");
const app = express();
app.use(express.static(__dirname + '/public'));

// data
const marsMissionData = require("./modals/marsMissionData");

app.get("/index", (req, res) => {
    res.render("index.ejs", {
        marsMission: marsMissionData
    })
})

app.get("/index/:i", (req, res) => {
    res.render("show.ejs", {
        mission: marsMissionData[req.params.i]
    })
})

app.get("/show", (req, res) => {
    res.send("show is on")
});


const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

