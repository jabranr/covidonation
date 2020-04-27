import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import Layout from '../components/layout';
import countries from '../assets/data';
import CountryCard from '../components/country-card';
import { TickIcon } from './country';

import style from './style.module.scss';
import { Link } from 'react-router-dom';

const SearchIcon = ({ width = 18, height = 18, ...attrs }) => (
  <svg width={width} height={height} viewBox={`0 0 ${width * 2} ${height * 2}`} fill="currentColor" {...attrs}>
    <path d="M31.008 27.231l-7.58-6.447c-.783-.705-1.621-1.028-2.298-.997A11.952 11.952 0 0024 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12c2.972 0 5.69-1.08 7.787-2.87-.032.677.292 1.515.997 2.298l6.447 7.58c1.104 1.227 2.907 1.33 4.007.23s.997-2.903-.23-4.007zM12 20a8 8 0 110-16 8 8 0 010 16z" />
  </svg>
);

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
        <div className={style['country-search']}>
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
            <SearchIcon className={style['search-icon']} />
          </div>
          {Boolean(filteredCountries.length) && (
            <>
              <p className={style['result-indicator']}>Search result</p>
              <ul className={style['search-result']}>
                {filteredCountries.map((c, i) => (
                  <li className={classNames(style['result-item'], { [style['even-item']]: i % 2 !== 0 })} key={c.slug}>
                    <TickIcon />
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
