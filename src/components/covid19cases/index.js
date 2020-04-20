import React, { memo } from 'react';
import dayjs from 'dayjs';
import classNames from 'classnames';

import FormattedString from '../formatted-string';

import style from './style.module.scss';

const Covid19Cases = ({ summary, lastUpdated }) => {
  return (
    <div className={style.latest}>
      <div className={style['latest-info']}>
        <h3 className={classNames(style['latest-numbers'], style['latest-confirmed'])}>
          {summary && summary.TotalConfirmed && summary.TotalConfirmed.toLocaleString()}
        </h3>
        <p className={style['case-type']}>Confirmed</p>
      </div>
      <div className={style['latest-info']}>
        <h3 className={classNames(style['latest-numbers'], style['latest-recovered'])}>
          {summary && summary.TotalRecovered && summary.TotalRecovered.toLocaleString()}
        </h3>
        <p className={style['case-type']}>Recovered</p>
      </div>
      <div className={style['latest-info']}>
        <h3 className={classNames(style['latest-numbers'], style['latest-deaths'])}>
          {summary && summary.TotalDeaths && summary.TotalDeaths.toLocaleString()}
        </h3>
        <p className={style['case-type']}>Deaths</p>
      </div>
      <ul className={style['last-updated']}>
        {lastUpdated && (
          <li>
            {dayjs(lastUpdated).format('[Updated on] DD MMM YYYY [at] hh:mm:ssA')}{' '}
            <FormattedString href="https://everytimezone.com">UTC</FormattedString>
          </li>
        )}
        <li>
          Data source:{' '}
          <a href="https://covid19api.com?utm_source=covidonation" target="_blank" rel="noopener noreferrer">
            covid19api.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default memo(Covid19Cases);
