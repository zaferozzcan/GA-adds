const express = require('express');
const { get } = require('http');
const app = express();

const plants = [
    'Monstera Deliciosa', 'Corpse Flower',
    'Elephant-Foot Yam', "Witches Butter",];

app.get('/awesome', (req, res) => {
    res.send('<p>Plants are <strong>awesome!</strong></p>');
});

app.get('/:firstName?title=student', (req, res) => {
    res.send(`Hello ${res.query.student} ${res.params.firstName}`)
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})