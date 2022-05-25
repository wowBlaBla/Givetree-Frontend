import { gql } from "@apollo/client";
import { User } from "../../typed/user";

export interface GetUserDataQuery {
  users: User[];
}

export const GET_USER_DATA = gql`
  query GetUsers {
    users {
      id
      userId
      name
      description
      websiteUrl
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $description: String!
    $websiteUrl: String!
    $userId: String!
    $email: String!
  ) {
    insert_user_one(
      object: {
        name: $name
        description: $description
        websiteUrl: $websiteUrl
        email: $email
        userId: $userId
      }
    ) {
      id
    }
  }
`;
