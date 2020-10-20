require("dotenv").config();
const express = require("express");
const { get } = require("http")
const app = express();

const superheros = [
    {
        name: "Lex Luthor",
        powers: ["super brain"]
    },
    {
        name: "Ares",
        powers: ["shape shifting", "teleporting"]
    },
    {
        name: "Killmonger",
        powers: ["ability to fit in Black Panther's suit", "internet agreement that he looks badass"]
    }
]

app.get("/superheroes", (req, res) => {
    res.send(superheros)
});
app.get("/superheroes/:index", (req, res) => {
    res.send(superheros[req.params.index].powers)
})

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)