import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import cookie from 'js-cookie';

import SvgIcons from './svg-icons';

import style from './style.module.scss';

const Layout = ({ title, description, canonical, children }) => {
  const location = useLocation();
  const [hasCookiesConsent, setCookieConsent] = useState(cookie.get('cookie-consent'));

  return (
    <div className={style.layout}>
      <Helmet>
        <title>{title || `Covidonation - Ways to help in Coronavirus (COVID-19) panedmic`}</title>
        <meta
          name="description"
          content={
            description ||
            `List of resources, donations, charities and information on ways to help in Coronavirus (COVID-19) pandemic.`
          }
        />
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>
      {!hasCookiesConsent && (
        <div className={style.cookie}>
          <p className={style['cookie-text']}>
            This website uses cookies to deliver better user experience. By continuing to use this website you agree to
            the use of cookies.
          </p>
          <button
            type="button"
            className={style['cookie-cta']}
            onClick={(ev) => {
              cookie.set('cookie-consent', 'accepted');
              setCookieConsent(true);
            }}
          >
            Accept cookies
          </button>
        </div>
      )}
      <header className={style.header}>
        {location.pathname === '/' ? (
          <div className={style.branding}>
            <h1 className={style.logo}>COVIDONATION</h1>
            <div className={style.tagline}>Ways to help</div>
          </div>
        ) : (
          <div className={style.branding}>
            <Link to="/" className={style.logo}>
              COVIDONATION
            </Link>
            <div className={style.tagline}>Ways to help</div>
          </div>
        )}
        {location.pathname !== '/add-data' && (
          <nav className={style.nav}>
            <Link to="/add-data" className={style['nav-item']}>
              <SvgIcons name="plus" width={16} height={16} viewBox="0 0 32 32" className={style['plus-icon']} />
              Add
            </Link>
          </nav>
        )}
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>
        <div>&copy; 2020 - MIT License</div>
        <div>
          Data sources are JHU CSSE and WHO via{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://www.covid19api.com?utm_source=covidonation">
            www.covid19api.com
          </a>
          <br />
          Country flags from{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://restcountries.eu?utm_source=covidonation">
            www.restcountries.eu
          </a>
        </div>
        <div className={style['colophone']}>
          <Link to="/terms">Terms of service</Link>&nbsp;&bull;&nbsp;<Link to="/privacy-policy">Privacy policy</Link>
          <br />
          Get in touch at{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/jabranr?utm_source=covidonation">
            Twitter
          </a>
          &nbsp;&bull;&nbsp;Contribute at{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.github.com/jabranr/covidonation?utm_source=covidonation"
          >
            GitHub
          </a>
        </div>
        <p>&hearts; Made for humanity</p>
      </footer>
    </div>
  );
};

export default Layout;
