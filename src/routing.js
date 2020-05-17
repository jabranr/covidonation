import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './config/typography';
import HomePage from './pages';
import CountryRoutes from './routes/country-routes';
import NotFound from './pages/not-found';
import RouteWithSummary from './routes/route-with-summary';
import AddDataPage from './pages/add-data';
import TermsConditions from './pages/terms-conditions';
import PrivacyPolicy from './pages/privacy-policy';

const Routing = () => {
  return (
    <Switch>
      <RouteWithSummary exact path="/" component={HomePage} />
      <Route exact path="/add-data" component={AddDataPage} />
      <Route exact path="/terms" component={TermsConditions} />
      <Route exact path="/privacy-policy" component={PrivacyPolicy} />
      <CountryRoutes />
      <Route exact path="*" component={NotFound} />
    </Switch>
  );
};

export default Routing;
