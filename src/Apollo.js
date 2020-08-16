import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  split,
  HttpLink
} from "@apollo/client";
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

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);
const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(
    {addTypename: false}
  )
});

export default ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
