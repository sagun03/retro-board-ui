import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardControl from './CardControl';

export default ({ notes }) => {
  return (
    <>
      {notes.map(({ id, content, user }) => (
        <Card
          style={{ minWidth: "12.5rem", margin: "0.9em" }}
          variant="outlined"
        >
          <CardControl id={id} content={content} user={user} />
        </Card>
      ))}
    </>
  );
};
