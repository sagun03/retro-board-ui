import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import PrivateLayout from '../layouts/privateLayout/PrivateLayout';

const PrivateRoutes = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token')
  return (
  <Route
    {...rest}
    render={matchProps => (
      (token && (token !== "undefiend" && token !== "undefined")) ? (
          <PrivateLayout>
            <Component {...matchProps} {...rest} />
          </PrivateLayout>
        ) : <Redirect to="/login" />
    )}
  />
)};
PrivateRoutes.propTypes = {
  component: PropTypes.func.isRequired,
};


export default PrivateRoutes;
