import { pushDataLayer } from '../util';

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
