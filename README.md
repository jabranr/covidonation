# COVIDonation

List of resources, donations, charities and information on ways to help in Coronavirus (COVID-19) pandemic.

> This is the uncompiled source code for covidonation.com website.

## Development

- Clone repository
- Install dependencies
  - `npm install`
- Run project locally
  - `npm start`
- Run project unit tests
  - `npm test`
- Build project for production
  - `npm run build`

## Pull requests

All pull requests must pass unit tests and checks.

A preview is automatically generated for each pull request. Netlify bot will comment with preview link in the pull request. Pull requests are merged into production branch once reviewed and approved.

## Staging

Staging is based on successful merge of a pull request into the `master` branch. Nightly builds are available at the following URL:

https://staging-covidonation.netlify.com

[![Netlify Staging Status](https://api.netlify.com/api/v1/badges/446db57e-b7d0-47bf-bdeb-b907aa1f17c5/deploy-status)](https://app.netlify.com/sites/staging-covidonation/deploys)

See details of our [next milestone](https://github.com/jabranr/covidonation/milestones) to contribute to the on-going development.

## Releases

`master` is the production branch. Production releases are batched and based on milestones. See details of our [next milestone](https://github.com/jabranr/covidonation/milestones) to contribute to the next release.

## How to contribute

We would love you to contribute to improve the platform!

See our [latest development](https://github.com/jabranr/covidonation/milestones) and already [reported issues](https://github.com/jabranr/covidonation/issues) to find out if there is something you can help us with. If not then create a new issue and send a pull request with your update.

> Beware it is best to discuss before you start to work on a major change or new big feature.

If you would like to report an issue or request a new feature then you can [create an issue](https://github.com/jabranr/covidonation/issues).

### Country data contribution

[Use this form](https://covidonation.com/add-data) to add data for a country. The provided data is then reviewed and processed into the website in next 24-48 hours.

Here is the breakdown of fields structure in the country data files.

(R) Required fields
(O) Optional fields

**Minimum required data of a country**

| Description                      | Key         | Data Type     |
| -------------------------------- | ----------- | ------------- |
| Country Name (R)                 | `name`      | String        |
| Country Slug (R)                 | `slug`      | String        |
| Country ISO Code (2 letters) (R) | `iso2Code`  | String        |
| Country ISO Code (3 letters) (R) | `iso3Code`  | String        |
| Helplines (O)                    | `helplines` | Array(String) |
| Related websites (O)             | `links`     | Array(String) |
| Organizations (R)                | `orgs`      | Array(Object) |

**Minimum required data of an organization `orgs`**

| Description                           | Key            | Data Type     |
| :------------------------------------ | :------------- | :------------ |
| Name of the Organization (R)          | `name`         | String        |
| Description of the Organization (R)   | `description`  | String        |
| Contacts (O)                          | `contacts`     | Array(String) |
| Donation Link / Phone number (R)      | `donation`     | String        |
| Social Links (O)                      | `social`       | Array(Object) |
| Need help with (R)                    | `needHelpWith` | Array(String) |
| Organization helping with (R)         | `helpingWith`  | Array(String) |
| Areas covered by the Organization (R) | `areasCovered` | Array(String) |

**Optional Data for Social Links `social`**

| Description  | Key        | Data Type |
| :----------- | :--------- | :-------- |
| Website (O)  | `website`  | String    |
| Facebook (O) | `facebook` | String    |
| Twitter (O)  | `twitter`  | String    |

Example Reference File: [`pakistan.json`](https://github.com/jabranr/covidonation/blob/master/src/assets/data/countries/pakistan.json)

## License

The source code is licensed under the MIT License unless stated otherwise. The data is attributed to their relevant sources.

---

&copy; 2020 Jabran Rafique

&hearts; Made for humanity
