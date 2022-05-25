import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import axios from "axios";
import { GQL_ENDPOINT } from "../../configs/constants";

const httpLink = createHttpLink({
  uri: GQL_ENDPOINT,
  fetch: (...args) => fetch(...args),
});

async function fetchSession() {
  const res = await axios.get(`/api/session`);
  return res.data.session.idToken;
}

const authLink = setContext((_, { headers }) => {
  return fetchSession().then((token) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }));
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
