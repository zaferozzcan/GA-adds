const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/hotel'
const hotelSchema = require("./models/hotel")
const hotelSeed = require("./models/seed")

const db = mongoose.connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
    console.log('The connection with mongod is established')
})

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))

const Hotel = mongoose.model('Hotels', hotelSchema);

////////////////////////////
/////       Create    //////
////////////////////////////

// Hotel.create(hotelSeed, (err, data) => {
//     if (err) console.log(err.message)
//     console.log("added provided hotel data")
// }
// );

Hotel.count({}, (err, data) => {
    if (err) console.log(err.message);
    console.log(`There are ${data} hotels in this database`);
});

////////////////////////////
/////       Read      //////
////////////////////////////


//  1) find all our hotels and console.log them // 

// Hotel.find((err, data) => {
//     if (!err) {
//         console.log(data);
//     }
// })


// 2) find all the hotels but only return the hotel name and console.log them //

// Hotel.find({}, "name", (err, data) => {
//     if (!err) {
//         console.log(data);
//     }
// })


// 3) find just your hotel using a search parameter that would only match your hotel

// Hotel.find({ name: "Hilbert's Hotel" }, (err, data) => {
//     console.log(data);
// })


// 4) find all the hotels that have vacancies, also exclude ratings.

// Hotel.find({ vacancies: { $gte: true } }, (err, data) => {
//     console.log(data);
// })



////////////////////////////
/////       Delete    //////
////////////////////////////

// 1) turns out Hotelicopter was an April Fool's prank! Let's delete that one from our database

// Hotel.remove({ name: "Hotelicopter" }, (err, data) => {
//     console.log(data);
// })

// 2) Hilbert's Hotel is getting terrible ratings all it does is give everyone headaches and no room service. Let's just remove that one as well

// Hotel.remove({ name: "Hilbert's Hotel" }, (err, data) => {
//     console.log(data, "Hilbert Hotel is deleted");
// })

// 3) The hotel in the Colorado Rockies has been closed for undisclosed reasons. Delete this hotel too

// Hotel.remove({ location: "Colorado Rockies" }, (err, data) => {
//     console.log("hotel at Colorado Rockies has been removed.");
// })


////////////////////////////
/////       update    //////
////////////////////////////

// 1)The Great Northern's rating is only a 3! Update that to be a 5

// Hotel.findOneAndUpdate({ name: 'The Great Northern' }, { rating: 5 }, { new: true }, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// 2) Motel Bambi is now fully booked, change the vacancies to false

// Hotel.findOneAndUpdate({ name: "Motel Bambi" }, { vacancies: false }, { new: true }, (err, data) => {
//     if (!err) console.log(data);
// })

// 3) Things are on the decline for the Motel in 'White Bay, Oregon', change the rating to 2

// Hotel.findOneAndUpdate({ location: 'White Bay, Oregon' }, { rating: 2 }, { new: true }, (err, data) => {
//     if (!err) console.log(data);
// })