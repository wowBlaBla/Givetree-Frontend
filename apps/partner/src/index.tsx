import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider, ApolloClient, ApolloLink, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError, ErrorResponse } from "@apollo/client/link/error";
import { Auth0Provider } from "@auth0/auth0-react";
import { App } from "./App";
import {
  AUTH0_CLIENT_ID,
  AUTH0_DOMAIN,
  AUTH0_REDIRECT_URI,
  HASURA_GRAPHQL_ENDPOINT,
  HASURA_GRAPHQL_ADMIN_SECRET,
} from "./configs/constants";
import { hasGraphQLError } from "./utils/hasGraphQLError";
import { localState as cache } from "./utils/localState";

import "../src/assets/styles/global.css";
import "react-toastify/dist/ReactToastify.css";

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

const client = new ApolloClient({
  cache: cache,
  link: ApolloLink.from([operationLink, authLink, errorLink, httpLink]),
  uri: HASURA_GRAPHQL_ENDPOINT,
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ApolloProvider client={client}>
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      redirectUri={AUTH0_REDIRECT_URI}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </ApolloProvider>
);
