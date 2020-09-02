import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import PrivateLayout from '../layouts/privateLayout/PrivateLayout';

const token = localStorage.getItem('token')
console.log('token', token)
const PrivateRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      // (token && (token !== "undefiend" && token !== "undefined")) ? (
          <PrivateLayout>
            <Component {...matchProps} {...rest} />
          </PrivateLayout>
        // ) : <Redirect to="/home" />
    )}
  />
);
PrivateRoutes.propTypes = {
  component: PropTypes.func.isRequired,
};


export default PrivateRoutes;
