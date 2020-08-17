import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardControl from './CardControl';
import { NOTES_UPDATED, NOTE_CREATED } from './graphQl/Subscriptions';

export default ({ notes, subscribeToMore }) => {
  useEffect(() => {
    subscribeToMore({
      document: NOTES_UPDATED,
      // variables: { columnId },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const { data: { notesUpdated = {} } = {}} = subscriptionData || {};
        const prevData = JSON.parse(JSON.stringify(prev));
        const { getNotesByBoardId: { columns = []} = {} } = prevData;
        //TODO: if have time look for better way of doing...
        columns.forEach(({id, notes = []}) => {
          if (id === notesUpdated.columnId) {
            let index;
            notes.forEach((note, idx) => {
              if (note.id === notesUpdated.id) {
                index = idx;
              }
            });
            if (index >= 0) {
              notes[index] = notesUpdated;
            }
          }
        });
        return prevData;
      }
    });
    subscribeToMore({
      document: NOTE_CREATED,
      // variables: { columnId },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const { data: { noteCreated = {} } = {}} = subscriptionData || {};
        const prevData = JSON.parse(JSON.stringify(prev));
        console.log('------here-----');
        const { getNotesByBoardId: { columns = []} = {} } = prevData;
        columns.forEach(({id, notes = []}) => {
          if (id === noteCreated.columnId) {
              notes.push(noteCreated);
          }
        });
        return prevData;
      }
    })
  }, []);
  return (
    <>
      {notes.map((note) => (
        <Card
          style={{ minWidth: "12.5rem", margin: "0.9em" }}
          variant="outlined"
        >
          <CardControl note={note}/>
        </Card>
      ))}
    </>
  );
};
