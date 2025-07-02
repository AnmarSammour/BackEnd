const fs = require("fs");

const DATA_FILE = "./src/data/persons.json";

const readData = () => {
  try {
    const dataJson = fs.readFileSync(DATA_FILE).toString();
    return JSON.parse(dataJson);
  } catch (error) {
    return [];
  }
};

const writeData = (data) => {
  const dataJson = JSON.stringify(data, null, 2);
  fs.writeFileSync(DATA_FILE, dataJson);
};

module.exports = { readData, writeData };