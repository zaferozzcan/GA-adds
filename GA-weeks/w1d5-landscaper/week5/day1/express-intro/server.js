const express = require("express");
const app = express();

app.get(`/`, (req, res) => {
    res.send("Hello ");
})

app.get(`/my-page`, (req, res) => {
    res.send("My name is zafer, I am 31 years old.")
})


app.listen(3000, () => {
    console.log("App is running on port 3000!");
})