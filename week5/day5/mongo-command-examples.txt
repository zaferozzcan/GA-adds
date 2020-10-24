// var meetSection = [beef, chicken, turkey, ostrich, tofu, emu, buffalo]
// var toppings = [ketchup, mustard, guacamole, Worstershire sauce, french fries, hot fudge, mayonnaise, pickled beets, mango, sriracha, onions, ramen, pickles, capers, relish, fried banana and with peanut butter, olives, tabasco, kimchi, maple syrup, mushrooms, fried green tomatoes]

const { db } = require("../../student_examples/intro_to_mongoose/tweet")

// create 5 burgers (at least 3 should be beef)
use burger
db.createCollection('burgers')
db.burgers.insert([
    {
        meat: 'beef',
        cheese: "american",
        toppings: ["onions", "ramen", "pickles", "capers", "relish"]
    },
    {
        meat: 'turkey',
        cheese: false,
        toppings: ["ketchup", "mustard", "guacamole", "Worstershire"]
    },
    {
        meat: 'beef',
        cheese: "american",
        toppings: ["friedbanana", "peanutbutter", "olives", "relish"]
    },
    {
        meat: 'beef',
        cheese: "american",
        toppings: ["mango", "sriracha", "onions", "ramen", "pickles"]
    },
    {
        meat: 'tofu',
        cheese: "american",
        toppings: ["onions", "mango", "sriracha", "onions", "ramen", "pickles", "capers", "relish"]
    }
])



// find all the burgers
db.burgers.find().pretty()

// show just the meat of each burger
db.burgers.find({}, { meat: 1, _id: 0 }).pretty()

// show just the toppings of each burger
db.burgers.find({}, { toppings: 1, _id: 0 }).pretty()

// show everything but the cheese
db.burgers.find({}, { cheese: 0 })

// find all the burgers with beef
db.burgers.find({ meat: 'beef' })

// find all the burgers that are not beef
db.burgers.find({ meat: { $ne: 'beef' } })

// find the first burger with cheese
db.burgers.findOne({ cheese: 'american' })

// find one and update the first burger with cheese to have a property of 'double cheese'
db.burgers.findOneAndUpdate({ cheese: 'american' }, { $set: { cheese: 'double-cheese' } })

// find the burger you updated to have double cheese
db.burgers.findOne({ cheese: 'double-cheese' })

// find and update all the beef burgers to be 'veggie'
db.burgers.update({ meat: "beef" }, { $set: { meat: "veggie" } }, { multi: true })

// delete one of your veggie burgers
db.burgers.remove({ meat: "veggie" }, { justOne: true })
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})


// drop the collection
//Expected Output
//true

// drop the database
db.dropDatabase()
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }


//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database


//
// Change the name of the key cheese to 'pumpkinSpice'
db.burgers.update({}, { $rename: { "cheese": "pumpkinSpice" } }, { multi: true })

// find all the burgers with ketchup (or another topping you used at least once)
db.burgers.find({ toppings: { $in: [/ketchup/] } })
// find all the burgers with pickles (or a topping you used more than once) and remove the pickles
db.burgers.find({ toppings: { $in: [/pickles/] } })

// add a topping of 'eggs' to all the beef burgers
db.burgers.updateMany({ meat: 'beef' }, { $push: { toppings: 'egg' } })
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact

//Add a price to each burger, start with $5.00 for each burger 
db.burgers.update({}, { $set: { "price": 5 } }, false, true)
