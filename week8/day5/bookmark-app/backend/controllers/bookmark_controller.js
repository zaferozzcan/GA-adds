const express = require("express");
const bookmarkRouter = express.Router();
const mongoose = require("mongoose");
const Bookmark = require("../models/bookmark");

// get route
bookmarkRouter.get("/");

module.exports = bookmarkRouter;
