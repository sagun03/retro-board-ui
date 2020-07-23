import React, { memo, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Hidden,
  withStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import BookIcon from "@material-ui/icons/Book";
import NavigationDrawer from "../navigationDrawer";

const styles = theme => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white
  },
  appBar1: {
    boxShadow: theme.shadows[6],
    backgroundColor: '#3864cc',
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuButtonText1 : {
    color: 'white',
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 500
  },
  brandText1: {
    fontFamily: "'Blippo', fantasy",
    fontWeight: 'bold'
  },
  noDecoration: {
    textDecoration: "none !important"
  }

});

const NavBar = (props) => {
  const {
    classes,
    style,
  } = props;
  const [selectedTab, setSelectedTab] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const selectHome = useCallback(() => {
    document.title =
      "Retro-home"
    setSelectedTab("Home");
  }, [setSelectedTab]);

  const selectBoard = useCallback(() => {
    document.title = "Retro-board";
    setSelectedTab("Board");
  }, [setSelectedTab]);
  const menuItems = [
    {
      link: "/home-page",
      name: "Home",
      icon: <HomeIcon className="text-white" />,
      onClick: selectHome(),
    },
    {
      link: "/board-page",
      name: "Board",
      icon: <BookIcon className="text-white" />,
      onClick: selectBoard(),
    },
    {
      name: "Register",
      onClick: () => {},
      icon: <HowToRegIcon className="text-white" />
    },
    {
      name: "Login",
      onClick: () => {},
      icon: <LockOpenIcon className="text-white" />
    }
  ];

  const handleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(true);
  }, [setIsDrawerOpen]);

  const handleDrawerClose = useCallback(() => {
    setIsDrawerOpen(false);
  }, [setIsDrawerOpen]);
  return (
    <div className={classes.root}>
      <AppBar position="static" className={style ? classes.appBar1 : classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <Typography
              variant="h4"
              className={style ? classes.brandText1 : classes.brandText}
              display="inline"
              color={style ? 'white' : 'primary'}
              classes={style ? { root: classes.menuButtonText1 } : ''}
            >
              Re
            </Typography>
            <Typography
              variant="h4"
              className={style ? classes.brandText1 : classes.brandText}
              display="inline"
              color={style ? 'white' : 'secondary'}
              classes={style ? { root: classes.menuButtonText1 } : ''}
            >
              Tro
            </Typography>
          </div>
          <div>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleDrawerOpen}
                aria-label="Open Navigation"
              >
                <MenuIcon color="primary" />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              {menuItems.map(element => {
                if (element.link) {
                  return (
                    <Link
                      key={element.name}
                      to={element.link}
                      className={classes.noDecoration}
                      onClick={handleDrawerClose}
                    >
                      <Button
                        size="large"
                        classes={style ? { root: classes.menuButtonText1 } : { text: classes.menuButtonText }}
                        >
                        {element.name}
                      </Button>
                    </Link>
                  );
                }
                return (
                  <Button
                  size="large"
                    onClick={element.onClick}
                    classes={style ? { root: classes.menuButtonText1 } : { text: classes.menuButtonText }}
                    key={element.name}
                  >
                    {element.name}
                  </Button>
                );
              })}
            </Hidden>
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
