const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const PORT = 3003;

const whitelist = [
  "http://localhost:3000",
  "https://fathomless-sierra-68956.herokuapp.com",
];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// middleware
app.use(cors(corsOptions));
app.use(express.json());

// Error / Disconnection
mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

//...farther down the page

mongoose.connect("mongodb://localhost:27017/holidays", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

// controllers
const holidaysController = require("./controller/holidays.js");
app.use("/holidays", holidaysController);

app.listen(PORT, () => {
  console.log("🎉🎊", "celebrations happening on port", PORT, "🎉🎊");
});
