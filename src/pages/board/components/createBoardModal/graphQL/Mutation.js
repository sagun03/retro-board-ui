import { gql } from '@apollo/client';

const CREATE_BOARD = gql`
  mutation createBoard($input: BoardInput!) {
    createBoard(input: $input) {
      id
      name
      type
      columns {
        name
      }
    }
  }
`;

export {CREATE_BOARD};
