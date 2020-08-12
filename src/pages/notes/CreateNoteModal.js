import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import { useMutation } from '@apollo/client';
import { CREATE_NOTE } from './graphQl/Mutations';

export default ({ columnId, handleAddNoteModal }) => {
  const [note, handleNote] = useState('');
  const handleNoteContent = ({ target: { value } }) => {
    if(value.trim().length) {
        handleNote(value);
    }
  };
  const [createNote, { data, loading, error }] = useMutation(CREATE_NOTE);
  const handleCreateNote = () => {
    createNote({variables: { input: {columnId, content: note} }}).then(() =>  handleAddNoteModal(""))
  }
    return (
    <Dialog
      open
      onClose={() => handleAddNoteModal("")}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle>
        <Typography variant="h5"> Create Note </Typography>
         <IconButton aria-label="close" style={{ position: 'absolute', top: 0, right: 4}} onClick={() => handleAddNoteModal("")}>
        <CloseIcon />
      </IconButton>
      </DialogTitle>

      <DialogContent>
        <TextField
            value={note}
          label="Content *"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="Enter card detail"
            onChange={handleNoteContent}
          InputLabelProps={{
            shrink: true
          }}
          rows={4}
          multiline
        />
        <Button
          color="secondary"
          variant="contained"
          size="large"
          fullWidth
          style={{ marginTop: "1em" }}
          onClick={handleCreateNote}
        >
          Create Note
        </Button>
      </DialogContent>
    </Dialog>
  );
};
