import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import AuthLayout from '../layouts/authLayout/index';
const token = localStorage.getItem('token')
const AuthRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      // (token && (token !== "undefiend" && token !== "undefined"))
      // ? <Redirect to="/board" />
      //   : (
          <AuthLayout>
            <Component {...matchProps} {...rest} />
          </AuthLayout>
        // )

    )}
  />
);
AuthRoutes.propTypes = {
  component: PropTypes.func.isRequired,
};
export default AuthRoutes;
