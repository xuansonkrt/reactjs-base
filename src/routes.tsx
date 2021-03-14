
import React, { Suspense } from 'react'
import { Switch } from 'react-router-dom';
import ErrorBoundaryRoute from './app/shared/error/error-boundary-route';
import Logined from './app/shared/layout/logined';



const Routes = () => (
  <Suspense fallback={<div>Loading</div>}>
    <>
      <Switch>
        {/* <ErrorBoundaryRoute path="/account" component={Account} /> */}
        <ErrorBoundaryRoute path="/" component={Logined} />
        {/* <ErrorBoundaryRoute component={ExceptionPage} /> */}
      </Switch>
    </>
  </Suspense>
);

export default Routes;
