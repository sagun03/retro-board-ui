import React, { useState, useEffect } from "react";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
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
import DeleteNoteModal from './DeleteNoteModal';

export default ({note: { id, content, user, likes, dislikes, columnId }}) => {
  const [isDeleteModalOpen, handleDeleteModal] = useState(false);

  const [updateNote, { loading, data, error }] = useMutation(UPDATE_NOTE);
  // TODO: Error handling
  const handleNoteContentMutation = (recognizer) => (value) => {
     const input = { id, [recognizer]: value}
      updateNote({variables: { input }});
  }
  return (
    <>
      <CardContent style={{ backgroundColor: "#E9F4FF" }}>
        <NoteContent id={id} content={content} handleNoteContentMutation={handleNoteContentMutation} />
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
            <IconButton size="small" onClick={() => handleNoteContentMutation('likes')(likes + 1)}>
              <ThumbUpAltIcon fontSize="inherit" />
            </IconButton>
            {likes}
            <IconButton size="small">
              <ThumbDownAltIcon fontSize="inherit" onClick={() => handleNoteContentMutation('dislikes')(dislikes + 1)} />
            </IconButton>
            {dislikes}
            <IconButton size="small">
              <CommentIcon fontSize="inherit" />
            </IconButton>
            <IconButton size="small">
              <StarBorderIcon fontSize="inherit" />
            </IconButton>
            <IconButton size="small" onClick={() => handleDeleteModal(true)}>
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </Box>
          {isDeleteModalOpen && <DeleteNoteModal id={id} handleDeleteModal={handleDeleteModal} />}
        </Box>
      </CardActions>
    </>
  );
};
