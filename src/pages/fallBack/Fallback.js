import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import headerImage from "../home/images/Retro.png";

const Fallback = ({openModal, handleModal}) => {
  return (
    <>
      <Box>
        <img
          src={headerImage}
          alt="random"
          style={{ maxHeight: "50em", maxWidth: "50em" }}
        />
      </Box>
      <Box display="flex" flexDirection="column" style={{ margin: "auto" }}>
        <Typography
          component="p"
          variant="h6"
          color="textSecondary"
          gutterBottom
        >
          Click on the below button to create your first board.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          startIcon={<AddCircleOutlineIcon />}
          onClick={() => handleModal(true)}
        >
          Create first board
        </Button>
      </Box>
    </>
  );
};

export default Fallback;
