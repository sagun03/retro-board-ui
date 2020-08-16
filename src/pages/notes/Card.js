import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardControl from './CardControl';

export default ({ notes, subscribeToMore }) => {
  return (
    <>
      {notes.map((note) => (
        <Card
          style={{ minWidth: "12.5rem", margin: "0.9em" }}
          variant="outlined"
        >
          <CardControl note={note} subscribeToMore={subscribeToMore} />
        </Card>
      ))}
    </>
  );
};
