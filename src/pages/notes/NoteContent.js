import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

export default ({ content, id }) => {
  const [openedId, setOpenedId] = useState("");
  const handleKeyPress = event => {
    // sepcifically for enter
    if (event.charCode === 13) {
      event.preventDefault();
      setOpenedId("");
    }
  };

  return openedId ? (
    <TextField
      value={content}
      autoFocus
      style={{ margin: 2 }}
      id={id}
      placeholder={`Add your note`}
      fullWidth
      variant="outlined"
      multiline
      color="secondary"
      onKeyPress={event => handleKeyPress(event)}
      onBlur={() => setOpenedId("")}
    />
  ) : (
    <Typography onClick={() => setOpenedId(id)} style={{ textAlign: "center",
    overflowWrap: 'break-word'}} >
      {content}
    </Typography>
  );
};
