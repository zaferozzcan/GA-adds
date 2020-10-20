require("dotenv").config();
const express = require("express");
const app = express();

// data
const fruits = ["apple", "banana", "pear"];

//routes
app.get("/fruits/", (req, res) => {
    res.send(fruits)
})



const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});