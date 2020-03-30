import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../components/layout";
import countries from "../assets/data";

import style from "./style.module.scss";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [updated, setUpdated] = useState(null);

  return (
    <Layout>
      <div className="container">
        <p className={style.intro}>
          Here you can find details about different organisations, charities,
          individuals who are trying to help the vulnerables during the global
          panedmic of Coronavirus (COVID-19).
        </p>

        <h2 className="heading">Countries</h2>
        <p>
          Select a country to see details about{" "}
          <i>
            <strong>ways to help</strong>
          </i>
          .
        </p>
        <div className={style["countries-list"]}>
          {countries.map(country => (
            <Link
              className={style["country-link"]}
              to={`/${country}`}
              key={country}
            >
              {country}
            </Link>
          ))}
        </div>

        {/* <h2 className="heading">Latest</h2>
        <CovidCases
          totalConfirmed={data.TotalConfirmed}
          totalRecovered={data.TotalRecovered}
          totalDeaths={data.TotalDeaths}
          lastUpdated={updated}
        /> */}

        {/* <h2>Latest advice</h2>
        <ul>
          <li>Stay home</li>
          <li>Avoid non-essential travel</li>
          <li>Keep at least 2 meters distance from non-household members</li>
        </ul>
        <p>
          If you think that you have Coronavirus COVID-19 like symptoms then you{" "}
          <strong>MUST</strong> stay at home and isolate yourself from others
          for at least 7 days. You <strong>must NOT</strong> go to see a doctor
          or to a hospital. By doing so you will endanger other people lives as
          well as yours.
        </p>
        <h4>Official Pakistan government website</h4>
        <p>
          Get latest information on Coronavirus (COVID-19) pandemic in Pakistan
          at{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.covid.gov.pk?utm_source=covidonation"
          >
            www.covid.gov.pk
          </a>
        </p>
        <div className={style["getting-help"]}>
          <div>
            <h4>Doctors helpline (24 hours)</h4>
            <a href="tel:+924299231669">+924299231669</a>
            <a href="tel:+924299231670">+924299231670</a>
            <a href="tel:+923011102229">+923011102229</a>
            <p>
              consult a doctor via Video at www.doctors247.online from all over
              Pakistan.
            </p>
          </div>
          <div>
            <h4>World Health Organisation</h4>
            <img
              className={style["whatsapp-icon"]}
              src={whatsAppIcon}
              alt=""
              width="32px"
            />
            <a className={style["who-whatsapp"]} href="tel:+41798931892">
              +417 9893 1892
            </a>
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default HomePage;
