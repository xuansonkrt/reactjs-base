import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import DevTools from './devtools';
import errorMiddleware from './error-middleware';
import notificationMiddleware from './notification-middleware';
import loggerMiddleware from './logger-middleware';
import { loadingBarMiddleware, showLoading, hideLoading } from 'react-redux-loading-bar';
import actionMiddleware from './action-middleware';
import reducer, { IRootState } from '../shared/reducers';

const defaultMiddlewares = [
  thunkMiddleware,
  errorMiddleware,
  notificationMiddleware,
  promiseMiddleware,
  actionMiddleware(),
  // loadingBarMiddleware(),
  loggerMiddleware
];
const composedMiddlewares = middlewares =>
  process.env.NODE_ENV === 'development'
    ? compose(
        applyMiddleware({...defaultMiddlewares, ...middlewares}),
        DevTools.instrument()
      )
    : compose(applyMiddleware({...defaultMiddlewares, ...middlewares}));

const initialize = (initialState?: IRootState, middlewares = []) =>
  createStore(reducer, initialState, composedMiddlewares(middlewares));

export default initialize;
