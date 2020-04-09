import axios from 'axios';

import config from './';

const { COVID19_API_HOSTNAME } = config();

const client = axios.create({
  baseURL: COVID19_API_HOSTNAME
});

export default client;
