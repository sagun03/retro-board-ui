import { gql } from '@apollo/client';

const CREATE_NOTE = gql`
  mutation createNote($input: NoteInput!) {
    createNote(input: $input) {
      id
      columnId
      content
      likes
      dislikes
    }
  }
`;

export {CREATE_NOTE};
