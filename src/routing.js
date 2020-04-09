import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { find } from 'lodash-es';

import './config/typography';
import apiClient from './config/api-client';
import HomePage from './pages';
import CountryPage from './pages/country';
import NotFound from './pages/not-found';
import countries from './assets/data';
import useSummary from './store/summary-hook';
import { pushDataLayer } from './util';

const Routing = () => {
  const [summary, setSummary] = useSummary({});

  useEffect(() => {
    (async () => {
      if (!summary.data) {
        try {
          const response = await apiClient.get('/summary');
          setSummary({ data: response.data.Countries, lastUpdated: response.data.Date });
        } catch (err) {
          pushDataLayer({
            event: 'gaEvent',
            gaCategory: 'Errors',
            gaAction: `API error`,
            gaLabel: JSON.stringify(err.response)
          });
        }
      }
    })();
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      {countries.map((slug) => (
        <Route
          path={`/${slug}`}
          render={(props) => {
            const countrySummary = find(summary.data, { Slug: slug });
            return <CountryPage summary={countrySummary} lastUpdated={summary.lastUpdated} {...props} />;
          }}
          key={slug}
        />
      ))}
      <Route exact path="*" component={NotFound} />
    </Switch>
  );
};

export default Routing;
