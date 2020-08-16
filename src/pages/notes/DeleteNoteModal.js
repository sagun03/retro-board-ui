import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import { useMutation } from "@apollo/client";
import { DELETE_NOTE } from "./graphQl/Mutations";

export default ({ id, handleDeleteModal }) => {
  const [deleteNote, { loading, data, error }] = useMutation(DELETE_NOTE)
  // TODO: error handling
  return (
    <Dialog
      open
      onClose={() => handleDeleteModal(false)}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle>
        <Typography variant="h5">
          Are you Sure want to delete note ?
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Box display="flex" flexDirection="row" justifyContent="flex-end">
          <Button
            color="default"
            variant="contained"
            size="large"
            onClick={() => handleDeleteModal(false)}
            style={{marginRight: '1em'}}
          >
            Cancel
          </Button>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            startIcon={<DeleteIcon />}
            onClick={() => {deleteNote({variables: {id}}); handleDeleteModal(false)}}
          >
            Confirm
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
