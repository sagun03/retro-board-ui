import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Typography,
  isWidthUp,
  Box,
  withWidth,
  Button
} from "@material-ui/core";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import calculateSpacing from "./calculateSpacing";
import BoardCard from "./BoardCard";

function BoardSection(props) {
  const { width, getBoardData, handleModal, history } = props;
  return (
    <Box style={{ backgroundColor: "#FFFFFF", paddingBottom: "5rem", minHeight: "30rem" }}>
      <Box style={{padding: '1rem'}}>
        <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" align="left" style={{ margin: "2.1rem 4rem 3.2rem" }}>
          Boards
        </Typography>
        <Box  display="flex" >
        <Button
          style={{ height: "2rem" }}
          color="secondary"
          variant="contained"
          onClick={() => localStorage.setItem('token', undefined)}
        >
          Logout temprary
        </Button>
        </Box>
        </Box>
        <Box className="container-fluid">
          <Grid container spacing={calculateSpacing(width)}>
            {getBoardData.map(({ name, status, id }) => (
              <Grid item xs={4} md={3} key={name}>
                <BoardCard
                  color={"#" + (((1 << 24) * Math.random()) | 0).toString(16)}
                  name={name}
                  status={status}
                  history={history}
                  id={id}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

BoardSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(BoardSection);
