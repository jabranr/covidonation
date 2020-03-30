import React, { Suspense } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./config/typography";
import config from "./config";
import HomePage from "./pages";
import CountryPage from "./pages/country";
import NotFound from "./pages/not-found";
import countries from "./assets/data";

const { APP_BASEPATH } = config();

const history = createBrowserHistory({
  basename: APP_BASEPATH
});

// Register page view on app navigation
history.listen((location, action) => {
  if (window.dataLayer !== undefined) {
    window.dataLayer.push({
      event: "PAGE_VIEW",
      url: `${location.pathname}${location.search}`
    });
  }
});

const App = () => {
  return (
    <Router history={history} basename={APP_BASEPATH}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {countries.map(slug => (
          <Route
            path={`/${slug}`}
            render={props => {
              return <CountryPage {...props} slug={slug} />;
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
