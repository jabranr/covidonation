import React, { memo } from 'react';

import FormatUrlOrPhone from '../format-url-or-phone';

import style from './style.module.scss';

const Organisation = ({ org }) => {
  return (
    <div className={style.org}>
      <h4 className={style.name}>{org.name}</h4>
      <p className={style.description} dangerouslySetInnerHTML={{ __html: org.description }} />
      {org.areasCovered && Boolean(org.areasCovered.length) && (
        <>
          <h6 className={style['ac-title']}>Areas Covered</h6>
          <p className={style['areas-covered']}>{org.areasCovered.join(', ')}</p>
        </>
      )}
      <FormatUrlOrPhone href={org.donation} className={style['donation-cta']}>
        Donate
      </FormatUrlOrPhone>
    </div>
  );
};

export default memo(Organisation);
