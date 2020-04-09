import React, { useEffect, useReducer, createContext } from 'react';
import { withRouter } from 'react-router-dom';

import config from '../config';
import genericReducer from './generic-reducer';

const DEFAULT_SUMMARY = {};
const { STORE_KEY } = config();
const SummaryContext = createContext([{}, () => {}]);
const SUMMARY_STORE_KEY = `${STORE_KEY}_summary`;

export function clear() {
  window.sessionStorage.removeItem(SUMMARY_STORE_KEY);
}

const SummaryProvider = ({ children }) => {
  const prevState = window.sessionStorage.getItem(SUMMARY_STORE_KEY) || JSON.stringify(DEFAULT_SUMMARY);
  const [state, dispatch] = useReducer(genericReducer, JSON.parse(prevState));

  useEffect(() => {
    window.sessionStorage.setItem(SUMMARY_STORE_KEY, JSON.stringify(state));
  }, [state]);

  return <SummaryContext.Provider value={[state, dispatch]}>{children}</SummaryContext.Provider>;
};

export default withRouter(SummaryProvider);
export { DEFAULT_SUMMARY, SummaryContext };
