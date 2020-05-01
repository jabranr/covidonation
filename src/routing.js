import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './config/typography';
import HomePage from './pages';
import CountryRoutes from './routes/country-routes';
import NotFound from './pages/not-found';
import RouteWithSummary from './routes/route-with-summary';
import AddDataPage from './pages/add-data';

const Routing = () => {
  return (
    <Switch>
      <RouteWithSummary exact path="/" component={HomePage} />
      <Route exact path="/add-data" component={AddDataPage} />
      <CountryRoutes />
      <Route exact path="*" component={NotFound} />
    </Switch>
  );
};

export default Routing;
