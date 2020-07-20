import React, { memo, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
// import AOS from "aos/dist/aos";
import { withStyles } from "@material-ui/core";
import NavBar from "./navigation/NavBar";
// import Footer from "./footer/Footer";
// import "aos/dist/aos.css";
// import CookieRulesDialog from "./cookies/CookieRulesDialog";
// import CookieConsent from "./cookies/CookieConsent";
// import dummyBlogPosts from "../dummy_data/blogPosts";
// import DialogSelector from "./register_login/DialogSelector";
import Routing from "./Routing";
// import smoothScrollTop from "../../shared/functions/smoothScrollTop";

const styles = (theme) => ({
  wrapper: {
    backgroundColor: theme.palette.common.white,
    overflowX: "hidden",
  },
});

const Board = (props) => {
  const { classes } = props;
  const [selectedTab, setSelectedTab] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(null);

  const selectHome = useCallback(() => {
    document.title =
      "Retro-home"
    setSelectedTab("Home");
  }, [setSelectedTab]);

  const selectBoard = useCallback(() => {
    document.title = "Retro-board";
    setSelectedTab("Board");
  }, [setSelectedTab]);

  // const openLoginDialog = useCallback(() => {
  //   setDialogOpen("login");
  //   setIsMobileDrawerOpen(false);
  // }, [setDialogOpen, setIsMobileDrawerOpen]);

  // const closeDialog = useCallback(() => {
  //   setDialogOpen(null);
  // }, [setDialogOpen]);

  // const openRegisterDialog = useCallback(() => {
  //   setDialogOpen("register");
  //   setIsMobileDrawerOpen(false);
  // }, [setDialogOpen, setIsMobileDrawerOpen]);

  // const openTermsDialog = useCallback(() => {
  //   setDialogOpen("termsOfService");
  // }, [setDialogOpen]);

  const handleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(true);
  }, [setIsDrawerOpen]);

  const handleDrawerClose = useCallback(() => {
    setIsDrawerOpen(false);
  }, [setIsDrawerOpen]);

  return (
    <div className={classes.wrapper}>
      {/* <DialogSelector
        openLoginDialog={openLoginDialog}
        dialogOpen={dialogOpen}
        onClose={closeDialog}
        openTermsDialog={openTermsDialog}
        openRegisterDialog={openRegisterDialog}
        openChangePasswordDialog={openChangePasswordDialog}
      /> */}
      <NavBar
        selectedTab={selectedTab}
        selectTab={setSelectedTab}
        // openLoginDialog={openLoginDialog}
        // openRegisterDialog={openRegisterDialog}
        isDrawerOpen={isDrawerOpen}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <Routing
        selectHome={selectHome}
        selectBoard={selectBoard}
      />
      {/* <Footer /> */}
    </div>
  );
}

Board.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(Board));
