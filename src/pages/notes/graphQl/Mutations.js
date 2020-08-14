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

const UPDATE_NOTE = gql`
  mutation updateNote($input: NoteInput!) {
    updateNote(input: $input)
  }
`;
export {CREATE_NOTE, UPDATE_NOTE};
