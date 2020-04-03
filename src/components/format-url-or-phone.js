import React, { memo } from 'react';

const FormatUrlOrPhone = ({ href, children, ...attr }) => {
  attr.target = attr.target || '_blank';

  if (attr.target === '_blank') {
    attr.target = '_blank';
    attr.rel = 'noopener noreferrer';
  }

  if (/^http/i.test(href)) {
    return (
      <a target="_blank" rel="noopener noreferrer" href={`${href}?utm_source=covidonation`} {...attr}>
        {children}
      </a>
    );
  }

  if (/^www/i.test(href)) {
    return (
      <a target="_blank" rel="noopener noreferrer" href={`//${href}?utm_source=covidonation`} {...attr}>
        {children}
      </a>
    );
  }

  if (/[0-9-+ ]/.test(href)) {
    return (
      <a href={`tel:${href}`} className={attr.className}>
        {children}
      </a>
    );
  }

  return <a href={href}>{children}</a>;
};

export default memo(FormatUrlOrPhone);
