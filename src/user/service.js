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

function getById(id) {
  const arr = read();
  const data = arr.find((el) => el.id == id);
  return data;
}

function postObj(label, category, priority) {
  const arr = read();
  const id = label.toLowerCase().split(" ").join("");
  arr.push({ id, label, category, priority });
  fs.writeFileSync("./languages.json", JSON.stringify(arr));
  return arr;
}

function updateArray(id, obj) {
  const arr = read();
  const index = arr.findIndex((el) => el.id == id.toLowerCase());
  if (index == -1) {
    return null;
  } else {
    arr[index] = { ...arr[index], ...obj };
    fs.writeFileSync("./library.json", JSON.stringify(arr));
    return arr;
  }
}

function deleteObj(id) {
  const arr = read();
  const index = arr.findIndex((el) => el.id == id.toLowerCase());
  if (index == -1) {
    return null;
  } else {
    arr.splice(index, 1);
    fs.writeFileSync("./library.json", JSON.stringify(arr));
    return arr;
  }
}

module.exports = { getAllArr, getById, postObj, updateArray, deleteObj };
