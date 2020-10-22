
// Make a calculator that takes two params from the URI and sends the sum to the browser!

require('dotenv').config()
const express = require('express');
const { get } = require("http")
const app = express();

app.get("/calc/:num1/:num2", (req, res) => {

    console.log(req.query);
    if (req.query.op == "add") {
        res.send(`The total is ${Number(req.params.num1) + Number(req.params.num2)}`)
    } else if (req.query.op == "mul") {
        res.send(`The total is ${Number(req.params.num1) * Number(req.params.num2)}`)
    } else if (req.query.op == "min") {
        res.send(`The total is ${Number(req.params.num1) - Number(req.params.num2)}`)
    } else if (req.query.op == "div") {
        res.send(`The total is ${Number(req.params.num1) / Number(req.params.num2)}`)
    } else {
        res.send("invalid operation")
    }

})


const port = process.env.PORT;
app.listen(port, () => {
    console.log('app is running on port: ');
});

