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
import CustomBoard from "./CustomBoard";
import TemplateBoard from "./TemplateBoard";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const CreateBoardModal = ({ handleModal }) => {
  const [boardType, handleBoardType] = useState("");
  const handleBoardSelect = ({ target: { value } }) => {
    handleBoardType(value);
  };
  console.log("board type-", boardType);
  return (
    <Dialog
      open
      onClose={() => handleModal(false)}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle>Create Retro board</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You can create your board by using the templates provided or can
          create your own custom board
        </DialogContentText>
        <FormControl>
          <Select
            value={boardType}
            onChange={handleBoardSelect}
            displayEmpty
            //   className={classes.selectEmpty}
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
        {boardType === "custom" && <CustomBoard handleModal={handleModal} />}
        {boardType === "template" && (
          <TemplateBoard handleModal={handleModal} />
        )}
        {(boardType === "custom" || boardType === "template") && (
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Button
              // fullWidth
              color="default"
              variant="contained"
              size="large"
              onClick={() => handleModal(false)}
            >
              Cancel
            </Button>
            <Button
              // fullWidth
              color="secondary"
              variant="outlined"
              size="large"
              startIcon={<AddCircleOutlineIcon />}
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
