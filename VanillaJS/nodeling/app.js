const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send(
    "<form style='margin:100px 0 0 100px'><input type='text'></input><input type='text'></input><button>Calculate</button></form>"
  );
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
