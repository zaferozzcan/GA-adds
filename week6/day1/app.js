const express = require("express")
PORT = 3000;
const app = express();

app.get("/new", (req, res) => {
    res.render("new.ejs")
})



app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})


