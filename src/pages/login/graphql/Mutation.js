import { gql } from '@apollo/client';

const LOGIN = gql`
  mutation login($input: UserInput!) {
    login(input: $input) {
      token
      user {
        id
        name
        email
        role
      }
    }
  }
`;

export {LOGIN};
