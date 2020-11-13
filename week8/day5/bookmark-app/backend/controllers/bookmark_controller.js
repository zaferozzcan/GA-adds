const express = require("express");
const bookmarkRouter = express.Router();
const mongoose = require("mongoose");
const Bookmark = require("../models/bookmark");

// get route
bookmarkRouter.get("/", (req, res) => {
  Bookmark.find({}, (err, data) => {
    if (!err) {
      res.status(200).json(data);
    } else {
      res.status(400).json({ error: err.message });
    }
  });
});

// post route
bookmarkRouter.post("/", (req, res) => {
  Bookmark.create(req.body, (err, data) => {
    console.log(err);
    console.log(data);
    if (!err) {
      console.log(data);
      res.status(200).json(data);
    } else {
      res.status(400).json({ error: err.message });
    }
  });
});

module.exports = bookmarkRouter;
