const express = require("express");
const holidays = express.Router();
const Holiday = require("../model/holidays");

holidays.get("/", (req, res) => {
  Holiday.find({}, (err, foundHolidays) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundHolidays);
  });
});

// create
holidays.post("/", async (req, res) => {
  Holiday.create(req.body, (err, createHoliday) => {
    if (!err) {
      res.status(400).json({ err: err.message });
    } else {
      res.send(err);
    }
  });
});

module.exports = holidays;
