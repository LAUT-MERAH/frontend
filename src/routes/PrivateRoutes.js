import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import HomepageUser from '../pages/Private/HomepageUser';
import Dashboard from '../pages/Private/Dashboard';
import ModulePage from '../pages/Private/ModulePage';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const PrivateRoutes = () => (
  <>
    <PrivateRoute path="/user-home" component={HomepageUser} />
    <PrivateRoute path="/dashboard" component={Dashboard} />
    <PrivateRoute path="/modules" component={ModulePage} />
  </>
);

export default PrivateRoutes;
