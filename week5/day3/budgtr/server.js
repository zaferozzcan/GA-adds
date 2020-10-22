const express = require("express");
const bodyParser = require("body-parser")
const { get } = require("http");

const app = express();
const PORT = 3000;

////////////////////////////
////  middleware
////////////////////////////
app.use(express.static(__dirname + "/public"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


////////////////////////////
////  data
////////////////////////////
const Budget = require("./models/budget")



////////////////////////////
////  routes
////////////////////////////
app.get("/budget", (req, res) => {
    res.render("index.ejs", {
        Budget: Budget
    })
})

app.get("/budget/new", (req, res) => {
    res.render("new.ejs")
})

app.get("/budget/:id", (req, res) => {
    res.render("show.ejs", {
        Budget: Budget[req.params.id]
    })
})

app.post("/budget", (req, res) => {
    Budget.push(req.body)

    res.redirect("/budget")
})

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})