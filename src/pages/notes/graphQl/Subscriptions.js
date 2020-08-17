import { gql } from '@apollo/client';

const NOTES_UPDATED = gql`
  subscription notesUpdated {
    notesUpdated {
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
  subscription noteCreated {
    noteCreated {
      id
      columnId
      content
      likes
      dislikes
      user
    }
  }
`;
const NOTE_DELETED = gql`
  subscription noteDeleted {
    noteDeleted {
      id
      columnId
      content
      likes
      dislikes
      user
    }
  }
`;
export {NOTES_UPDATED, NOTE_CREATED, NOTE_DELETED};
