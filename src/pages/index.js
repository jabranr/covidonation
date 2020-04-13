import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/layout';
import countries from '../assets/data';

import style from './style.module.scss';

const HomePage = () => {
  return (
    <Layout>
      <div className="container">
        <p className={style.intro}>
          Here you can find details about different organisations, charities, individuals who are trying to help the
          vulnerables during the panedmic of Coronavirus (COVID-19).
        </p>

        <h2 className="heading">Countries</h2>
        <p>
          Select a country to see details about{' '}
          <i>
            <strong>ways to help</strong>
          </i>
          .
        </p>
        <div className={style['countries-list']}>
          {countries.map((country) => (
            <Link className={style['country-link']} to={`/${country.slug}`} key={country.slug}>
              {country.name}
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
