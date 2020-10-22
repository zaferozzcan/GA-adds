const express = require("express");
const { get } = require("http");

const app = express();
const PORT = 3000;

////////////////////////////
////  middleware
////////////////////////////
app.use(express.static(__dirname + "/public"))


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


app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})