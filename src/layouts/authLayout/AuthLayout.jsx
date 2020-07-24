import React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline } from '@material-ui/core';
import Footer from '../components/footer';
import NavBar from '../components/navBar';

const AuthLayout = ({ children }) => (
  <>
    <CssBaseline />
    <NavBar />
    <div>{children}</div>
    <Footer />
  </>
);
AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};


export default AuthLayout;
