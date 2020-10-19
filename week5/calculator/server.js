
// Make a calculator that takes two params from the URI and sends the sum to the browser!


const express = require('express');
const app = express();



const port = 3000;

app.listen(port, () => {
    console.log('app is running on port: ', port);
});