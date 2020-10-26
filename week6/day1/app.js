const express = require("express")
PORT = 3000;
const app = express();

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


