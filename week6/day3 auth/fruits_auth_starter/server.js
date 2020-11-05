// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
require("dotenv").config()
const session = require('express-session')

// CONFIGURATION

const app = express()
const db = mongoose.connection
const PORT = process.env.PORT
const mongodbURI = process.env.MONGODBURI



// MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  session({
    secret: process.env.SECRET, //a random string do not copy this value or your stuff will get hacked
    resave: false, // default more info: https://www.npmjs.com/package/express-session#resave
    saveUninitialized: false // default  more info: https://www.npmjs.com/package/express-session#resave
  })
)


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
// FRUIT CONTROLLER
const fruitsController = require('./controllers/fruits_controller.js')
const { use } = require('./controllers/users_controller.js')
app.use('/fruits', fruitsController)

// USER CONTROLLER
const userController = require('./controllers/users_controller.js')
app.use("/users", userController)

// SESSION CONTROLLER
const sessionsController = require('./controllers/sessions_controller.js')
app.use('/sessions', sessionsController)

// Routes
app.get('/', (req, res) => {
  res.redirect('/fruits')
})


// Listener
app.listen(PORT, () => {
  console.log('🍒🍋Listening on port🥝🍉', PORT)
})
