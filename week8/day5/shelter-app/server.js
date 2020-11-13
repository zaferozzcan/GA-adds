const express = require("express");
const mongoose = require("mongoose");
const PORT = 3003;

const app = express();

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
