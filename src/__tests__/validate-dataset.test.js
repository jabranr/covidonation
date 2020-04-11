const fs = require('fs');
const path = require('path');
const countries = require('../assets/data');
const countryFilesPath = path.resolve(__dirname, '../assets/data/countries');
const countryFilesList = fs.readdirSync(countryFilesPath);

describe('Validate dataset', () => {
  countryFilesList.forEach((filename) => {
    const fileContent = fs.readFileSync(`${countryFilesPath}/${filename}`);
    const content = JSON.parse(fileContent);

    describe(content.country, () => {
      describe('Optional dataset', () => {
        // helplines
        if (content.helplines) {
          describe('Helplines', () => {
            it('should be an array', () => {
              expect(Object.prototype.toString.call(content.helplines)).toEqual('[object Array]');
            });

            it('should have minimum 1 value', () => {
              expect(content.helplines).not.toHaveLength(0);
            });

            it('should have maximum 3 values', () => {
              expect(content.helplines.length).not.toBeGreaterThan(3);
            });

            it('should have values as string', () => {
              content.helplines.forEach((hl) => {
                expect(Object.prototype.toString.call(hl)).toEqual('[object String]');
              });
            });
          });
        }

        // links
        if (content.links) {
          describe('Links', () => {
            it('should be an array', () => {
              expect(Object.prototype.toString.call(content.links)).toEqual('[object Array]');
            });

            it('should have minimum one value', () => {
              expect(content.links).not.toHaveLength(0);
            });

            it('should have values as string', () => {
              content.links.forEach((link) => {
                expect(Object.prototype.toString.call(link)).toEqual('[object String]');
              });
            });
          });
        }
      });

      describe('Organisation minimum dataset', () => {
        if (content.orgs.length) {
          content.orgs.forEach((org) => {
            describe(org.name, () => {
              describe('Name (required)', () => {
                it('should have a name', () => {
                  expect(org).toHaveProperty('name');
                });

                it('should have name as string', () => {
                  expect(Object.prototype.toString.call(org.name)).toEqual('[object String]');
                });
              });

              describe('Description (required)', () => {
                it('should have a description', () => {
                  expect(org).toHaveProperty('description');
                });

                it('should have description as string', () => {
                  expect(Object.prototype.toString.call(org.description)).toEqual('[object String]');
                });
              });

              describe('Donation (required)', () => {
                it('should have donation', () => {
                  expect(org).toHaveProperty('donation');
                });

                it('should have a value for donation', () => {
                  expect(org.donation).toBeTruthy();
                });

                it('should have donation as string', () => {
                  expect(Object.prototype.toString.call(org.donation)).toEqual('[object String]');
                });
              });

              describe('Areas Covered (required)', () => {
                it('should have areasCovered', () => {
                  expect(org).toHaveProperty('areasCovered');
                });

                it('should have areasCovered as array', () => {
                  expect(Object.prototype.toString.call(org.areasCovered)).toEqual('[object Array]');
                });

                it('should have areasCovered values as string', () => {
                  org.areasCovered.forEach((ac) => {
                    expect(Object.prototype.toString.call(ac)).toEqual('[object String]');
                  });
                });
              });

              // contacts
              if (org.contacts) {
                describe('Contacts (optional)', () => {
                  it('should be an array', () => {
                    expect(Object.prototype.toString.call(org.contacts)).toEqual('[object Array]');
                  });

                  it('should have minimum one value', () => {
                    expect(org.contacts).not.toHaveLength(0);
                  });

                  it('should have values as string', () => {
                    org.contacts.forEach((contact) => {
                      expect(Object.prototype.toString.call(contact)).toEqual('[object String]');
                    });
                  });
                });
              }

              // social
              if (org.social) {
                describe('Social (optional)', () => {
                  it('should be an array', () => {
                    expect(Object.prototype.toString.call(org.social)).toEqual('[object Array]');
                  });

                  it('should have minimum one value', () => {
                    expect(org.social).not.toHaveLength(0);
                  });

                  it('should be an array of objects', () => {
                    org.social.forEach((s) => {
                      expect(Object.prototype.toString.call(s)).toEqual('[object Object]');
                    });
                  });

                  it('should have website, twitter or facebook links only', () => {
                    const expected = ['website', 'facebook', 'twitter'];
                    org.social.forEach((s) => {
                      Object.keys(s).forEach((k) => {
                        expect(expected.includes(k)).toBeTruthy();
                      });
                    });
                  });
                });
              }
            });
          });
        }
      });
    });
  });
});
