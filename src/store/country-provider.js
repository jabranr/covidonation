import React, { useEffect, useReducer, createContext } from 'react';
import { withRouter } from 'react-router-dom';

import config from '../config';
import genericReducer from './generic-reducer';

const DEFAULT_COUNTRY = {};
const { STORE_KEY } = config();
const CountryContext = createContext([{}, () => {}]);
const COUNTRY_STORE_KEY = `${STORE_KEY}_country`;

export function clear() {
  window.sessionStorage.removeItem(COUNTRY_STORE_KEY);
}

const CountryProvider = ({ children }) => {
  const prevState = window.sessionStorage.getItem(COUNTRY_STORE_KEY) || JSON.stringify(DEFAULT_COUNTRY);
  const [state, dispatch] = useReducer(genericReducer, JSON.parse(prevState));

  useEffect(() => {
    window.sessionStorage.setItem(COUNTRY_STORE_KEY, JSON.stringify(state));
  }, [state]);

  return <CountryContext.Provider value={[state, dispatch]}>{children}</CountryContext.Provider>;
};

export default withRouter(CountryProvider);
export { DEFAULT_COUNTRY, CountryContext };
