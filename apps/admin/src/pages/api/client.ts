import { ApolloClient, ApolloLink, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError, ErrorResponse } from "@apollo/client/link/error";
import {
  HASURA_GRAPHQL_ENDPOINT,
  HASURA_GRAPHQL_ADMIN_SECRET,
} from "../../configs/constants";
import { hasGraphQLError } from "../../utils/hasGraphQLError";
import { localState as cache } from "../../utils/localState";

const httpLink = createHttpLink({ uri: HASURA_GRAPHQL_ENDPOINT });

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    "x-hasura-admin-secret": HASURA_GRAPHQL_ADMIN_SECRET,
  },
}));

const operationLink = setContext(({ operationName }, { headers }) => ({
  headers: { ...headers, operation: operationName },
}));

const errorLink = onError(({ graphQLErrors, networkError }: ErrorResponse): void => {
  if (hasGraphQLError("UNAUTHENTICATED", graphQLErrors)) {
    window.location.reload();
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

export const client = new ApolloClient({
  uri: HASURA_GRAPHQL_ENDPOINT,
  link: ApolloLink.from([operationLink, authLink, errorLink, httpLink]),
  cache: cache,
});
