import React, { useState } from "react";
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
import { useQuery } from '@apollo/client';
import { GET_BOARD_COLUMN_NOTE } from './graphQl/Queries';
import { withRouter } from 'react-router-dom';
import CreateNoteModal from './CreateNoteModal';

const Notes = props => {
  const { match: { params: { id} = {} } = {} } = props;
  // NOTE: openAddNoteModal is the columnId of the column on will add button is clicked.
  const [openAddNoteModal, handleAddNoteModal] = useState(null);
  const { loading, error, data } = useQuery(GET_BOARD_COLUMN_NOTE, { variables: { id }});
  if (loading) return <div>Loading........</div>
  if (error) return <div>Something went wrong.........</div>
  const { getNotesByBoardId: { name, columns = []} ={} } = data || {};
  return (
    <>
    {openAddNoteModal && <CreateNoteModal handleAddNoteModal={handleAddNoteModal} columnId={openAddNoteModal} />}
      <Box display="flex" flexDirection="row" justifyContent="center">
        <Typography component="p" variant="h4" color="textPrimary">
          {name}
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
                    <IconButton size="medium" onClick={() => handleAddNoteModal(id)}>
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

export default withRouter(Notes);