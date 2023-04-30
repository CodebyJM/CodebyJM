import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';

console.log('NEXT_PUBLIC_WORDPRESS_API_URL:', process.env.NEXT_PUBLIC_WORDPRESS_API_URL);


export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL + '/graphql',
  cache: new InMemoryCache(),
});
