import React, { useEffect, useState } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { find } from 'lodash-es';

import './config/typography';
import config from './config';
import apiClient from './config/api-client';
import HomePage from './pages';
import CountryPage from './pages/country';
import NotFound from './pages/not-found';
import countries from './assets/data';

import { pushDataLayer } from './util';

const { APP_BASEPATH } = config();

const history = createBrowserHistory({
  basename: APP_BASEPATH
});

// Register page view on app navigation
history.listen((location, action) => {
  if (location.pathname !== '/' && action === 'PUSH') {
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo(0, 0);
    }
  }

  pushDataLayer({
    event: 'PAGE_VIEW',
    url: `${location.pathname}${location.search}`
  });
});

const App = () => {
  const [summary, setSummary] = useState({});
  useEffect(() => {
    (async () => {
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
    })();
  }, []);

  return (
    <Router history={history} basename={APP_BASEPATH}>
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
    </Router>
  );
};

export default App;
export { history };
