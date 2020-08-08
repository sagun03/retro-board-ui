import { gql } from '@apollo/client';

const GET_BOARDS = gql`
  query GetBoards {
    getBoards {
      name
      id
      status
      type
      columns {
        id
        name
      }
    }
  }
`;

export {
  GET_BOARDS,
};
