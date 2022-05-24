import { ApolloClient, ApolloLink, createHttpLink } from "@apollo/client";
import { ErrorResponse, onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { GIVETREE_ADMIN_AUTH_KEY, GQL_ENDPOINT } from "./configs/constants";
import { getAuthToken, unsetToken } from "./utils/auth";
import { hasGraphQLError } from "./utils/hasGraphQLError";
import { localState as cache } from "./utils/localState";

const authLink = setContext((_, { headers, token }) => ({
  headers: {
    ...headers,
    ...(token ? { authorization: `Bearer ${token}` } : {}),
  },
}));

const errorLink = onError(({ graphQLErrors, networkError }: ErrorResponse): void => {
  if (
    hasGraphQLError("UNAUTHENTICATED", graphQLErrors) &&
    getAuthToken(GIVETREE_ADMIN_AUTH_KEY)
  ) {
    unsetToken(GIVETREE_ADMIN_AUTH_KEY);
    window.location.reload();
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const httpLink = createHttpLink({ uri: `${GQL_ENDPOINT}/graphql` });

const operationLink = setContext(({ operationName }, { headers }) => ({
  headers: { ...headers, operation: operationName },
}));

const withTokenLink = setContext(() => ({
  token: getAuthToken(GIVETREE_ADMIN_AUTH_KEY),
}));

export const client = new ApolloClient({
  cache: cache,
  link: ApolloLink.from([authLink, errorLink, httpLink, operationLink, withTokenLink]),
  uri: GQL_ENDPOINT,
});
