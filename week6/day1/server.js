const express = require("express")
PORT = 3000;
const app = express();


const mongoose = require('mongoose');

//... and then farther down the file
mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});


let fruits = []

// middleware
app.use(express.urlencoded({ extended: true }))

app.get("/fruits", (req, res) => {
    res.render("index.ejs", {
        fruits: fruits
    })
})

app.get("/fruits/new", (req, res) => {
    res.render("new.ejs")
})

app.post("/fruits", (req, res) => {
    fruits.push(req.body)
    res.redirect("/fruits")
})


app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})


