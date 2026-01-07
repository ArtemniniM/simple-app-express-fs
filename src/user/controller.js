const express = require("express");
const router = express.Router();
const { getAllArr, getById, postObj, updateArray, deleteObj } = require("./service");

router.get("/", (req, res) => {
  res.json(getAllArr());
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const result = getById(id);
  if (result) {
    res.json(result);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

router.post("/", (req, res) => {
  const { name, surname, email, pwd } = req.body;
  const result = postObj(name, surname, email, pwd);
  res.status(201).json(result);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const obj = req.body;
  const result = updateArray(id, obj);
  if (result == null) {
    res.status(404).json({ error: "Not found" });
  } else {
    res.status(200).json(result);
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const result = deleteObj(id);
  res.status(200).json(result);
});

module.exports = router;
