import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import Layout from '../components/layout';
import config from '../config';

const { APP_HOSTNAME, APP_BASEPATH } = config();

const TermsConditions = () => {
  const location = useLocation();

  return (
    <Layout
      title={`Terms of service - Covidonation`}
      description={`Terms and conditions of service provided by Covidonation`}
      canonical={`${APP_HOSTNAME}${APP_BASEPATH}${location.pathname}`}
    >
      <div className="container">
        <h1>Terms of service</h1>
        <p className="lead">
          Covidonation is an informational platform helping anyone to donate or offer to help those working on the
          ground around the world. Those working on the ground can be organisations, individuals, community groups and
          charities.
        </p>
        <p>
          The data on this platform is provided or gathered voluntarily from various official or non-official accounts.
          The platform also <Link to="/add-data">accepts data submissions</Link> from anyone identified by their
          provided email address. This data is then processed and sanitized before making it available to the main
          website. The manual verification process may include checking and confirming the provided URL links.
        </p>
        <p>To keep data on this website transparently verifiable, we may not accept data that:</p>
        <ul>
          <li>does not include any URL links</li>
          <li>includes only phone numbers</li>
        </ul>
        <p>
          <strong>
            Covidonation is neither involved nor part of any of these entities. The platform does not accept or process
            any payments.
          </strong>
        </p>
        <p>
          It either provides a URL link or a phone number to relevant entities to make a donation or offer to help.
          Therefore Covidonation is not responsible for any financial or non-financial misconducts by these entities.
          The data may also include additional contact information such as multiple phone numbers or email addresses.
        </p>
        <p>
          This is a live document and it may change with time with addition or update of services and features provided
          on this website. Read more about our <Link to="/privacy-policy">privacy policy</Link>.
        </p>
        <p>
          <small>Last updated: 17 May 2020</small>
        </p>
      </div>
    </Layout>
  );
};

export default TermsConditions;
