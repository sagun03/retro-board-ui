import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  withStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import BookIcon from "@material-ui/icons/Book";
import NavigationDrawer from "../../shared/components/NavigationDrawer";

const styles = theme => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 500
  },
  noDecoration: {
    textDecoration: "none !important"
  }
});

const NavBar = (props) => {
  const {
    classes,
    openRegisterDialog,
    openLoginDialog,
    handleDrawerOpen,
    handleDrawerClose,
    isDrawerOpen,
    selectedTab
  } = props;
  const menuItems = [
    {
      link: "/home",
      name: "Home",
      icon: <HomeIcon className="text-white" />
    },
    {
      link: "/board",
      name: "Board",
      icon: <BookIcon className="text-white" />
    },
    {
      name: "Register",
      onClick: openRegisterDialog,
      icon: <HowToRegIcon className="text-white" />
    },
    {
      name: "Login",
      onClick: openLoginDialog,
      icon: <LockOpenIcon className="text-white" />
    }
  ];
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
            <IconButton
                className={classes.menuButton}
                onClick={handleDrawerOpen}
                aria-label="menu"
                color="inherit"
                edge="start"
              >
                <MenuIcon color="primary" />
              </IconButton>
          <div>
            <Typography
              variant="h4"
              className={classes.brandText}
              display="inline"
              color="primary"
            >
              Re
            </Typography>
            <Typography
              variant="h4"
              className={classes.brandText}
              display="inline"
              color="secondary"
            >
              Tro
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="left"
        open={isDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleDrawerOpen: PropTypes.func,
  handleDrawerClose: PropTypes.func,
  isDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
