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
const countryRoutes = [];

countryList.forEach((c) => {
  const content = JSON.parse(fs.readFileSync(`${countries}/${c}`));
  const hasFlag = fs.existsSync(`${flags}/${content.iso2Code.toLowerCase()}.svg`);

  countryData.push({
    name: content.country,
    slug: content.slug,
    iso2: content.iso2Code.toLowerCase(),
    hasFlag
  });

  countryRoutes.push(
    `<CovidRoute exact path="/${content.slug}" slug="${content.slug}" render={(props) => <CountryPage slug="${content.slug}" {...props} />} />`
  );
});

// write file with slugs for all countries
fs.writeFileSync(
  path.resolve(__dirname, './src/assets/data/index.js'),
  `/* Automatically generated file. DO NOT edit manually. See setup.js for details. */
export default ${JSON.stringify(countryData)};`
);

// write file with routes based on slugs for all countries
fs.writeFileSync(
  path.resolve(__dirname, './src/routes/country-routes.js'),
  `/* Automatically generated file. DO NOT edit manually. */
import React from 'react';

import CountryPage from '../pages/country';
import CovidRoute from './covid-route';

const CountryRoutes = () => (
  <>
    ${countryRoutes.join('\n')}
  </>
);

export default CountryRoutes;`
);
