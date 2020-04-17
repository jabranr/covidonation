import React, { useEffect, useRef } from 'react';

import Layout from '../components/layout';
import countries from '../assets/data';
import CountryCard from '../components/country-card';

import style from './style.module.scss';

const HomePage = () => {
  const imagesRef = useRef([]);

  useEffect(() => {
    if ('loading' in HTMLImageElement.prototype) {
      imagesRef.current.forEach((img) => (img.src = img.getAttribute('data-src')));
    } else {
      // eslint-disable-next-line no-unused-expressions
      import('lazysizes');
    }

    return () => (imagesRef.current = []);
  }, []);

  return (
    <Layout>
      <div className="container">
        <p className={style.intro}>
          Here you can find details about different organisations, charities, individuals who are trying to help the
          vulnerables during the panedmic of Coronavirus (COVID-19).
        </p>

        <h2 className="heading">Countries</h2>
        <p className={style['lead-text']}>
          Select a country to see details about{' '}
          <i>
            <strong>ways to help</strong>
          </i>
          .
        </p>
        <div className={style['countries-list']}>
          {countries.map((country, i) => (
            <CountryCard key={country.slug} country={country} refs={imagesRef.current} index={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
