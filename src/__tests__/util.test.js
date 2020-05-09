import { pushDataLayer, scrollToPoint, isInViewport } from '../util';

describe('pushDataLayer', () => {
  it('should create empty global key when none exists', () => {
    pushDataLayer();
    expect(global.dataLayer).toBeTruthy();
    expect(global.dataLayer).toHaveLength(1);
  });

  it('should push given data to dataLayer', () => {
    pushDataLayer({ foo: 'bar' });

    expect(global.dataLayer).toHaveLength(2);
    expect(global.dataLayer[1]).toHaveProperty('foo', 'bar');
  });
});

describe('scrollToPoint', () => {
  it('should call scrollTo on window', () => {
    global.scrollTo = jest.fn();
    const spy = jest.spyOn(global, 'scrollTo');

    scrollToPoint(0);
    expect(spy).toHaveBeenCalled();
  });
});

describe('isInViewport', () => {
  it('should call scrollTo on window', () => {
    const elm = document.createElement('div');
    const spy = jest.spyOn(elm, 'getBoundingClientRect');

    isInViewport(elm);
    expect(spy).toHaveBeenCalled();
  });
});
