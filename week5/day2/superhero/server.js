require("dotenv").config();
const express = require("express");
const { get } = require("http")
const app = express();

const superheros = ['Superman', 'Wonder Woman', 'Black Panther']

app.get("/superheroes", (req, res) => {
    res.send(superheros)
});
app.get("/superheroes/:index", (req, res) => {
    res.send(superheros[req.params.index])
})

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});