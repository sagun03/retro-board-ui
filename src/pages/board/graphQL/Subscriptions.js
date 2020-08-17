import { gql } from '@apollo/client';

const BOARD_CREATED  = gql`
  subscription boardCreated {
    boardCreated {
      id
      name
      columns {
        id
        name
      }
      type
      status
    }
  }
`;
export { BOARD_CREATED };
