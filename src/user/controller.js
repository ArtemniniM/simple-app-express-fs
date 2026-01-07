const express = require("express");
const router = express.Router();
const { getAllArr } = require("./service");

router.get("/", (req, res) => {
  res.send(getAllArr());
});

router.post("/", (req, res) => {
  res.send("Создать пользователя");
});

module.exports = router;
