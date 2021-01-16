const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
}, { timestamps: true });

const Product = mongoose.model('Products', productSchema);

module.exports = Product;