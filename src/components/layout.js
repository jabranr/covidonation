import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import cookie from "js-cookie";

import style from "./style.module.scss";

const Layout = ({ children }) => {
  const location = useLocation();
  const [hasCookiesConsent, setCookieConsent] = useState(
    cookie.get("cookie-consent")
  );

  return (
    <div className={style.layout}>
      {!hasCookiesConsent && (
        <div className={style.cookie}>
          This website uses cookies to deliver better user experience. By
          continuing to use this website you agree to the use of cookies.
          <Link
            to="/"
            onClick={(ev) => {
              ev.preventDefault();
              cookie.set("cookie-consent", "accepted");
              setCookieConsent(true);
            }}
          >
            I understand
          </Link>
        </div>
      )}
      <header className={style.header}>
        {location.pathname === "/" ? (
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
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>
        <div>&copy; 2020 - MIT License</div>
        <div>
          Data sources are JHU, CSSE and WHO via{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.covid19api.com?utm_source=covidonation"
          >
            www.covid19api.com
          </a>
        </div>
        <div className={style["colophone"]}>
          Get in touch at{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.twitter.com/jabranr?utm_source=covidonation"
          >
            Twitter
          </a>
          &nbsp;&bull;&nbsp;Contribute at{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.github.com/jabranr/covidonation?utm_source=covidonation"
          >
            GitHub
          </a>
        </div>
        <p>&hearts; Created for humanity</p>
      </footer>
    </div>
  );
};

export default Layout;
