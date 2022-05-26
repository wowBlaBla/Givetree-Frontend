import { InMemoryCache } from "@apollo/client";

export const localState: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {},
    },
  },
});
