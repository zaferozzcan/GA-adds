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



app.get("/home", (req, res) => {
  res.render("home.ejs", {
    data: JSON.stringify(data[0].homeStartingContent)
  })
})









app.listen(3000, function () {
  console.log("Server started on port 3000");
});
