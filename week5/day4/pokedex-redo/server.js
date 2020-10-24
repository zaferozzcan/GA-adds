const express = require("express")
const methodOverride = require("method-override")
const app = express()
PORT = 3000

// middleware
app.use(express.static(__dirname + 'public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))

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
// post new pokemon
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

// delete pokemon

app.delete("/pokemon/:id", (req, res) => {
    pokemon.splice(req.params.id, 1)
    res.redirect("/pokemon")
})


app.listen(PORT, () => {
    console.log("Server is running on port", 3000);
})