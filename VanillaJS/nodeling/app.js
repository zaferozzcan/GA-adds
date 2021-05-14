const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send(
    "<h1>I am the server, my message to you, browser, is f*** you!</h1>"
  );
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
