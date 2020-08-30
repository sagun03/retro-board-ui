import { gql } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

const UserLogin = gql`
  query userLogin {
    userLogin
  }
`;

export {UserLogin};
