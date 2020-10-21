const express = require("express");
const { get } = require("http");

const app = express();
const PORT = 3000;



app.get("/index", (req, res) => {
    res.send("Server is up and running!")
})




app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})