const express = require("express");
const mongoose = require("mongoose");
const PORT = 3003;

// init app
const app = express();

// database
mongoose.connect("mongodb://localhost:27017/animalsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});
// database err check
mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

// controller
const animalController = require("./controllers/animal_controller");
app.use("/animals", animalController);

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
