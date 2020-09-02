import { gql } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

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
const GOOGLE_LOGIN = gql`
mutation googleLogin {
  googleLogin {
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
export {LOGIN, GOOGLE_LOGIN};
