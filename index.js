const express = require("express");
const bodyparser = require("body-parser");
const controller_user = require("./src/user/controller");

const app = express();

app.use(bodyparser.json());

app.use("/user", controller_user);

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen(3000, () => {
  console.log("server is ready");
});
