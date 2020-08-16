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
  mutation updateNote($input: InputNote!) {
    updateNote(input: $input)
  }
`;

const DELETE_NOTE = gql`
  mutation deleteNote($id: ID!) {
    deleteNote(id: $id)
  }
`;

export {CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE};
