import { gql } from "@apollo/client";

const GET_BOARD_COLUMN_NOTE = gql`
    query getNotesByBoardId($id: ID) {
        getNotesByBoardId(id: $id) {
            id
            name
            columns {
              id
              name
              notes{
                id
                columnId
                likes
                content
                dislikes
                user
              }
            }
        }
  }
`;

export { GET_BOARD_COLUMN_NOTE };
