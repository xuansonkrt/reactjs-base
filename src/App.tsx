import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, RouteComponentProps } from 'react-router-dom';
import AppRoutes from 'src/routes';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import ErrorBoundary from './app/shared/error/error-boundary';
import { IRootState } from './app/shared/reducers';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Header from 'src/app/shared/layout/menu/header';
import  ToastMsg  from './app/shared/components/toast/toast-msg';


export interface IAppProps extends StateProps, DispatchProps, RouteComponentProps { }

export const App = (props: IAppProps) => {
  return (
    <Router>
      <>
        <Header></Header>
        <ErrorBoundary>
          <AppRoutes />
        </ErrorBoundary>
        <ToastMsg />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* <ExecutingPanel /> */}
      </>
    </Router>
  );
};


const mapStateToProps = () => ({

});


const mapDispatchToProps = { };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(hot(module)(App));
