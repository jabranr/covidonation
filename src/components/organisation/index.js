import React, { memo, useState, useRef } from 'react';

import FormattedString from '../formatted-string';
import { pushDataLayer } from '../../util';
import SvgIcons from '../svg-icons';

import style from './style.module.scss';

const isInViewport = function (elem, stickyHeaderOffset = 100) {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 + stickyHeaderOffset &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const Organisation = ({ org }) => {
  const cardRef = useRef();
  const contactRef = useRef();

  const [isDetailedView, setDetailedView] = useState(false);

  const scrollToTopOfCard = () => {
    if (isInViewport(cardRef.current)) {
      return;
    }

    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        top: cardRef.current.offsetTop - 100,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo(0, cardRef.current.offsetTop - 100);
    }
  };

  return (
    <div ref={cardRef} className={style.org}>
      <div className={style.header}>
        <h3 className={style.name}>{org.name}</h3>
        {Boolean(org.areasCovered.length) && (
          <div className={style['areas-covered']}>
            <SvgIcons name="location" width={14} height={14} viewBox="0 0 1024 1024" />
            <div>
              {org.areasCovered.map((areaCovered) => (
                <a
                  key={areaCovered}
                  className={style['ac-link']}
                  onClick={() => {
                    pushDataLayer({
                      event: 'gaEvent',
                      gaCategory: 'Areas covered CTA',
                      gaAction: areaCovered,
                      gaLabel: org.name
                    });
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`//maps.google.com?q=${areaCovered}`}
                >
                  {areaCovered}
                </a>
              ))}
            </div>
          </div>
        )}
        {Boolean(org.helpingWith) && (
          <div className={style['helping-with']}>
            <span className={style['hw-title']}>Helping with</span>
            {org.helpingWith.map((hw) => (
              <span key={hw} className={style['hw-items']}>
                {hw}
              </span>
            ))}
          </div>
        )}
        <FormattedString
          href={org.donation}
          className={style['donation-cta']}
          onClick={() => {
            pushDataLayer({
              event: 'gaEvent',
              gaCategory: 'Make a donation CTA',
              gaAction: org.name
            });
          }}
        >
          {/[0-9-+ ]/.test(org.donation) ? (
            <SvgIcons name="phone" width={16} height={16} viewBox="0 0 32 32" className={style['cta-icon']} />
          ) : (
            <SvgIcons name="web" width={16} height={18} viewBox="0 0 32 36" className={style['cta-icon']} />
          )}{' '}
          Make a donation
        </FormattedString>
      </div>

      <p
        className={style.description}
        dangerouslySetInnerHTML={{
          __html:
            isDetailedView || org.description.length <= 150
              ? org.description
              : `${org.description.substring(0, 150)}...`
        }}
      />

      {Boolean(org.contacts && org.contacts.length) && (
        <div ref={contactRef} className={style.contacts} style={{ '--height': `0px` }}>
          <h5 className="heading">Other ways to contact</h5>
          <ul>
            {org.contacts.map((contact) => (
              <li key={contact}>
                <FormattedString href={contact}>{contact}</FormattedString>
              </li>
            ))}
          </ul>
        </div>
      )}

      {Boolean(org.social && org.social.length) &&
        org.social.map(({ website, twitter, facebook }) => {
          return (
            <div key={website || twitter || facebook} className={style.social}>
              {Boolean(website) && (
                <FormattedString
                  href={website}
                  className={style.website}
                  onClick={() => {
                    pushDataLayer({
                      event: 'gaEvent',
                      gaCategory: 'Org social CTA',
                      gaAction: 'website',
                      gaLabel: org.name
                    });
                  }}
                >
                  Visit website
                </FormattedString>
              )}
              {Boolean(facebook) && (
                <FormattedString
                  href={facebook}
                  onClick={() => {
                    pushDataLayer({
                      event: 'gaEvent',
                      gaCategory: 'Org social CTA',
                      gaAction: 'facebook',
                      gaLabel: org.name
                    });
                  }}
                >
                  <SvgIcons name="facebook" width={20} height={20} viewBox="0 0 32 32" className={style.facebook} />
                </FormattedString>
              )}
              {Boolean(twitter) && (
                <FormattedString
                  href={twitter}
                  onClick={() => {
                    pushDataLayer({
                      event: 'gaEvent',
                      gaCategory: 'Org social CTA',
                      gaAction: 'twitter',
                      gaLabel: org.name
                    });
                  }}
                >
                  <SvgIcons name="twitter" width={20} height={20} viewBox="0 0 32 32" className={style.twitter} />
                </FormattedString>
              )}
              <button
                className={style['more-details']}
                type="button"
                onClick={() => {
                  setDetailedView((currValue) => {
                    const hasContacts = Boolean(org.contacts && org.contacts.length);
                    if (currValue) {
                      hasContacts && contactRef.current.style.setProperty('--contacts-height', `0px`);
                    } else {
                      pushDataLayer({
                        event: 'gaEvent',
                        gaCategory: 'Org more details CTA',
                        gaAction: org.name
                      });

                      hasContacts &&
                        contactRef.current.style.setProperty(
                          '--contacts-height',
                          `${contactRef.current.scrollHeight}px`
                        );

                      // wait for animation to finish before scrolling
                      setTimeout(() => {
                        scrollToTopOfCard();
                      }, 500);
                    }

                    return !currValue;
                  });
                }}
              >
                {isDetailedView ? (
                  <>
                    <SvgIcons
                      name="chevronUp"
                      width={18}
                      height={16}
                      viewBox="0 0 36 32"
                      className={style['more-details-icon']}
                    />
                    Less details
                  </>
                ) : (
                  <>
                    <SvgIcons
                      name="chevronDown"
                      width={18}
                      height={16}
                      viewBox="0 0 36 32"
                      className={style['more-details-icon']}
                    />
                    More details
                  </>
                )}
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default memo(Organisation);
