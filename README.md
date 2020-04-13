# COVIDonation

List of resources, donations, charities and information on ways to help in Coronavirus (COVID-19) pandemic.

> This is the uncompiled source code for covidonation.com website.

## Development

- Clone repository
- Install dependencies `npm install`
- Run project `npm start`
- Run project unit tests `npm test`
- Build project for production `npm run build`

## How to contribute

Contributions are most welcome. Send a pull request with your update.

If you would like to report an issue or suggest something then [create an issue](https://github.com/jabranr/covidonation/issues).

### Country data contribution

(R) Required fields
(O) Optional fields

**Minimum required data of a country**

| Description                                | Key         | Data Type     |
| ------------------------------------------ | ----------- | ------------- |
| Country Name (R)                           | `name`      | String        |
| Country Slug (R)                           | `slug`      | String        |
| Helplines (O)                              | `helplines` | Array(String) |
| Websites regarding COVID-19 by Country (O) | `links`     | Array(String) |
| Organizations (R)                          | `orgs`      | Array(Object) |

**Minimum required data of an organization `orgs`**

| Description                           | Key            | Data Type     |
| :------------------------------------ | :------------- | :------------ |
| Name of the Organization (R)          | `name`         | String        |
| Description of the Organization (R)   | `description`  | String        |
| Contacts (R)                          | `contacts`     | Array(String) |
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

If you would like to report an issue or suggest something then [create an issue](https://github.com/jabranr/covidonation/issues).

## License

The source code is licensed under the MIT License unless stated otherwise. The data is attributed for their relevant sources.

---

&copy; 2020 Jabran Rafique

&hearts; Made for humanity
