require("dotenv").config();
const express = require("express");
const { get } = require("http")
const app = express();

// data
const fruits = require("./models/fruits")

//routes
app.get("/fruits/", (req, res) => {
    res.send(fruits)
});

app.get(`/fruits/:index`, (req, res) => {
    console.log(req.params.index)
    res.send(fruits[req.params.index].color)
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});