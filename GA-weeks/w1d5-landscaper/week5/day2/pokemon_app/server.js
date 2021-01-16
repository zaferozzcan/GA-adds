const express = require("express");

const app = express();
app.use(express.static(__dirname + "/public"));


// models/data
const pokemon = require("./models/pokemonData")

//routes
app.get("/pokemon", (req, res) => {
    res.render("index.ejs", {
        pokemon: pokemon
    })
})

app.get("/pokemon/:id", (req, res) => {
    res.render("show.ejs", {
        pokemon: pokemon[req.params.id]
    })
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
})