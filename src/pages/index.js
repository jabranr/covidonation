import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import Layout from '../components/layout';
import countries from '../assets/data';
import CountryCard from '../components/country-card';
import SvgIcons from '../components/svg-icons';

import style from './style.module.scss';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const searchRef = useRef();
  const imagesRef = useRef([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

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
          Find details about different organisations, charities and individuals who are working around the world to help
          the vulnerable during the pandemic of Coronavirus (COVID-19).
        </p>

        <h2 className="heading">Countries</h2>

        <div className={style['country-search']}>
          <label>
            <p className={style['lead-text']}>
              Select a country to see details about{' '}
              <i>
                <strong>ways to help</strong>
              </i>
              .
            </p>
            <div className={style.search}>
              <input
                ref={searchRef}
                type="text"
                placeholder="Type a country name"
                className={style['search-input']}
                onChange={(ev) => {
                  if (ev.target.value.length < 3) {
                    return;
                  }

                  const newList = countries.filter((c) => new RegExp(ev.target.value, 'gi').test(c.name));
                  setFilteredCountries(newList);
                }}
              />
              <SvgIcons name="search" width={18} height={18} viewBox="0 0 36 36" className={style['search-icon']} />
            </div>
          </label>
          {Boolean(filteredCountries.length) && (
            <>
              <p className={style['result-indicator']}>Search result</p>
              <ul className={style['search-result']}>
                {filteredCountries.map((c, i) => (
                  <li className={classNames(style['result-item'], { [style['even-item']]: i % 2 !== 0 })} key={c.slug}>
                    <SvgIcons name="tick" width={16} height={14} viewBox="0 0 32 28" />
                    <Link
                      className={style['result-link']}
                      to={`/${c.slug}?utm_source=search&utm_keyword=${searchRef.current.value}`}
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
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
