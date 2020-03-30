import React, { lazy, useState, useEffect } from "react";

import Layout from "../components/layout";
import Covid19Cases from "../components/covid19cases";
import apiClient from "../config/api-client";
import { find } from "lodash-es";

import style from "./country.module.scss";

const CountryPage = ({ slug }) => {
  const [data, setData] = useState({});
  const [summary, setSummary] = useState({});

  async function getLatestData() {
    try {
      const jsonData = await import(`../assets/data/countries/${slug}.json`);
      setData(jsonData);

      const response = await apiClient.get("/summary");
      const summary = find(response.data.Countries, { Slug: slug });
      const lastUpdated = response.data.Date;
      setSummary({ ...summary, lastUpdated });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getLatestData();
  }, []);

  return (
    <Layout>
      <div className="container">
        <h1 className={style.title}>{data.country}</h1>
        <div className={style.stats}>
          <Covid19Cases
            totalConfirmed={summary.TotalConfirmed}
            totalRecovered={summary.TotalRecovered}
            totalDeaths={summary.TotalDeaths}
            lastUpdated={summary.lastUpdated}
          />
        </div>
        <h2 className="heading">Ways to help</h2>
      </div>
    </Layout>
  );
};

export default CountryPage;
