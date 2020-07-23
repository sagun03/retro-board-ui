import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:7001',
  cache: new InMemoryCache()
});

export default ({children}) =>     <ApolloProvider client={client}>{children}</ApolloProvider>