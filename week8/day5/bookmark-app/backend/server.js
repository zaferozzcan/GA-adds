require("../node_modules/dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const mongoURI = process.env.mongoURI;
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DATABASE
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

// database err connection check
mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

//controllers
const bookmarkController = require("./controllers/bookmark_controller");
app.use("/bookmarks", bookmarkController);

app.listen(PORT || 3003, () => {
  console.log("🚩server is running on port ", PORT);
});
