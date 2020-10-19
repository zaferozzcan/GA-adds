
// Make a calculator that takes two params from the URI and sends the sum to the browser!


const express = require('express');
const { get } = require("http")
const app = express();

app.get("/calc/:num1/:num2", (req, res) => {

    console.log(req.query);
    if (req.query.op == "add") {
        res.send(`The total is ${Number(req.params.num1) + Number(req.params.num2)}`)
    } else {
        res.send("invalid")
    }

})


app.listen(3000, () => {
    console.log('app is running on port: ');
});