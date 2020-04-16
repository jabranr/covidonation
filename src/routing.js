import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './config/typography';
import HomePage from './pages';
import countries from './assets/data';
import NotFound from './pages/not-found';
import CountryPage from './pages/country';
import CovidRoute from './covid-route';

const Routing = () => {
  return (
    <Switch>
      <CovidRoute exact path="/" component={HomePage} />
      {countries.map((c) => (
        <CovidRoute
          path={`/${c.slug}`}
          slug={c.slug}
          iso2={c.iso2}
          render={(props) => {
            return <CountryPage slug={c.slug} iso2={c.iso2} {...props} />;
          }}
          key={c.slug}
        />
      ))}
      <Route exact path="*" component={NotFound} />
    </Switch>
  );
};

export default Routing;
