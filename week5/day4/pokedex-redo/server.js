const express = require("express")
const app = express()
PORT = 3000

// middleware
app.use(express.static(__dirname + 'public'))

// model
const pokemon = require("./models/data")

// home show
app.get("/pokemon", (req, res) => {
    res.render("home.ejs", {
        pokemon: pokemon
    })
})

// pokemon show
app.get("/pokemon/:id", (req, res) => {
    res.render("pokemon.ejs", {
        id: req.params.id,
        pokemon: pokemon[req.params.id]
    })
})


app.listen(PORT, () => {
    console.log("Server is running on port", 3000);
})