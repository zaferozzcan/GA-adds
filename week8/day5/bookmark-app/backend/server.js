require("../node_modules/dotenv").config();
const express = require("express");
const PORT = process.env.PORT;
const app = express();

//controllers
const bookmarkController = require("./controllers/bookmark_controller");
app.use("/bookmarks", bookmarkController);

app.listen(PORT || 3003, () => {
  console.log("🚩server is running on port ", PORT);
});
