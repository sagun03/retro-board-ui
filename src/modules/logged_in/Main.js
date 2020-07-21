import React, { memo, useState, useEffect, useCallback }  from 'react';
  import CircularProgress from '@material-ui/core/CircularProgress';
  import { withStyles } from "@material-ui/core";
  import NavBar from "../logged_out/navigation/NavBar";
  import Routing from "../logged_out/Routing.js";

const styles = (theme) => ({
    wrapper: {
      backgroundColor: theme.palette.common.white,
      overflowX: "hidden",
    },
  });
  const Main = (props) => {
    const { classes } = props;
    const [selectedTab, setSelectedTab] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    
    const selectWelcome = useCallback(() => {
      document.title =
        "Retro-welcome"
      setSelectedTab("Welcome");
    }, [setSelectedTab]);

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
          style
        />
        <Routing
          selectWelcome={selectWelcome}
          // selectBoard={selectBoard}
        />
        {/* <Footer /> */}
      </div>
    );
  };
  
  export default withStyles(styles, { withTheme: true })(memo(Main));
  