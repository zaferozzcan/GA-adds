// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
require("dotenv").config()

// CONFIGURATION

const app = express()
const db = mongoose.connection
const PORT = process.env.PORT
const mongodbURI = process.env.MONGODBURI


// USER CONTROLLER
const userController = require('./controllers/users_controller.js')
app.use("/users", userController)

// MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))



// DATABASE
mongoose.connect(
  mongodbURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
  () => {
    console.log('the connection with mongod is established at', mongodbURI)
  }
)

// Optional, but likely helpful
// Connection Error/Success
// Define callback functions for various events
db.on('error', err => console.log(err.message + ' is mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

// Controllers
const fruitsController = require('./controllers/fruits_controller.js')
app.use('/fruits', fruitsController)

// Routes
app.get('/', (req, res) => {
  res.redirect('/fruits')
})

// Listener
app.listen(PORT, () => {
  console.log('🍒🍋Listening on port🥝🍉', PORT)
})
