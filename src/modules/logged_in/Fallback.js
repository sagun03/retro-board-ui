import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const Fallback = props => {
  return (
    <>
      <Box>
        <img
          src="https://source.unsplash.com/random"
          alt="random image"
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
        >
          Create first board
        </Button>
      </Box>
    </>
  );
};

export default Fallback;
