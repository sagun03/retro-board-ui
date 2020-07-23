import React, { useState, memo } from "react";
import { Box, Typography, Button } from "@material-ui/core";
import Fallback from '../fallBack';
import CreateBoardModal from './components/createBoardModal';

const Boards = props => {
  const [openModal, handleModal] = useState(false);
  return (
    <Box display="flex" style={{ backgroundColor: "#f4f6ff" }}>
      <Box
        display="flex"
        justifyContent="flex-start"
        flexDirection="column"
        style={{ margin: "4em" }}
      >
        <Typography
          component="p"
          variant="h6"
          color="textSecondary"
          gutterBottom
        >
          WELCOME TO
        </Typography>
        <Typography component="p" variant="h4" color="textPrimary" gutterBottom>
          COOL RETRO
        </Typography>
        <Button
          style={{ position: "absolute", right: "5em" }}
          color="secondary"
          variant="contained"
          size="large"
          onClick={() => handleModal(true)}
        >
          Create Board
        </Button>
        <Typography
          component="i"
          variant="body1"
          color="textSecondary"
          gutterBottom
        >
          Prepare a board for your sprint to make retro fun, and track your work
          and briefing the key details for example what went good, actions to
          improve, suggestion, What went bad.
        </Typography>
        <Box
          style={{ backgroundColor: "white" }}
          display="flex"
          flexDirection="row"
          alignItems="stretch"
        >
          <Fallback openModal={openModal} handleModal={handleModal} />
        </Box>
        {openModal && <CreateBoardModal handleModal={handleModal} />}
      </Box>
    </Box>
  );
};
export default memo(Boards);
