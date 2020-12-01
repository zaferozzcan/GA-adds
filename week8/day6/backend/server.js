const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

users = [];

app.post("/users/register", (req, res) => {
  users.push(req.body);
  console.log(users);
  if (users) {
    return res.status(200).send("User is created");
  }
});

app.post("/users/login", (req, res) => {
  const { email, password } = req.body;
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
