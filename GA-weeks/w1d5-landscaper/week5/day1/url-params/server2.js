const express = require('express');
const { get } = require('http');
const app = express();

app.get('/howdy/:firstName', function (req, res) {
    console.log(req.query);
    res.send('hello ' + req.query.title + ' ' + req.params.firstName);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
})