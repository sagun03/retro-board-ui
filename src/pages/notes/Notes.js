import React from "react";
import Paper from "@material-ui/core/Paper";
import GridList from "@material-ui/core/GridList";
import Box from "@material-ui/core/Box";
import GridListTile from "@material-ui/core/GridListTile";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import MyCard from "./Card";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import SortIcon from "@material-ui/icons/Sort";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

export default props => {
  //** columns is mock data for now */
  const columns = [
    {
      id: 1,
      name: "test",
      notes: [
        {
          id: "testId1",
          content:
            "note 1 testsdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        },
        { id: "testId2", content: "note 1 test", user: "chirag" },
        { id: "testId1", content: "note 1 test", user: "chirag" },
        { id: "testId1", content: "note 1 test", user: "chirag" },
        { id: "testId1", content: "note 1 test", user: "chirag" },
        { id: "testId1", content: "note 1 test", user: "test" }
      ]
    },
    {
      id: 2,
      name: "test 2",
      user: "chirag",
      notes: [
        { id: "testId1", content: "note 2 test", user: "chirag" },
        { id: "testId2", content: "note 2 test", user: "test user" }
      ]
    },
    { id: 3, name: "test 3", notes: [] },
    {
      id: 4,
      name: "test4 ",
      user: "chirag",
      notes: [
        { id: "testId1", content: "note 4 test", user: "anonymous" },
        { id: "testId2", content: "note 4 test", user: "anonymous" }
      ]
    }
  ];
  return (
    <>
      <Box display="flex" flexDirection="row" justifyContent="center">
        <Typography component="p" variant="h4" color="textPrimary">
          Board Name
        </Typography>
        <IconButton size="medium">
          <EditIcon fontSize="inherit" />
        </IconButton>
      </Box>
      <GridList
        cols={columns.length}
        cellHeight="auto"
        style={{ minHeight: 400 }}
        spacing={5}
      >
        {columns.map(({ id, name, notes }) => (
          <GridListTile key={id}>
            <Paper elevation={4} style={{ padding: "1em" }}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Box display="flex" flexDirection="row">
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-start"
                  >
                    <Typography component="p" variant="h4" color="textPrimary">
                      {name}
                    </Typography>
                    <IconButton size="medium">
                      <EditIcon fontSize="inherit" />
                    </IconButton>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-end"
                  >
                    <IconButton size="medium">
                      <SortIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton size="medium">
                      <AddCircleOutlineIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton size="medium">
                      <MoreVertIcon fontSize="inherit" />
                    </IconButton>
                  </Box>
                </Box>
                <Divider variant="middle" light />
                <Box>
                  <MyCard notes={notes} />
                </Box>
              </Box>
            </Paper>
          </GridListTile>
        ))}
      </GridList>
    </>
  );
};
