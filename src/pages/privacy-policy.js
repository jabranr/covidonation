import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import Layout from '../components/layout';
import config from '../config';

const { APP_HOSTNAME, APP_BASEPATH } = config();

const PrivacyPolicy = () => {
  const location = useLocation();

  return (
    <Layout
      title={`Privacy policy - Covidonation`}
      description={`Privacy policy about data usage at Covidonation`}
      canonical={`${APP_HOSTNAME}${APP_BASEPATH}${location.pathname}`}
    >
      <div className="container">
        <h1>Privacy policy</h1>
        <p className="lead">
          Covidonation is committed to protecting the privacy of its users in whatever way it is accessed, provided or
          obtained.
        </p>
        <p>Following statement explains about data collection, its usage and security.</p>
        <h2>Data submitted by users</h2>
        <p>
          Covidonation asks for an email address at the <Link to="/add-data">data submission form</Link> where anyone
          can submit data for an organisation, individual, community group or a charity. This email address is primarily
          taken for the validity of the submission and not stored. Unless, users can choose to subscribe to our
          newsletter, in that case, their email address will be stored in our mailing list. Subscribed users will always
          have an option unsubscribe through the newsletter they will receive.
        </p>
        <p>
          Regardlessly, the email addresses are not shared with anyone for any type of business or individual interests.
        </p>
        <p>
          Covidonation uses{' '}
          <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
            Google Forms
          </a>{' '}
          for data submissions which may collect data such as IP address, browser information and more; according to
          their terms of service.
        </p>
        <h2>Cookies</h2>
        <p>
          Covidonation uses{' '}
          <a href="https://en.wikipedia.org/wiki/HTTP_cookie" target="_blank" rel="noopener noreferrer">
            cookies
          </a>{' '}
          to enhance the user experience, track errors and actions taken at different pages for analytics purposes.
          These cookies are either first-party cookies, set by Covidonation or third-party cookies, set by tools used on
          the website.
        </p>
        <p>Here is a rough list of first-party and third-party cookies that may be sent to the user's browser.</p>
        <p>
          <ol>
            <li>Covidonation</li>
            <ul>
              <li>cookie-consent</li>
            </ul>

            <li>Google Analytics</li>
            <ul>
              <li>_gid</li>
              <li>_ga</li>
              <li>_gat_UA-9809111-18</li>
            </ul>

            <li>Cloudflare</li>
            <ul>
              <li>__cfduid</li>
            </ul>
          </ol>
        </p>

        <p>
          Covidonation displays a banner at top of the page to comply with EU cookie consent law that informs users
          about the usage of cookies on the website. The dismission of cookie consent saves a cookie by name of
          <i>cookie-consent</i> to remember the user choice for future visits.
        </p>
        <p>
          Covidonation uses{' '}
          <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer">
            Google Analytics
          </a>{' '}
          to record visitor incoming traffic. This helps to improve the dataset according to the relevance to the user’s
          location, browsers and other factors. Google Analytics may gather different types of information from the user
          side which could include browser type, location, landing sources and their time on the website. For more
          information on how this information is used by Google and how much of this information is provided to
          Covidonation, please read
          <a href="http://www.google.com/intl/en/privacy/privacy-policy.html" target="_blank" rel="noopener noreferrer">
            Google privacy policy
          </a>
          .
        </p>
        <p>
          Covidonation uses{' '}
          <a href="https://cloudflare.com" target="_blank" rel="noopener noreferrer">
            Cloudflare
          </a>{' '}
          that is an internet proxy service for content delivery or otherwise known as Content-Delivery Network (CDN).
          Cloudflare enables us to deliver a fast performing website by caching the static assets or files of different
          types such as images at their servers around the world so it can be delivered as quickly as possible.
          Cloudflare also helps with the security of the website.
        </p>
        <h2>Third-party contents</h2>
        <p>
          Covidonation often relies on external data, assets to produce a better user experience. Wherever such a case,
          we try to keep a link back to the original authors, creators and sources according to their license terms.
        </p>
        <p>
          This is a live document and it may change with time with addition or update of services and features provided
          on this website. Read more about our <Link to="/terms">terms of service</Link>.
        </p>
        <p>
          <small>Last updated: 17 May 2020</small>
        </p>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
