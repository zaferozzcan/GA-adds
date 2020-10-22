const { json } = require("body-parser");
const express = require("express");
PORT = 3000;
const app = express();



// data
scientist = []


app.use(express.static(__dirname + "/public"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get("/scientist", (req, res) => {
    res.render("index.ejs", {
        scientist: scientist
    })
})

app.get("/scientist/new", (req, res) => {
    res.render("new.ejs")
})

app.post("/scientist", (req, res) => {
    console.log(req.body);
    scientist.push(req.body)
    res.redirect("/scientist")
});


app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
})