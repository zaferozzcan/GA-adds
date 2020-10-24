//jshint esversion:6
const express = require("express");
const ejs = require("ejs");
const { add } = require("lodash");
const app = express();



// module/data
const data = require("./models/data")
// console.log(data[0])

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"));

const postItems = []

// show / render home page
app.get("/home", (req, res) => {
  res.render("home.ejs", {
    data: JSON.stringify(data[0].homeStartingContent)
  })
})

// show render contact/page
app.get("/contact", (req, res) => {
  res.render("contact.ejs", {
    data: JSON.stringify(data[1].contactContent)
  })
})

// show/render about page
app.get("/about", (req, res) => {
  res.render("about.ejs", {
    data: JSON.stringify(data[2].aboutContent)
  })
})


// compose view
app.get("/compose", (req, res) => {
  res.render("compose.ejs")
})

app.post("/home", (req, res) => {
  postItems.push(req.body)
  res.redirect("/home")
});




app.listen(3000, function () {
  console.log("Server started on port 3000");
});
