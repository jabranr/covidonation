import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { find } from 'lodash-es';

import Layout from '../components/layout';
import Covid19Cases from '../components/covid19cases';
import Organisation from '../components/organisation';
import FormatUrlOrPhone from '../components/format-url-or-phone';
import useSummary from '../store/summary-hook';
import config from '../config';
import { pushDataLayer } from '../util';

import style from './country.module.scss';
import { isEmpty } from 'lodash-es';

const { APP_HOSTNAME, APP_BASEPATH } = config();

const TickIcon = ({ width = 16, height = 14, ...attrs }) => (
  <svg width={width} height={height} viewBox={`0 0 ${width * 2} ${height * 2}`} fill="currentColor" {...attrs}>
    <path d="M19.414 27.414l10-10a2 2 0 000-2.828l-10-10a2 2 0 00-2.828 2.828L23.172 14H4a2 2 0 000 4h19.172l-6.586 6.586c-.39.39-.586.902-.586 1.414s.195 1.024.586 1.414a2 2 0 002.828 0z" />
  </svg>
);

const CountryPage = ({ slug }) => {
  const location = useLocation();
  const [summary] = useSummary();
  const [waysToHelp, setWaysToHelp] = useState({});

  useEffect(() => {
    async function getLatestData() {
      try {
        const jsonData = await import(`../assets/data/countries/${slug}.json`);
        setWaysToHelp(jsonData);
      } catch (err) {
        pushDataLayer({
          event: 'gaEvent',
          gaCategory: 'Errors',
          gaAction: 'Country data error',
          gaLabel: JSON.stringify(err.response)
        });
      }
    }

    if (isEmpty(waysToHelp)) {
      getLatestData();
    }
  }, [waysToHelp, setWaysToHelp, slug]);

  if (isEmpty(waysToHelp)) {
    return null;
  }

  return (
    <Layout
      title={`${waysToHelp.country} - Ways to help in Coronavirus (COVID-19) panedmic`}
      description={`Details about different organisations, charities, individuals in ${waysToHelp.country} who are trying to help the
          vulnerables during the panedmic of Coronavirus (COVID-19).`}
      canonical={`${APP_HOSTNAME}${APP_BASEPATH}${location.pathname}`}
    >
      <div className="container">
        <div className={style.title}>
          <h1>{waysToHelp.country}</h1>
          <div className={style.helplines}>
            {waysToHelp.helplines &&
              waysToHelp.helplines.map((helplineData) => (
                <div key={helplineData}>
                  <FormatUrlOrPhone href={helplineData}>{helplineData}</FormatUrlOrPhone>
                </div>
              ))}
          </div>
        </div>
        <div className={style.stats}>
          <Covid19Cases summary={find(summary.data, { Slug: slug })} lastUpdated={summary.lastUpdated} />
        </div>
        <div className={style['content']}>
          {Boolean(waysToHelp.orgs.length) ? (
            <div>
              <h2 className="heading">
                Ways to help <span className={style.badge}>{waysToHelp.orgs.length}</span>
              </h2>
              {waysToHelp.orgs.map((org) => (
                <Organisation key={org.name} org={org} />
              ))}
            </div>
          ) : (
            <div>
              <h4>There is no data available for {waysToHelp.country} 😞</h4>
              <p>
                But good news is that you can{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://github.com/jabranr/covidonation/blob/master/src/assets/data/countries/${waysToHelp.slug}.json`}
                >
                  edit this file
                </a>{' '}
                to update data that will help the humanity. 😀
              </p>
              <p>
                Here is some guidance on{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/jabranr/covidonation#how-to-contribute"
                >
                  contributing
                </a>{' '}
                the data for a country.
              </p>
            </div>
          )}
          {waysToHelp.links && Boolean(waysToHelp.links.length) && (
            <div className={style.links}>
              <h2 className="heading">Other resources</h2>
              {waysToHelp.links.map((link) => (
                <div key={link} className={style.link}>
                  <TickIcon className={style['tick-icon']} />
                  <FormatUrlOrPhone key={link} href={link}>
                    {link}
                  </FormatUrlOrPhone>
                </div>
              ))}
            </div>
          )}
          {Boolean(waysToHelp.orgs.length) && (
            <a
              className={style['update-data']}
              target="_blank"
              rel="noopener noreferrer"
              href={`https://github.com/jabranr/covidonation/blob/master/src/assets/data/countries/${waysToHelp.slug}.json`}
            >
              Update data for {waysToHelp.country} &raquo;
            </a>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CountryPage;
