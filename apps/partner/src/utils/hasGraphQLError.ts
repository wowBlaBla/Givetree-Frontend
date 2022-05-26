import { GraphQLError } from "graphql";

export const hasGraphQLError = (
  code: string,
  graphQLErrors?: readonly GraphQLError[]
): boolean => {
  if (!graphQLErrors) {
    return false;
  }

  return !!graphQLErrors.find((err) =>
    err.extensions ? err.extensions.code === code : false
  );
};
