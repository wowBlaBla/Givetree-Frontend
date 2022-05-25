import { gql } from "@apollo/client";

export const USER_ONBOARDING_QUERY = gql`
  query GetUserOnboardingQuery {
    user
  }
`;

export const USER_ONBOARDING_MUTATION = gql`
  mutation UserOnboardingMutation {
    user
  }
`;
