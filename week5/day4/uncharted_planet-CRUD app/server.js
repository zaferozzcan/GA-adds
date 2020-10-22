const express = require("express");
PORT = 3000;
const app = express();

app.get("/index", (req, res) => {
    res.render("index.ejs")
})


app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
})