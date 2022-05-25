import { ApolloClient, ApolloLink, createHttpLink } from "@apollo/client";
import { ErrorResponse, onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { GQL_ENDPOINT } from "./constants";
import { hasGraphQLError } from "../utils/hasGraphQLError";
import { localState as cache } from "../utils/localState";

const httpLink = createHttpLink({ uri: GQL_ENDPOINT });

const authLink = setContext((_, { headers, token }) => ({
  headers: {
    ...headers,
    ...(token ? { authorization: `Bearer ${token}` } : {}),
  },
}));

const errorLink = onError(({ graphQLErrors, networkError }: ErrorResponse): void => {
  if (hasGraphQLError("UNAUTHENTICATED", graphQLErrors)) {
    window.location.reload();
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const operationLink = setContext(({ operationName }, { headers }) => ({
  headers: { ...headers, operation: operationName },
}));

export const client = new ApolloClient({
  cache: cache,
  link: ApolloLink.from([authLink, errorLink, operationLink, httpLink]),
  uri: GQL_ENDPOINT,
});
