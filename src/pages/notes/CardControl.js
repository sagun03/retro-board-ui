import React, { useState } from "react";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import IconButton from "@material-ui/core/IconButton";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import CommentIcon from "@material-ui/icons/Comment";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import { useMutation } from "@apollo/client";
import { UPDATE_NOTE } from "./graphQl/Mutations";
import NoteContent from "./NoteContent";

export default ({ id, content, user }) => {
  return (
    <>
      <CardContent style={{ backgroundColor: "#E9F4FF" }}>
        <NoteContent id={id} content={content} />
      </CardContent>
      <CardActions>
        {/* TODO: Why flex propery is not working!!!!!!!!!!!!!!  */}
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Box>
            {/* Name of user that last updated the card */}
            <Typography
              component="i"
              variant="caption"
              color="secondary"
              gutterBottom
            >
              {user}
            </Typography>
          </Box>
          <Box>
            <IconButton size="small">
              <ThumbUpAltIcon fontSize="inherit" />
            </IconButton>
            <IconButton size="small">
              <ThumbDownAltIcon fontSize="inherit" />
            </IconButton>
            <IconButton size="small">
              <CommentIcon fontSize="inherit" />
            </IconButton>
            <IconButton size="small">
              <StarBorderIcon fontSize="inherit" />
            </IconButton>
            <IconButton size="small">
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </Box>
      </CardActions>
    </>
  );
};
