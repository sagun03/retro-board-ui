import { gql } from '@apollo/client';

const BOARD_CREATED  = gql`
  subscription boardCreated {
    boardCreated {
      id
      name
      columns
      type
      status
    }
  }
`;
export { BOARD_CREATED };
