const express = require("express")
const methodOverride = require('method-override');
const app = express();
PORT = 3000;

// DATA //
const pokemon = require("./models/pokemon")

// middleware //
app.use(express.static(__dirname + "/public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));

// index
app.get("/pokemon", (req, res) => {
    res.render("index.ejs", {
        pokemon: pokemon
    })
})
// new 
app.get("/pokemon/new", (req, res) => {
    res.render("new.ejs")
});

app.post("/pokemon", (req, res) => {
    console.log(req.body);
    pokemon.push(req.body)
    res.redirect("/pokemon")
})

//show
app.get("/pokemon/:id", (req, res) => {
    res.render("show.ejs", {
        pokemon: pokemon[req.params.id]
    })
})


// edit view
app.get("/pokemon/:id/edit", (req, res) => {
    res.render("edit.ejs", {
        pokemon: pokemon[req.params.id],
        index: req.params.id
    })
})

// edit control
app.put("/pokemon/:id", (req, res) => {
    pokemon[req.params.id] = req.body
    res.redirect("/pokemon")
})


// delete
app.delete("/pokemon/:id", (req, res) => {
    pokemon.splice(req.params.id, 1)
    res.redirect("/pokemon")
})







app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})