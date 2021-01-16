const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const hotelSchema = new Schema({
    name: String,
    location: String,
    rating: Number,
    vacancies: Boolean,
    rooms: [{ roomNumber: Number, size: String, price: Number, booked: Boolean }],

}, { timestamps: true });

module.exports = hotelSchema;

