import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";

export default ({ id, handleDeleteModal }) => {
  return (
    <Dialog
      open
      onClose={() => handleDeleteModal(false)}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle>
        <Typography variant="h5">
          Are you Sure want to delete note ?{" "}
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Button
            color="default"
            variant="contained"
            size="large"
            onClick={() => handleDeleteModal(false)}
          >
            Cancel
          </Button>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            startIcon={<DeleteIcon />}
          >
            Confirm
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
