import { gql } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

const LOGIN = gql`
  mutation userLogin($input: UserInput!) {
    userLogin(input: $input) {
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
mutation googleLogin($input: UserInput!) {
  googleLogin(input: $input) {
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
