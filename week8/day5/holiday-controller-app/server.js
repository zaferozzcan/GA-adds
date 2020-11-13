const express = require("express");
const app = express();
const PORT = 3003;

// controllers
const holidaysController = require("./controller/holidays.js");
app.use("/holidays", holidaysController);

app.listen(PORT, () => {
  console.log("🎉🎊", "celebrations happening on port", PORT, "🎉🎊");
});
