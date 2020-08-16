import { gql } from '@apollo/client';

const NOTES_UPDATED = gql`
  subscription notesUpdated($columnId: ID!) {
    notesUpdated(columnId: $columnId) {
      id
      columnId
      content
      likes
      dislikes
      user
    }
  }
`;

const NOTE_CREATED = gql`
  subscription noteCreated($columnId: ID!) {
    noteCreated(columnId: $columnId) {
      id
      columnId
      content
      likes
      dislikes
      user
    }
  }
`;
export {NOTES_UPDATED, NOTE_CREATED};
