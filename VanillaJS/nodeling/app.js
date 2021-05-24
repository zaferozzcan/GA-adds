const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", function (req, res) {
  res.send(
    "<form method='POST' style='margin:100px 0 0 100px'><input type='text' name='num1'></input><input type='text' name='num2'></input><button>Calculate</button></form>"
  );
});

app.post("/", function (req, res) {
  let sum = Number(req.body.num1) + Number(req.body.num2);
  res.send("your sum is " + `${sum}`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
// smart app 
