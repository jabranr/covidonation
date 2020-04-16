import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './config/typography';
import config from './config';
import SummaryProvider from './store/summary-provider';
import Routing from './routing';
import { pushDataLayer } from './util';

const { APP_BASEPATH } = config();

const history = createBrowserHistory({
  basename: APP_BASEPATH
});

// Register page view on app navigation
history.listen((location, action) => {
  if (location.pathname !== '/' && action === 'PUSH') {
    window.scrollTo(0, 0);
  }

  pushDataLayer({
    event: 'PAGE_VIEW',
    url: `${location.pathname}${location.search}`
  });
});

const App = () => {
  return (
    <Router history={history} basename={APP_BASEPATH}>
      <SummaryProvider>
        <Routing />
      </SummaryProvider>
    </Router>
  );
};

export default App;
export { history };
