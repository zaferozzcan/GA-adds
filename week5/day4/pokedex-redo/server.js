const express = require("express")
const app = express()
PORT = 3000

// middleware
app.use(express.static(__dirname + 'public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// model
const pokemon = require("./models/data")

// home show
app.get("/pokemon", (req, res) => {
    res.render("home.ejs", {
        pokemon: pokemon
    })
})

// create / new pokemeon
// show
app.get("/pokemon/new", (req, res) => {
    res.render("new.ejs")
})

app.post("/pokemon", (req, res) => {
    console.log(req.body);
    pokemon.push(req.body)
    res.redirect("/pokemon")
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