const mongoose = require("mongoose");

const bookmarkSchema = mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
});

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);

module.exports = Bookmark;
