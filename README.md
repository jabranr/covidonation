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

| Description                                | Key         | Data Type    |
| ------------------------------------------ | ----------- | ------------ |
| Country Name (R)                           | `name`      | String       |
| Country Slug (R)                           | `slug`      | String       |
| Helplines (O)                              | `helplines` | String Array |
| Websites regarding COVID-19 by Country (O) | `links`     | String Array |
| Organizations (R)                          | `orgs`      | Arrays       |

**Minimum required data of an organization `orgs`**

| Description                           | Key            | Data Type     |
| :------------------------------------ | :------------- | :------------ |
| Name of the Organization (R)          | `name`         | String        |
| Description of the Organization (R)   | `description`  | String        |
| Contacts (R)                          | `contacts`     | String Array  |
| Donation Link (R)                     | `donation`     | String URL    |
| Social Links (O)                      | `social`       | Object Arrays |
| Need help with (R)                    | `needHelpWith` | String Array  |
| Organization helping with (R)         | `helpingWith`  | String Array  |
| Areas covered by the Organization (R) | `areasCovered` | String Array  |

**Optional Data for Social Links `social`**

| Description  | Key        | Data Type  |
| :----------- | :--------- | :--------- |
| Website (O)  | `website`  | String URL |
| Facebook (O) | `facebook` | String URL |
| Twitter (O)  | `twitter`  | String URL |

Example:

```
{
  "country": "Pakistan",
  "slug": "pakistan",
  "helplines": ["http://www.covid.gov.pk", "1166"],
  "links": ["https://www.nih.org.pk", "http://www.covidwatch.pk", "https://covidreliefpakistan.com"],
  "orgs": [
    {
      "name": "JDC Foundation Pakistan",
      "description": "They will help Sindh govt with providing food to isolated patients. They also have relief setups in Sindh where they offer free food to people. They are doubling their efforts nowadays.",
      "contacts": ["+922136341059", "+923330404043"],
      "donation": "https://www.facebook.com/JDC.organization/",
      "social": [
        {
          "website": "https://www.facebook.com/JDC.organization/",
          "facebook": "https://www.facebook.com/JDC.organization/",
          "twitter": "https://www.twitter.com/JDCOrganization/"
        }
      ],
      "needHelpWith": ["Money", "Volunteers"],
      "helpingWith": ["Rations", "PPE"],
      "areasCovered": ["Sindh", "Balochistan"]
    }
  ]
}
```

If you would like to report an issue or suggest something then [create an issue](https://github.com/jabranr/covidonation/issues).

## License

The source code is licensed under the MIT License unless stated otherwise. The data is attributed for their relevant sources.

---

&copy; 2020 Jabran Rafique

&hearts; Made for humanity
