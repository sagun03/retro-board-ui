import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

export default ({ noteContent, id, handleNoteContent, handleNoteContentMutation }) => {
  const [openedId, setOpenedId] = useState("");
  
  const handleConversion = () => {
    setOpenedId("");
    handleNoteContentMutation('content')(noteContent);
  }
  const handleKeyPress = event => {
    // sepcifically for enter
    if (event.charCode === 13) {
      event.preventDefault();
      handleConversion();
    }
  };

  return openedId ? (
    <TextField
      value={noteContent}
      autoFocus
      style={{ margin: 2 }}
      id={id}
      placeholder={`Add your note`}
      fullWidth
      variant="outlined"
      multiline
      color="secondary"
      onChange={({target: {value}}) => handleNoteContent(value)}
      onKeyPress={handleKeyPress}
      onBlur={handleConversion}
    />
  ) : (
    <Typography onClick={() => setOpenedId(id)} style={{ textAlign: "center" }}>
      {noteContent}
    </Typography>
  );
};
