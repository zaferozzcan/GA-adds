const express = require("express")

PORT = 3000;
const app = express();



const mongoose = require('mongoose');
const Fruit = require("./models/fruits");

mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});


// model



// middleware
app.use(express.urlencoded({ extended: true }))

app.get("/fruits", (req, res) => {
    Fruit.find({}, (err, data) => {
        res.render("index.ejs", {
            fruits: data
        })
    })

})

app.get("/fruits/new", (req, res) => {
    res.render("new.ejs")
})

app.post("/fruits", (req, res) => {
    Fruit.create(req.body, (err, data) => {
        if (!err) console.log("a fruit created");
        console.log(err);
    })
    res.redirect("/fruits")
})


app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})

