import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import config from '../../config';

import style from './style.module.scss';

const { APP_BASEPATH } = config();

const CountryCard = ({ country, refs, index }) => {
  const { slug, iso2, name } = country;

  return (
    <div key={slug} className={style['country-card']}>
      <div className={style.flag}>
        <img
          ref={(el) => (refs[index] = el)}
          loading="lazy"
          width="100%"
          height="125px"
          className="lazyload"
          data-src={`${APP_BASEPATH}/assets/flags/${iso2.toLowerCase()}.svg`}
          alt=""
        />
      </div>
      <Link className={style['country-link']} to={`/${slug}`}>
        {name}
        <div className={style['go-cta']}>&raquo;</div>
      </Link>
    </div>
  );
};

export default memo(CountryCard);
