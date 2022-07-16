import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { setContext } from '@apollo/client/link/context';
import { AUTH_TOKEN } from '../constants';

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`
});
const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache()
});





export default client;