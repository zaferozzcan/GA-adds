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
holidays.post("/", (req, res) => {
  console.log(req.body);
  Holiday.create(req.body, (error, createdHoliday) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).json(createdHoliday);
  });
});

//delete
holidays.delete("/:id", (req, res) => {
  Holiday.findByIdAndRemove(req.params.id, (err, deletedHoliday) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(deletedHoliday);
  });
});

holidays.put("/:id", (req, res) => {
  Holiday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedHoliday) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(updatedHoliday);
    }
  );
});
module.exports = holidays;
