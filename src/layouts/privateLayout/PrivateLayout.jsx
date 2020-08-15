import React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline } from '@material-ui/core';
import Navbar from '../components/navBar';
import Footer from '../components/footer';


const style = {
  padding: '1.875rem 1.875rem 0',
};
const PrivateLayout = ({ children }) => (
  <>
    <CssBaseline />
    <Navbar />
    <div style={style}>{children}</div>
    <Footer />

  </>
);
PrivateLayout.propTypes = {
  children: PropTypes.element.isRequired,
};


export default PrivateLayout;
