const fs = require('fs');
const path = require('path');

const countries = path.resolve(__dirname, './src/assets/data/countries');
const countryList = fs.readdirSync(countries);
const countryData = [];

countryList.forEach((c) => {
  const content = JSON.parse(fs.readFileSync(path.resolve(__dirname, `./src/assets/data/countries/${c}`)));
  countryData.push({
    name: content.country,
    slug: content.slug
  });
});

fs.writeFileSync(
  path.resolve(__dirname, './src/assets/data/index.js'),
  `/* Automatically generated file. DO NOT edit manually. */
export default ${JSON.stringify(countryData)};`
);
