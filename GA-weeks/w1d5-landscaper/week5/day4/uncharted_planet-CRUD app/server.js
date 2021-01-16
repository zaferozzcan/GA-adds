const { json } = require("body-parser");
const express = require("express");
const methodOverride = require('method-override');
PORT = 3000;
const app = express();



// data
scientist = []


app.use(express.static(__dirname + "/public"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));



// show scientists
app.get("/scientist", (req, res) => {
    res.render("index.ejs", {
        scientist: scientist
    })
});

//// post --add scientist 
app.get("/scientist/new", (req, res) => {
    res.render("new.ejs")
});

app.post("/scientist", (req, res) => {
    console.log(req.body);
    scientist.push(req.body)
    res.redirect("/scientist")
});


//// delete
app.delete("/scientist/:id", (req, res) => {
    scientist.splice(req.params.id, 1)
    res.redirect("/scientist")
});

//// edit scientist view
app.get("/scientist/:id/edit", (req, res) => {
    res.render("edit.ejs", {
        scientist: scientist[req.params.id],
        index: req.params.id
    })
})

app.put("/scientist/:id", (req, res) => {
    scientist[req.params.id] = req.body
    res.redirect("/scientist")
})



app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
});