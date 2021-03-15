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
import thunk from 'redux-thunk';

const defaultMiddlewares = [
  thunkMiddleware,
  errorMiddleware,
  notificationMiddleware,
  promiseMiddleware,
  actionMiddleware(),
  // loadingBarMiddleware(),
  loggerMiddleware,
  thunk
];
const composedMiddlewares = middlewares =>
  process.env.NODE_ENV === 'development'
    ? compose(
      applyMiddleware(thunkMiddleware,
        errorMiddleware,
        notificationMiddleware,
        promiseMiddleware,
        actionMiddleware(),
        // loadingBarMiddleware(),
        loggerMiddleware,
        thunk),
      DevTools.instrument()
    )
    : compose(applyMiddleware(thunkMiddleware,
      errorMiddleware,
      notificationMiddleware,
      promiseMiddleware,
      actionMiddleware(),
      // loadingBarMiddleware(),
      loggerMiddleware,
      thunk));

const initialize = (initialState?: IRootState, middlewares = []) =>
  createStore(reducer, initialState, composedMiddlewares(middlewares));

export default initialize;
