import React from 'react';
import { Switch } from 'react-router-dom';
import MenuPrivateRoute from 'src/app/shared/auth/menu-private-route';
import ErrorBoundaryRoute from 'src/app/shared/error/error-boundary-route';
import PageNotFound from 'src/app/shared/error/page-not-found';

import TestIndex from './test-list/test-index';
const Routes = ({ match }) => (
  <>
    <Switch>
      <MenuPrivateRoute path={`${match.url}/list`} component={TestIndex} />
      <ErrorBoundaryRoute component={PageNotFound} />
    </Switch>
  </>
);

export default Routes;
