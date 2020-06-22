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
    // smoothScrollTop();
    document.title =
      "WaVer - Free template for building an SaaS or admin application";
    setSelectedTab("Home");
  }, [setSelectedTab]);

  const selectBlog = useCallback(() => {
    // smoothScrollTop();
    document.title = "WaVer - Blog";
    setSelectedTab("Blog");
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

  // const openChangePasswordDialog = useCallback(() => {
  //   setDialogOpen("changePassword");
  // }, [setDialogOpen]);

  // const fetchBlogPosts = useCallback(() => {
  //   const blogPosts = dummyBlogPosts.map((blogPost) => {
  //     let title = blogPost.title;
  //     title = title.toLowerCase();
  //     /* Remove unwanted characters, only accept alphanumeric and space */
  //     title = title.replace(/[^A-Za-z0-9 ]/g, "");
  //     /* Replace multi spaces with a single space */
  //     title = title.replace(/\s{2,}/g, " ");
  //     /* Replace space with a '-' symbol */
  //     title = title.replace(/\s/g, "-");
  //     blogPost.url = `/blog/post/${title}`;
  //     blogPost.params = `?id=${blogPost.id}`;
  //     return blogPost;
  //   });
  //   setBlogPosts(blogPosts);
  // }, [setBlogPosts]);

  // useEffect(fetchBlogPosts, []);

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
        selectBlog={selectBlog}
      />
      {/* <Footer /> */}
    </div>
  );
}

Board.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(Board));
