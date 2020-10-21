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
app.get("/index", (req, res) => {
    res.render("index.ejs", {
        Budget: Budget
    })
})


app.get("/show", (req, res) => {
    res.render("show.ejs")
})


app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})