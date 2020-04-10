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
        it('should have same filename as slug', () => {
          expect(filename.split('.')[0]).toEqual(content.slug);
        });
      });

      it('should have country name', () => {
        expect(content).toHaveProperty('country');
      });

      it('should have country name as string', () => {
        expect(Object.prototype.toString.call(content.country)).toEqual('[object String]');
      });

      it('should have country slug', () => {
        expect(content).toHaveProperty('slug');
      });

      it('should have country slug as string', () => {
        expect(Object.prototype.toString.call(content.slug)).toEqual('[object String]');
      });

      it('should have orgs', () => {
        expect(content).toHaveProperty('orgs');
      });

      it('should have list of orgs as an array', () => {
        expect(Object.prototype.toString.call(content.orgs)).toBe('[object Array]');
      });
    });
  });
});
