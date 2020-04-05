import React, { useState, useEffect } from 'react';

import Layout from '../components/layout';
import Covid19Cases from '../components/covid19cases';
import Organisation from '../components/organisation';
import FormatUrlOrPhone from '../components/format-url-or-phone';
import apiClient from '../config/api-client';
import { find } from 'lodash-es';

import style from './country.module.scss';

const TickIcon = ({ width = 16, height = 14, ...attrs }) => (
  <svg width={width} height={height} viewBox={`0 0 ${width * 2} ${height * 2}`} fill="currentColor" {...attrs}>
    <path d="M19.414 27.414l10-10a2 2 0 000-2.828l-10-10a2 2 0 00-2.828 2.828L23.172 14H4a2 2 0 000 4h19.172l-6.586 6.586c-.39.39-.586.902-.586 1.414s.195 1.024.586 1.414a2 2 0 002.828 0z" />
  </svg>
);

const CountryPage = ({ slug }) => {
  const [data, setData] = useState({});
  const [summary, setSummary] = useState({});

  useEffect(() => {
    async function getLatestData() {
      try {
        const jsonData = await import(`../assets/data/countries/${slug}.json`);
        setData(jsonData);

        const response = await apiClient.get('/summary');
        const summary = find(response.data.Countries, { Slug: slug });
        const lastUpdated = response.data.Date;
        setSummary({ ...summary, lastUpdated });
      } catch (err) {
        console.log(err);
      }
    }

    if (Boolean(slug)) {
      getLatestData();
    }
  }, [slug]);

  return (
    <Layout>
      <div className="container">
        <div className={style.title}>
          <h1>{data.country}</h1>
          <div className={style.helplines}>
            {data.helplines &&
              data.helplines.map((helplineData) => (
                <div key={helplineData}>
                  <FormatUrlOrPhone href={helplineData}>{helplineData}</FormatUrlOrPhone>
                </div>
              ))}
          </div>
        </div>
        <div className={style.stats}>
          <Covid19Cases
            totalConfirmed={summary.TotalConfirmed}
            totalRecovered={summary.TotalRecovered}
            totalDeaths={summary.TotalDeaths}
            lastUpdated={summary.lastUpdated}
          />
        </div>
        {data.orgs && Boolean(data.orgs.length) && (
          <div>
            <h2 className="heading">Ways to help</h2>
            {data.orgs && data.orgs.map((org) => <Organisation key={org.name} org={org} />)}
          </div>
        )}
        {data.links && Boolean(data.links.length) && (
          <div className={style.links}>
            <h2 className="heading">Other resources</h2>
            {data.links &&
              data.links.map((link) => (
                <div key={link}>
                  <TickIcon className={style['tick-icon']} />
                  <FormatUrlOrPhone key={link} href={link}>
                    {link}
                  </FormatUrlOrPhone>
                </div>
              ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CountryPage;
