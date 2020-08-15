import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import CustomBoard from "../customBoard";
import TemplateBoard from "../templateBoard";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import TextField from "@material-ui/core/TextField";
import { CREATE_BOARD } from './graphQL/Mutation';
import { useMutation } from '@apollo/client';

const CreateBoardModal = ({ handleModal, history }) => {
  const [boardContent, handleBoardContent] = useState({ name: "", type: "" , columns: ['']});
  const [createBoard, { data, loading, error }] = useMutation(CREATE_BOARD);
  const handleBoard = recognizer => ({ target: { value } }) => {
    handleBoardContent({ ...boardContent, [recognizer]: value });
  };
  const handleBoardColumns = (value) => {
    handleBoardContent({...boardContent, columns: value});
  }
  const handleCreateBoard = () => {
    const { type, name, columns } = boardContent;
    console.log('name, type, columns ', name, type, columns )
    createBoard({ variables: { input: { name, type, columns } }}).then((res) => {
      const { data: { createBoard : { id } } } = res;
      history.push(`/notes/${id}`)
    });
  }
  const { type, name, columns } = boardContent;
  return (
    <Dialog
      open
      onClose={() => handleModal(false)}
      aria-labelledby="customized-dialog-title"
      >
      <DialogTitle>Create Retro board</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You can create your board by using the templates provided or can
          create your own custom board
        </DialogContentText>
        <TextField
          value={name}
          label="Board Name *"
          style={{ margin: 2 }}
          fullWidth
          margin="normal"
          onChange={handleBoard("name")}
          InputLabelProps={{
            shrink: true
          }}
        />
        <FormControl>
          <Select
            value={type}
            onChange={handleBoard("type")}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"custom"}>Custom</MenuItem>
            <MenuItem value={"template"}>Template</MenuItem>
          </Select>
          <FormHelperText>Select your board type</FormHelperText>
        </FormControl>
        {type === "custom" && <CustomBoard handleModal={handleModal} columns={columns} handleBoardColumns={handleBoardColumns} />}
        {/* TODO: handle columns managerment for template board */}
        {type === "template" && <TemplateBoard handleModal={handleModal} columns={columns} handleBoardColumns={handleBoardColumns} />}
        {(type === "custom" || type === "template") && (
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Button
              color="default"
              variant="contained"
              size="large"
              onClick={() => handleModal(false)}
            >
              Cancel
            </Button>
            <Button
              color="secondary"
              variant="outlined"
              size="large"
              startIcon={<AddCircleOutlineIcon />}
              onClick={handleCreateBoard}
              loading={loading}
            >
              Create Board
            </Button>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CreateBoardModal;
