import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  split,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import { RestLink } from 'apollo-link-rest';
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const wsLink = new WebSocketLink({
  uri: `ws://localhost:7001/graphql`,
  options: {
    reconnect: true
  }
});

const httpLink = new HttpLink({
  uri: "http://localhost:7001/graphql"
});
const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
const token = localStorage.getItem('token')
  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token ? `JWT ${token}` : ''
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});
const restLink = new RestLink({ uri: "https://localhost:7001/auth/google" });
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  restLink,
  wsLink,
  httpLink
);
const client = new ApolloClient({
  link: ApolloLink.from([authLink, restLink, splitLink]),
  cache: new InMemoryCache(
    {addTypename: false}
  )
});

export default ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
