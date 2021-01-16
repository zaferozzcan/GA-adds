require("dotenv").config();
const express = require("express");
const { get } = require("http")
const app = express();



const port = process.env.PORT;
app.listen(port, (req, res) => {
    console.log("server is running");
})