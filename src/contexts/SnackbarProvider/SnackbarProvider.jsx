import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { withStyles } from '@material-ui/core/styles';
import {SnackbarContext} from '../contexts';
import { styles1, styles2 } from './styles';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

function MySnackbarContent(props) {
  const {
    classes, className, message, variant, onClose, ...other
  } = props;

  const temp = variant;
  const Icon = variantIcon[temp];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={(
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      )}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

MySnackbarContent.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

class CustomizedSnackbars extends React.Component {
  state = {
    open: false,
    message: '',
    status: '',
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    // if (reason === 'clickaway') {
    //   return;
    // }
    this.setState({ open: false });
  };

  handleSnackBarOpen = (message, status) => {

    this.setState(
      {
        open: true,
        message,
        status,
      },
    );
  }

  render() {
    const { classes, children } = this.props;
    const { message, status, open } = this.state;

    return (
      <SnackbarContext.Provider value={{ openSnackbar: this.handleSnackBarOpen }}>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={open}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <MySnackbarContentWrapper
            variant={status}
            message={message}
            onClose={this.handleClose}
          />
        </Snackbar>
        {children}
      </SnackbarContext.Provider>

    );
  }
}

CustomizedSnackbars.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};


export default withStyles(styles2)(CustomizedSnackbars);
