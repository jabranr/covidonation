import React from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

import Layout from '../components/layout';
import config from '../config';
import { pushDataLayer } from '../util';

import style from './add-data.module.scss';

const { APP_HOSTNAME, APP_BASEPATH } = config();

const AddDataPage = () => {
  const location = useLocation();

  return (
    <Layout
      title={`Add an organisation, charity, individual or community group for Covidonation`}
      description={`Add an organisation, charity, individual or community group working on ground around the world to help people in need in Coronavirus pandemic.`}
      canonical={`${APP_HOSTNAME}${APP_BASEPATH}${location.pathname}`}
    >
      <div className="container">
        <iframe
          loading="lazy"
          className={classNames('lazyload', style.iframe)}
          src="https://docs.google.com/forms/d/e/1FAIpQLSfrPizYFPbo94mYE-LeZ_AiXHsOuxcTf_XKo8oeDZnTiOo3og/viewform?embedded=true"
          title="Add an organisation, charity, individual or community group"
          width="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading...
        </iframe>
      </div>
    </Layout>
  );
};

export default AddDataPage;
