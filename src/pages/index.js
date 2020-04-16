import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/layout';
import countries from '../assets/data';
import config from '../config';

import style from './style.module.scss';

const { APP_BASEPATH } = config();

const HomePage = () => {
  const imagesRef = useRef([]);

  useEffect(() => {
    if ('loading' in HTMLImageElement.prototype) {
      imagesRef.current.forEach((img) => (img.src = img.getAttribute('data-src')));
    } else {
      // eslint-disable-next-line no-unused-expressions
      import('lazysizes');
    }
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
          {countries.map((country, i) => {
            return (
              <div key={country.slug} className={style['country']}>
                <div className={style.flag}>
                  <img
                    ref={(imgEl) => (imagesRef.current[i] = imgEl)}
                    loading="lazy"
                    className="lazyload"
                    data-src={`${APP_BASEPATH}/assets/flags/${country.iso2.toLowerCase()}.svg`}
                    alt=""
                  />
                </div>
                <Link className={style['country-link']} to={`/${country.slug}`}>
                  {country.name}
                  <div className={style['go-cta']}>&raquo;</div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
