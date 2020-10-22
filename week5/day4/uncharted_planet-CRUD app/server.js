const express = require("express");
PORT = 3000;
const app = express();



// data
scientist = []


app.use(express.static(__dirname + "/public"))

app.get("/index", (req, res) => {
    res.render("index.ejs")
})

app.get("/new", (req, res) => {
    res.render("new.ejs")
})


app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
})