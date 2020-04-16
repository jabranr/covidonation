const fs = require('fs');
const path = require('path');
const countries = require('../assets/data');
const countryFilesPath = path.resolve(__dirname, '../assets/data/countries');
const countryFilesList = fs.readdirSync(countryFilesPath);

describe('Minimum dataset', () => {
  it('should have equal number of files', () => {
    expect(countryFilesList.length).toEqual(countries.default.length);
  });

  countryFilesList.forEach((filename) => {
    const fileContent = fs.readFileSync(`${countryFilesPath}/${filename}`);
    const content = JSON.parse(fileContent);

    describe(`Minimum datset for ${content.country}`, () => {
      describe('File name', () => {
        it('should be same as slug', () => {
          const [name] = filename.split('.');
          expect(name).toEqual(content.slug);
        });

        it('should be lowercase and hyphens only', () => {
          const [name] = filename.split('.');
          expect(new RegExp('[a-z-]', 'g').test(name)).toEqual(true);
        });
      });

      describe('name', () => {
        it('should have country name', () => {
          expect(content).toHaveProperty('country');
        });

        it('should have country name as string', () => {
          expect(Object.prototype.toString.call(content.country)).toEqual('[object String]');
        });
      });

      describe('slug', () => {
        it('should have country slug', () => {
          expect(content).toHaveProperty('slug');
        });

        it('should have country slug as string', () => {
          expect(Object.prototype.toString.call(content.slug)).toEqual('[object String]');
        });
      });

      describe('orgs', () => {
        it('should have orgs', () => {
          expect(content).toHaveProperty('orgs');
        });

        it('should have list of orgs as an array', () => {
          expect(Object.prototype.toString.call(content.orgs)).toEqual('[object Array]');
        });
      });

      describe('iso2Code', () => {
        it('should have iso2Code', () => {
          expect(content).toHaveProperty('iso2Code');
        });

        it('should have iso2Code as string', () => {
          expect(Object.prototype.toString.call(content.iso2Code)).toEqual('[object String]');
        });

        it('should have a 2 letters value for iso2Code', () => {
          expect(content.iso2Code.length).toEqual(2);
        });

        it('should have all uppercase value for iso2Code', () => {
          expect(new RegExp('[A-Z]', 'g').test(content.iso2Code)).toEqual(true);
        });
      });

      describe('iso3Code', () => {
        it('should have iso3Code', () => {
          expect(content).toHaveProperty('iso3Code');
        });

        it('should have iso3Code as string', () => {
          expect(Object.prototype.toString.call(content.iso3Code)).toEqual('[object String]');
        });

        it('should have a 3 letters value for iso3Code', () => {
          expect(content.iso3Code.length).toEqual(3);
        });

        it('should have all uppercase value for iso3Code', () => {
          expect(new RegExp('[A-Z]', 'g').test(content.iso3Code)).toEqual(true);
        });
      });
    });
  });
});
