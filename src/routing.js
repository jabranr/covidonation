import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './config/typography';
import HomePage from './pages';
import CountryRoutes from './routes/country-routes';
import NotFound from './pages/not-found';
import CovidRoute from './routes/covid-route';

const Routing = () => {
  return (
    <Switch>
      <CovidRoute exact path="/" component={HomePage} />
      <CountryRoutes />
      <Route exact path="*" component={NotFound} />
    </Switch>
  );
};

export default Routing;
