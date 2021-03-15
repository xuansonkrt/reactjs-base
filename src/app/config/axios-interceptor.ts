import axios from 'axios';
import { Storage } from 'react-jhipster';

import { SERVER_API_URL, AUTH_TOKEN_KEY, DEFAULT_TIMEZONE, AUTH_REFRESH_TOKEN_KEY, USER_FORMAT_DATE_KEY, APP_DATE_FORMAT_ES } from './constants';
import { store } from '../../index';
import { serverError } from "../shared/reducers/application-profile";
// import { parseErrorRespose } from 'app/shared/util/string-utils';
import { isNullOrUndefined } from 'util';

const TIMEOUT = 1 * 60 * 1000;
axios.defaults.timeout = TIMEOUT;
axios.defaults.baseURL = SERVER_API_URL;

const setupAxiosInterceptors = onUnauthenticated => {
  const onRequestSuccess = config => {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzUxMiJ9.ZXlKNmFYQWlPaUpFUlVZaUxDSmhiR2NpT2lKa2FYSWlMQ0psYm1NaU9pSkJNVEk0UTBKRExVaFRNalUySW4wLi55dU9yYjZyNUN6VE9aVk9MTTFGTUNnLmNycEREOUVQbVBnMVZkYWM0am0tSnd4WXZrZkF1akpaOHNWME0wUG9NenU2OElyYVhFaVdacDltUnllaVRDT1hqNnVnbmdCSkRrbHlHSTg5ODZnMS0xMXp4M3RGLWRleUJ6VENVbXlRSkZJdXlSN3VkcEUySnprSkpfbWVQR3lGQ2FocmNYUV91UWxmc2lQNl9kTzJTcUhwbTFya1k0ejdOcUNMa1ZfV0dGYnlNZ0pXa0Jndm4tbnVCalFCcUFNM05yRnVlR0VCRFZWR1NMU2w2eFlHbXIwTEcyMUtHdWRwT2ZodHE5Z1ZFUUVxWWhFOXU0bl9jVUxOU1ZSNllPX0NhTE00ZVRpaUhXUmMwMTdhZmh5MXZpaTFEOTV6MkhaeHhWeEdqTEVIMVRRWU12a1JWZVVOYWMyM2RkQ0J4Y2F3MTFqemNUT0dyajJOZmpTdWwwaTZnUHptelJhWWZENV9aRkhRMWFmd0RxTlA5U3VzbURjOFJySVVXcjlpc0ZBUHhRRE11RHdqeTJwaWRRVkFkeGZOUE9YXzMyOEliX0lkOC1ZSkk1Qlo5ajgtYWZmZVJ0dE9lV3lKVXpwLXRPeXN0dnZVd3RKZnFDemdmZXNsOEhZN2k3OXQ3dl9vdEVJZEZlVnRQb0RXemxQSVR4c3REMDNkcVFxQllkbDB0YlJ1N0RGRWtaOG1aMGEtVE5QNkd3SkhDNUt4WEFfTUtOcmZXR2tIM005Y3gxLVVzdFlZQzUySU1XazdTdzJhUWY4ZXBOa3NfdW9mTjJNOXpYVXJNZnk2OTR3Z0RCQVBUbHR1Y0lvdWpqSExKdkUubjlJUnBEX1lqdVVDTDF4bUZXQkJzdw==.HJ4hkqUkn1MY8OEEKBOOQAzxihXxPv51ywvyda9mqVwchzrHs9LVoj22l1c_FUaMmZM8zlPcM7IjTjjH-3j0iQ`;
    return config;
  };
  const onResponseSuccess = response => response;
  const onResponseError = err => {
    // xu ly neu co loi o day
    const status = err.status || (err.response ? err.response.status : 0);

    if (status !== 403 && status !== 401 && !err.config.url.endsWith('/count-unread-notification') && err.config.url.indexOf("://") < 0) {
      if (status === 0) {
        store.dispatch(serverError('WAR_COM_0012'));
        return;
      }

      // const errorList = parseErrorRespose(err);
      // if (isNullOrUndefined(errorList) || errorList.length === 0 || 
      //   ((isNullOrUndefined(errorList[0].errorCode) || errorList[0].errorCode === "ERR_TMS_999") && isNullOrUndefined(errorList[0].arrayError))) {
      //   store.dispatch(serverError('ERR_COM_0093'));
      //   return;
      // }
    }

    if (status === 403 || status === 401) {
      if (status === 401 && err.config.url.endsWith('/count-unread-notification')) {
        Storage.local.remove(AUTH_TOKEN_KEY);
        Storage.local.remove(AUTH_REFRESH_TOKEN_KEY);
        Storage.session.remove(AUTH_TOKEN_KEY);
        Storage.session.remove(AUTH_REFRESH_TOKEN_KEY);
      }
      onUnauthenticated();
    } else if (status === 500) {
      err.message = 'error.http.500';
    }
    return Promise.reject(err);
  };
  axios.interceptors.request.use(onRequestSuccess);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default setupAxiosInterceptors;
