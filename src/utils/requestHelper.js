import axios from 'axios';
import assign from 'lodash/assign';
import { loadFromLocalStorage } from './/localStorageHelpers';
import { getBaseUrl } from './constants';

axios.defaults.baseURL = getBaseUrl();

const injectAuthHeaders = (request) => {
  const token = loadFromLocalStorage('token');
  assign(request.headers, { token });
  return request;
};

axios.interceptors.request.use(injectAuthHeaders);
axios.interceptors.request.use((config) => {
  if (config.data instanceof FormData) {
    assign(config.headers, {
      'Content-Type': 'multipart/form-data',
    });
  }
  return config;
});

export default axios;
