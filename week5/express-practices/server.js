require("dotenv").config()
const express = require("express");
const app = express();

app.get('/greeting/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}`)
});


app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send(`${Number(req.params.total) / 100 * Number(req.params.tipPercentage)}`)
})

let quotes = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]

app.get('/magic/Will%20I%20Be%20A%20Millionaire', (req, res) => {
    res.send(`
        <h1>Will I be a millionare?</h1>
        <br>
        <h1>${quotes[Math.floor(Math.random() * quotes.length - 2)]}</h1>
    `)
})

const port = process.env.PORT;
console.log(port);
app.listen(port, () => {
    console.log("Server is running on port" + port);
})