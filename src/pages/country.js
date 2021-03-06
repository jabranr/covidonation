import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { find, isEmpty } from 'lodash-es';

import Layout from '../components/layout';
import Covid19Cases from '../components/covid19cases';
import Organisation from '../components/organisation';
import FormattedString from '../components/formatted-string';
import useSummary from '../store/summary-hook';
import config from '../config';
import { pushDataLayer } from '../util';
import SvgIcons from '../components/svg-icons';

import style from './country.module.scss';

const { APP_HOSTNAME, APP_BASEPATH } = config();

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
      title={`Ways to help in ${waysToHelp.country} during Coronavirus (COVID-19) panedmic`}
      description={`Details about different organisations, charities, individuals in ${waysToHelp.country} who are trying to help the
          vulnerable during the panedmic of Coronavirus (COVID-19).`}
      canonical={`${APP_HOSTNAME}${APP_BASEPATH}${location.pathname}`}
    >
      <div className="container">
        <div className={style.title}>
          <h1>{waysToHelp.country}</h1>
          <div className={style.helplines}>
            {waysToHelp.helplines &&
              waysToHelp.helplines.map((helplineData) => (
                <div key={helplineData}>
                  <FormattedString href={helplineData}>{helplineData}</FormattedString>
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
              <h4 className="lead">
                There is no data available for <i>{waysToHelp.country}</i> 😞
              </h4>
              <p className="lead">
                <Link to="/add-data">You can add</Link> an organisation, charity, individual or community group to
                update data for <strong>{waysToHelp.country}</strong> that will help humanity.
              </p>
              <p>
                &raquo;{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/jabranr/covidonation#how-to-contribute"
                >
                  Guidance on contributing dataset for a country
                </a>
              </p>
            </div>
          )}
          {waysToHelp.links && Boolean(waysToHelp.links.length) && (
            <div className={style.links}>
              <h2 className="heading">Other resources</h2>
              {waysToHelp.links.map((link) => (
                <div key={link} className={style.link}>
                  <SvgIcons name="tick" width={16} height={14} viewBox="0 0 32 28" className={style['tick-icon']} />
                  <FormattedString key={link} href={link}>
                    {link}
                  </FormattedString>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CountryPage;
