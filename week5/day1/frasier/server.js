const express = require("express");

const app = express();

function getResquest(route, message) {
    app.get(route, (req, res) => {
        res.send(message)
    });
}

getResquest("/frasier", "Once in prep school, the Existentialist Club once named me 'Most Likely to Be'")

getResquest("/niles", "You know, sometimes I wonder if I'm not just in psychiatry for the money")



app.listen(3000, () => {
    console.log("Server is running on port 3000");
})