import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  footer: {
    height: '100px',
    paddingTop: '35px',
    textAlign: 'center',
  },
  size: {
    fontSize: '17px',
  },
});
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      classes,
    } = this.props;
    return (
      <div className={classes.footer}>
        <Typography className={classes.size} variant="title">© Handle by Chirag adn Sagun</Typography>
      </div>
    );
  }
}
Footer.propTypes = {
  classes: PropTypes.shape().isRequired,
};
export default withStyles(styles)(Footer);
