import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import IconButton from "@material-ui/core/IconButton";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import CommentIcon from "@material-ui/icons/Comment";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";

export default ({ notes }) => {
  return (
    <>
      {notes.map(({ id, content, user }) => (
        <Card style={{ minWidth: 275, margin: "0.3em" }} variant="outlined">
          <CardContent>
            <div style={{ borderRadius: 0 }}>
              <TextField
                value={content}
                style={{ margin: 2 }}
                placeholder={`Add your note`}
                fullWidth
                variant="outlined"
                color="white"
                margin="normal"
                multiline
                //   onChange={handleChange(index)}
                //                   InputLabelProps={{
                //                       classes: {
                //                           root: { '&$focused$notchedOutline': {
                //       borderColor: 'green'
                //    }}
                //                       }
                // style:{color: 'white', outline: 'none', input:focus}
                //   }}
              />
            </div>
          </CardContent>
          <CardActions>
          {/* TODO: Why flex propery is not working!!!!!!!!!!!!!!  */}
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
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
        </Card>
      ))}
    </>
  );
};
