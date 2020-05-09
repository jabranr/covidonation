export const pushDataLayer = (data = {}) => {
  if (typeof window === 'undefined') {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
};

export const isInViewport = (elem, stickyHeaderOffset = 100) => {
  const bounding = elem.getBoundingClientRect();
  const doc = window.document;

  return (
    bounding.top >= 0 + stickyHeaderOffset &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || doc.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || doc.documentElement.clientWidth)
  );
};

export const scrollToPoint = (top, offset = 100) => {
  if ('scrollBehavior' in document.documentElement.style) {
    window.scrollTo({
      top: top - offset,
      behavior: 'smooth'
    });
  } else {
    window.scrollTo(0, top - offset);
  }
};
