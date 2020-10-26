const express = require("express")
const PORT = 3000;
const app = express();


//MODEL//
const mongoose = require('mongoose');
const Product = require("./models/shop");


mongoose.connect('mongodb://localhost:27017/shopDB', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});



//SEED DATA//
app.get('/products/seed', (req, res) => {
    Product.create([
        {
            name: 'Beans',
            description: 'A small pile of beans. Buy more beans for a big pile of beans.',
            img: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
            price: 5,
            qty: 99
        }, {
            name: 'Bones',
            description: 'It\'s just a bag of bones.',
            img: 'http://bluelips.com/prod_images_large/bones1.jpg',
            price: 25,
            qty: 0
        }, {
            name: 'Bins',
            description: 'A stack of colorful bins for your beans and bones.',
            img: 'http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg',
            price: 7000,
            qty: 1
        }
    ])
    res.send("Seed data has been created")
});



// APP ROUTES //

// index page
app.get("/products", (req, res) => {
    res.render("index.ejs", {
        product: Product.find({})
    })
})





app.listen(PORT, () => {
    console.log("Server is up and running on port", PORT);
})


