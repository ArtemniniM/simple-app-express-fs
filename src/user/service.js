const fs = require("fs");

function read() {
  const json = fs.readFileSync("./src/user/library.json");
  const arr = JSON.parse(json);
  return arr;
}

function getAllArr() {
  const arr = read();
  return arr;
}

module.exports = { getAllArr };
