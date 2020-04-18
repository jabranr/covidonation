import React, { useEffect, useRef, useState, useReducer } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import axios from 'axios';

import Layout from '../components/layout';
import countries from '../assets/data';
import CountryCard from '../components/country-card';
import genericReducer from '../store/generic-reducer';
import { TickIcon } from './country';

import style from './style.module.scss';

const SearchIcon = ({ width = 18, height = 18, ...attrs }) => (
  <svg width={width} height={height} viewBox={`0 0 ${width * 2} ${height * 2}`} fill="currentColor" {...attrs}>
    <path d="M31.008 27.231l-7.58-6.447c-.783-.705-1.621-1.028-2.298-.997A11.952 11.952 0 0024 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12c2.972 0 5.69-1.08 7.787-2.87-.032.677.292 1.515.997 2.298l6.447 7.58c1.104 1.227 2.907 1.33 4.007.23s.997-2.903-.23-4.007zM12 20a8 8 0 110-16 8 8 0 010 16z" />
  </svg>
);

const HomePage = () => {
  const formRef = useRef();
  const imagesRef = useRef([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [signupForm, dispatchSignupForm] = useReducer(genericReducer, {
    isValid: false,
    isSubmitting: false,
    data: {
      u: '659f1405e2b20906f44429441',
      id: 'f8f1d42230'
    }
  });

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    // eslint-disable-next-line no-useless-escape
    if (formRef.current.checkValidity() && /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/.test(signupForm.data.MERGE0)) {
      dispatchSignupForm({ isSubmitting: true });

      if (Boolean(signupForm.error)) {
        dispatchSignupForm({ error: '' });
      }

      try {
        await axios.post(formRef.current.getAttribute('action'), signupForm.data, {
          withCredentials: true
        });

        dispatchSignupForm({
          success: 'You have subscribed successfully',
          data: { ...signupForm.data, MERGE0: '' }
        });
      } catch (err) {
        console.log(err.response, err.data);
        dispatchSignupForm({ error: 'An error occurred while trying to subscribed' });
      } finally {
        dispatchSignupForm({ isSubmitting: false });
      }
    } else {
      dispatchSignupForm({ error: 'Please provide a valid email address' });
    }
  };

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

        <div className={style['mc-form']}>
          <p>Subscribe for updates</p>
          <form
            ref={formRef}
            action="https://covidonation.us19.list-manage.com/subscribe/post"
            method="POST"
            noValidate
            onSubmit={handleSubmit}
          >
            <input
              className={style.input}
              type="email"
              autoCapitalize="off"
              autoCorrect="off"
              name="MERGE0"
              id="MERGE0"
              size="25"
              defaultValue=""
              onChange={(ev) => {
                const changes = {
                  data: {
                    ...signupForm.data,
                    MERGE0: ev.target.value
                  },
                  isValid: Boolean(ev.target.value.length) && ev.target.value.length > 7
                };

                if (signupForm.error) {
                  changes.error = '';
                }

                dispatchSignupForm(changes);
              }}
            />
            <button className={style.submit} type="submit" disabled={!signupForm.isValid || signupForm.isSubmitting}>
              {signupForm.isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
            {signupForm.error && <div className={style.error}>{signupForm.error}</div>}
            {signupForm.success && <div className={style.success}>{signupForm.success}</div>}
          </form>
        </div>

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
              placeholder="Type a country name"
              type="text"
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
                  <li
                    className={classNames(style['result-item'], {
                      [style['even-item']]: i % 2 !== 0
                    })}
                    key={c.slug}
                  >
                    <TickIcon />
                    <Link className={style['result-link']} to={`/${c.slug}`}>
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
