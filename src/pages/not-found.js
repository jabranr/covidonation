import React, { memo } from 'react';

import Layout from '../components/layout';

const NotFound = () => {
  return (
    <Layout title="Page not found - Covidonation">
      <div className="container">
        <h2>Not found</h2>
        <p>Sorry, the page your are looking for cannot be found.</p>
      </div>
    </Layout>
  );
};

export default memo(NotFound);
