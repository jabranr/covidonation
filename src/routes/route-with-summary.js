import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import dayjs from 'dayjs';

import apiClient from '../config/api-client';
import useSummary from '../store/summary-hook';
import config from '../config';
import { pushDataLayer } from '../util';

const { IS_PRODUCTION } = config();

const RouteWithSummary = (props) => {
  const [summary, setSummary] = useSummary();

  useEffect(() => {
    const getSummary = async () => {
      try {
        const response = await apiClient.get('/summary');
        setSummary({
          data: response.data.Countries,
          lastUpdated: response.data.Date,
          ts: +dayjs()
        });
      } catch (err) {
        pushDataLayer({
          event: 'gaEvent',
          gaCategory: 'Errors',
          gaAction: `API error`,
          gaLabel: JSON.stringify(err.response)
        });
      }
    };

    const diff = dayjs().subtract(1, IS_PRODUCTION ? 'hour' : 'minute');
    if (!summary.ts || dayjs(summary.ts).isBefore(+diff)) {
      getSummary();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Route {...props} />;
};

export default RouteWithSummary;
