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
  if (email && password) {
    return res.status(200).send("we got your info, now checking for auth!");
  }
  const logInUser = users.filter((user) => user.email == req.body.email);
  console.log(logInUser);
  if (logInUser.password == req.body.password) {
    console.log("you are allset");
    return res.json({
      token: "1245",
      user: req.body.email,
    });
  }
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
