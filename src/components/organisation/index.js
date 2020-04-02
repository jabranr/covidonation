import React, { memo } from 'react';

import FormatUrlOrPhone from '../format-url-or-phone';

import style from './style.module.scss';

const PhoneIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 1024 1024" fill="currentColor">
    <path d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.11 12.11 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z" />
  </svg>
);

const WebIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 1024 1024" fill="currentColor">
    <path d="M15 2C6.716 2 0 8.716 0 17c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15zm8.487 20a23.85 23.85 0 00.493-4h3.982a12.87 12.87 0 01-.958 4h-3.517zM6.513 12a23.85 23.85 0 00-.493 4H2.038a12.87 12.87 0 01.958-4h3.517zm14.926 0c.3 1.28.48 2.62.54 4H16v-4h5.439zM16 10V4.146c.456.132.908.355 1.35.668.832.585 1.626 1.487 2.299 2.608.465.776.867 1.638 1.203 2.578H16zm-5.649-2.578c.673-1.12 1.467-2.023 2.298-2.609A4.563 4.563 0 0114 4.146V10H9.148a14.48 14.48 0 011.203-2.578zM14 12v4H8.021c.06-1.38.24-2.72.54-4H14zM2.997 22a12.87 12.87 0 01-.96-4H6.02a23.85 23.85 0 00.493 4H2.997zm5.024-4H14v4H8.561c-.3-1.28-.48-2.62-.54-4zM14 24v5.854a4.566 4.566 0 01-1.35-.667c-.832-.586-1.626-1.488-2.299-2.61A14.48 14.48 0 019.148 24H14zm5.649 2.578c-.673 1.12-1.467 2.023-2.298 2.609a4.565 4.565 0 01-1.351.667V24h4.852c-.336.94-.738 1.802-1.203 2.578zM16 22v-4h5.979c-.06 1.38-.24 2.72-.54 4H16zm7.98-6a23.85 23.85 0 00-.493-4h3.517a12.87 12.87 0 01.958 4H23.98zm1.978-6h-2.997c-.582-1.836-1.387-3.447-2.353-4.732a12.962 12.962 0 013.584 2.54A13.032 13.032 0 0125.958 10zM5.808 7.808a12.963 12.963 0 013.584-2.54C8.425 6.553 7.622 8.164 7.04 10H4.042a13.032 13.032 0 011.766-2.192zM4.042 24h2.997c.582 1.836 1.387 3.447 2.353 4.732a12.96 12.96 0 01-3.584-2.54A13.029 13.029 0 014.042 24zm20.15 2.192a12.962 12.962 0 01-3.584 2.54c.966-1.285 1.77-2.896 2.353-4.732h2.997a13.032 13.032 0 01-1.766 2.192z" />
  </svg>
);

const LocationIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 1024 1024" fill="currentColor">
    <path d="M512 0C335.268 0 192 143.268 192 320c0 320 320 704 320 704s320-384 320-704C832 143.268 688.73 0 512 0zm0 512c-106.04 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z" />
  </svg>
);

const Organisation = ({ org }) => {
  return (
    <div className={style.org}>
      <h4 className={style.name}>{org.name}</h4>
      {org.areasCovered && Boolean(org.areasCovered.length) && (
        <div className={style['areas-covered']}>
          <LocationIcon />
          <div>
            {org.areasCovered.map((a) => (
              <a
                className={style['ac-link']}
                target="_blank"
                rel="noopener noreferrer"
                href={`//maps.google.com?q=${a}`}
              >
                {a}
              </a>
            ))}
          </div>
        </div>
      )}
      <p className={style.description} dangerouslySetInnerHTML={{ __html: org.description }} />
      <FormatUrlOrPhone href={org.donation} className={style['donation-cta']}>
        {/[0-9-+ ]/.test(org.donation) ? <PhoneIcon /> : <WebIcon />} Make a donation
      </FormatUrlOrPhone>
    </div>
  );
};

export default memo(Organisation);
