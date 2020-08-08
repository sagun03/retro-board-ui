import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth, Button } from "@material-ui/core";
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import calculateSpacing from "./calculateSpacing";
import BoardCard from "./BoardCard";

function BoardSection(props) {
  const { width, getBoardData, handleModal } = props;
  return (
    <div style={{ backgroundColor: "#FFFFFF", paddingBottom: '5rem'}}>
      <div className="container-fluid lg-p-top">
      <Button
    style={{ position: "absolute", right: "6.5em" }}
    color="secondary"
    variant="contained"
    size="large"
    onClick={() => handleModal(true)}
  >
    Create Board
  </Button>
        <Typography variant="h3" align="left" style={{ marginBottom: "66px" }}>
          Boards
        </Typography>
        <div className="container-fluid" >
          <Grid container spacing={calculateSpacing(width)}>
            {getBoardData.map(element => (
              <Grid
                item
                xs={4}
                md={3}
                key={element.name}
              >
                <BoardCard
                  Icon={<DeveloperBoardIcon style={{ fontSize: 30 }} />}
                  color={"#"+((1<<24)*Math.random()|0).toString(16)}
                  name={element.name}
                  status={element.status}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

BoardSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(BoardSection);
