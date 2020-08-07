import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:9001/graphql',
  cache: new InMemoryCache()
});

export default ({children}) =>  <ApolloProvider client={client}>{children}</ApolloProvider>
