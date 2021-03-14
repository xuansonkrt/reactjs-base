import React from 'react'
import { Switch } from 'react-router-dom';
import { useLocation } from 'react-router';

import { connect } from 'react-redux';
import { MenuPrivateRoute } from '../auth/menu-private-route';
import _ from 'lodash';
import SidebarMenuLeft from './menu/sidebar-menu-left';
import PageNotFound from '../error/page-not-found';
import ExceptionPage from '../error/exception-page';
import Test from 'src/app/modules/test'
import ErrorBoundaryRoute from '../error/error-boundary-route';
import { IRootState } from '../reducers';

const LoginedComponent = ({ isAuthenticated }) => {
  const location = useLocation();

  const isShowMenu = () => {
    const pathname = _.get(location, 'pathname') || '';
    if (pathname === '/' ||
      pathname.startsWith('/test/')) {
      return true;
    }
    return false;
  }

  const renderComponent = () => {
    return (
      <>
        {isAuthenticated && isShowMenu() && <SidebarMenuLeft componentDisplay="" />}
        <Switch>
          {/* <MenuPrivateRoute path="/" exact component={Home} hasAnyAuthorities={[AUTHORITIES.USER, AUTHORITIES.ADMIN]} /> */}
          <ErrorBoundaryRoute path="/employee" component={Test} />
     
          <ErrorBoundaryRoute component={PageNotFound} />
          <ErrorBoundaryRoute component={ExceptionPage} />
        </Switch>
      </>
    )
  };

  return (
    <>
      {renderComponent()}
    </>  
  )
}

const mapStateToProps = (
  { authentication: { isAuthenticated } }: IRootState) => ({
  isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export const Logined = connect(
  mapStateToProps
)(LoginedComponent);

export default Logined;

