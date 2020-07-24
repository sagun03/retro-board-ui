import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import AuthLayout from '../layouts/authLayout/index';

const AuthRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      localStorage.Token
        ? <Redirect to="/board-page" />
        : (
          <AuthLayout>
            <Component {...matchProps} {...rest} />
          </AuthLayout>
        )

    )}
  />
);
AuthRoutes.propTypes = {
  component: PropTypes.func.isRequired,
};
export default AuthRoutes;
