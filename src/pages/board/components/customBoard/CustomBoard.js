import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";

const CustomBoard = ({handleModal, handleBoardColumns, columns}) => {
  const addColumn = () => {
    const newColumnsInstance = [...columns];
    newColumnsInstance.push("");
    handleBoardColumns(newColumnsInstance);
  };
  const handleDelete = (index) => () => {
    const newColumnsInstance = [...columns];
    newColumnsInstance.splice(index, 1);
    handleBoardColumns(newColumnsInstance);
  }
  const handleChange = index => ({ target: { value } }) => {
    const newColumnsInstance = [...columns];
    newColumnsInstance[index] = value;
    handleBoardColumns(newColumnsInstance);
  };
  const handleClearAll = () => {
    handleBoardColumns(['']);
  }
  return (
    <>
      <Paper
        elevation={5}
        style={{ display: "flex", flexDirection: "column", padding: "1em", margin: "1em" }}
      >
        <Typography
          component="i"
          variant="body1"
          color="textSecondary"
          gutterBottom
        >
          Add columns and provide them name.
        </Typography>
        <Box display="flex" flexDirection="column ">
          {columns.map((column, index) => (
            <>
              <Box display="flex" flexDirection="row ">
                <TextField
                  value={column}
                  label={`column ${index + 1}`}
                  style={{ margin: 8 }}
                  placeholder={`column ${index + 1} name`}
                    fullWidth
                  margin="normal"
                  onChange={handleChange(index)}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <IconButton aria-label="Delete" onClick={handleDelete(index)}>
                  <DeleteIcon fontSize="medium" />
                </IconButton>
              </Box>
            </>
          ))}
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Fab color="default" aria-label="Clear All" variant="extended" onClick={handleClearAll} >
            Clear All
          </Fab>
          <Fab
            color="secondary"
            aria-label="Add"
            variant="extended"
            onClick={addColumn}
          >
            <AddIcon />
            Add Column
          </Fab>
        </Box>
      </Paper>
    </>
  );
};

export default CustomBoard;
