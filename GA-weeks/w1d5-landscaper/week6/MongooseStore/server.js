const express = require("express")
const methodOverride = require("method-override")
const PORT = 3000;
const app = express();


//MODEL//
const mongoose = require('mongoose');
const { findByIdAndUpdate } = require("./models/shop");
const Product = require("./models/shop");


mongoose.connect('mongodb://localhost:27017/shopDB', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

const productsController = require('./controllers/products');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))
app.use('/products', productsController);



app.listen(PORT, () => {
    console.log("Server is up and running on port", PORT);
})




