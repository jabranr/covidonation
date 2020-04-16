/**
 * This script reads files in src/assets/data directory and generate
 * a file that is used by the app in runtime. The goal is to simplify
 * the data and only output minimum required data.
 *
 * @note That this file may change in future as requirements change.
 */

const fs = require('fs');
const path = require('path');

const countries = path.resolve(__dirname, './src/assets/data/countries');
const flags = path.resolve(__dirname, './public/assets/flags');
const countryList = fs.readdirSync(countries);
const countryData = [];

countryList.forEach((c) => {
  const content = JSON.parse(fs.readFileSync(`${countries}/${c}`));
  const hasFlag = fs.existsSync(`${flags}/${content.iso2Code.toLowerCase()}.svg`);

  countryData.push({
    name: content.country,
    slug: content.slug,
    iso2: content.iso2Code.toLowerCase(),
    hasFlag
  });
});

fs.writeFileSync(
  path.resolve(__dirname, './src/assets/data/index.js'),
  `/* Automatically generated file. DO NOT edit manually. See setup.js for details. */
export default ${JSON.stringify(countryData)};`
);
