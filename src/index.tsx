import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import DevTools from 'app/config/devtools';
// import ErrorBoundary from 'app/shared/error/error-boundary';
import { Provider } from 'react-redux';
import initStore from 'src/app/config/store';
import ErrorBoundary from './app/shared/error/error-boundary';
import DevTools from './app/config/devtools';
import { bindActionCreators } from 'redux';
import { clearAuthentication } from './app/shared/reducers/authentication';
import setupAxiosInterceptors from './app/config/axios-interceptor';
import { registerLocale } from './app/config/translation';

const devTools = process.env.NODE_ENV === 'development' ? <DevTools /> : null;

const rootEl = document.getElementById('root');
export const store = initStore(); 
registerLocale(store);

const actions = bindActionCreators({ clearAuthentication }, store.dispatch);
setupAxiosInterceptors(() => actions.clearAuthentication('login.error.unauthorized'));

const render = Component =>
  // eslint-disable-next-line react/no-render-return-value
  ReactDOM.render(
    <ErrorBoundary>
      <Provider store={store}>
        {/* If this slows down the app in dev disable it and enable when required  */}
        {devTools}
        <Component />
      </Provider>
    </ErrorBoundary>,
    rootEl
  );

render(App);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
