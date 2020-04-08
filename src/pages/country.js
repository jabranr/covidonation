import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Layout from '../components/layout';
import Covid19Cases from '../components/covid19cases';
import Organisation from '../components/organisation';
import FormatUrlOrPhone from '../components/format-url-or-phone';
import config from '../config';
import { pushDataLayer } from '../util';

import style from './country.module.scss';

const { APP_HOSTNAME, APP_BASEPATH } = config();

const TickIcon = ({ width = 16, height = 14, ...attrs }) => (
  <svg width={width} height={height} viewBox={`0 0 ${width * 2} ${height * 2}`} fill="currentColor" {...attrs}>
    <path d="M19.414 27.414l10-10a2 2 0 000-2.828l-10-10a2 2 0 00-2.828 2.828L23.172 14H4a2 2 0 000 4h19.172l-6.586 6.586c-.39.39-.586.902-.586 1.414s.195 1.024.586 1.414a2 2 0 002.828 0z" />
  </svg>
);

const CountryPage = ({ summary, lastUpdated }) => {
  const location = useLocation();
  const [data, setData] = useState({});

  useEffect(() => {
    async function getLatestData() {
      try {
        const jsonData = await import(`../assets/data/countries/${summary.Slug}.json`);
        setData(jsonData);
      } catch (err) {
        pushDataLayer({
          event: 'gaEvent',
          gaCategory: 'Errors',
          gaAction: 'Country data error',
          gaLabel: JSON.stringify(err.response)
        });
      }
    }

    if (summary && summary.Slug) {
      getLatestData();
    }
  }, [summary]);

  return (
    <Layout
      title={`${data.country} - Ways to help in Coronavirus (COVID-19) panedmic`}
      description={`Details about different organisations, charities, individuals in ${data.country} who are trying to help the
          vulnerables during the panedmic of Coronavirus (COVID-19).`}
      canonical={`${APP_HOSTNAME}${APP_BASEPATH}${location.pathname}`}
    >
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
          <Covid19Cases summary={summary} lastUpdated={lastUpdated} />
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
