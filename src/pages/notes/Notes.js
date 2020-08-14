import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import GridList from "@material-ui/core/GridList";
import Box from "@material-ui/core/Box";
import GridListTile from "@material-ui/core/GridListTile";
import {
  withStyles,
  withWidth,
  isWidthUp
} from "@material-ui/core";
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
import SliderComponent from './SliderComponent';

const styles = theme => ({
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
  },
});
const Notes = props => {
  const { match: { params: { id} = {} } = {}, width, classes } = props;
  const [slideConfig, setSlideCssConfig] = useState({gridColsValue: 2, columnNameVariant: "h4", columnNameButtonSize: "medium", noteMainBoxWidth: '45rem', noteNameMarginLeft: '16rem', cardMainBoxWidth: '44rem' })
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
      <Box display="flex" flexDirection="row" justifyContent="center" flexGrow="1" style={{ marginLeft: '15rem'}}>
        <Typography component="p" variant="h4" color="textPrimary" style={{paddingTop: '.7rem'}}>
          {name}
        </Typography>
        <IconButton size="medium">
          <EditIcon fontSize="inherit" />
        </IconButton>
      </Box>
      <Box display="flex" align-items="flex-end">
      <SliderComponent
          style={{ position: "absolute", right: "6.5em" }}
          color="secondary"
          variant="contained"
          size="large"
          slideConfig={slideConfig}
          setSlideCssConfig={setSlideCssConfig}
        />
        </Box>
        </Box>
      <GridList
        className={classes.gridList}
        cols={slideConfig.gridColsValue}
        cellHeight="auto"
        style={{ minHeight: 600 }}
        spacing={8}
      >
        {columns.map(({ id, name, notes }) => (
          <GridListTile key={id}>
            <Paper elevation={4} style={{ padding: "1em" }}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Box display="flex" flexDirection="row" p={1} style={{ backgroundColor: "#D3D3D3", width: slideConfig.noteMainBoxWidth, borderRadius: '15px' }} >
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-start"
                    style={{ alignItems: 'center', marginLeft: slideConfig.noteNameMarginLeft}}
                  >
                    <Typography component="p" variant={slideConfig.columnNameVariant} color="textPrimary">
                      {name}
                    </Typography>
                    <IconButton size={slideConfig.columnNameButtonSize}>
                      <EditIcon fontSize="inherit" />
                    </IconButton>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-end"
                  >
                    <IconButton size={slideConfig.columnNameButtonSize}>
                      <SortIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton size={slideConfig.columnNameButtonSize} onClick={() => handleAddNoteModal(id)}>
                      <AddCircleOutlineIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton size={slideConfig.columnNameButtonSize}>
                      <MoreVertIcon fontSize="inherit" />
                    </IconButton>
                  </Box>
                </Box>
                <Divider variant="middle" />
                <Box style={{ width: slideConfig.cardMainBoxWidth, paddingTop: '.5rem' }}>
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

const NotesHead = withRouter(Notes);
export default withWidth()(
  withStyles(styles, { withTheme: true })(NotesHead)
);
