import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, RouteComponentProps } from 'react-router-dom';
import AppRoutes from 'src/routes';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import ErrorBoundary from './app/shared/error/error-boundary';
import { IRootState } from './app/shared/reducers';



export interface IAppProps extends StateProps, DispatchProps, RouteComponentProps { }

export const App = (props: IAppProps) => {
  return (
    <Router>
      <>
        
        <ErrorBoundary>
          <AppRoutes />
        </ErrorBoundary>
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
