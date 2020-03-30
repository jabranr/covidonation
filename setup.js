#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const countries = path.resolve(__dirname, "./src/assets/data/countries");
const list = fs.readdirSync(countries);
const cleanedList = list.map(v => v.replace(/\.json/gi, "")).join("','");

fs.writeFileSync(
  path.resolve(__dirname, "./src/assets/data/index.js"),
  `export default ['${cleanedList}']`
);
