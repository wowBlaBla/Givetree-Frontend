import { gql } from "@apollo/client";
import { User } from "../../typed/user";

export interface GetUserDataQuery {
  users_by_pk: User;
}

export const GET_USER_DATA_QUERY = gql`
  query GetUser($userId: String!) {
    users_by_pk(userId: $userId) {
      id
      userId
      name
      role
      email
      description
      websiteUrl
      twitterUrl
      discordUrl
    }
  }
`;

export interface CreateUserDataMutation {
  insert_users_one: User;
}

export const CREATE_USER_DATA_MUTATION = gql`
  mutation CreateUser(
    $userId: String!
    $role: String!
    $name: String
    $email: String
    $description: String
    $websiteUrl: String
    $discordUrl: String
    $twitterUrl: String
  ) {
    insert_users_one(
      object: {
        userId: $userId
        role: $role
        name: $name
        email: $email
        description: $description
        websiteUrl: $websiteUrl
        discordUrl: $discordUrl
        twitterUrl: $twitterUrl
      }
    ) {
      id
      userId
      name
      role
      email
      description
      websiteUrl
      twitterUrl
      discordUrl
    }
  }
`;

export interface UpdateUserDataMutation {
  update_users_by_pk: User;
}

export const UPDATE_USER_DATA_MUTATION = gql`
  mutation UpdateUser(
    $userId: String!
    $name: String
    $description: String
    $email: String
    $role: String
    $websiteUrl: String
    $discordUrl: String
    $twitterUrl: String
  ) {
    update_users_by_pk(
      pk_columns: { userId: $userId }
      _set: {
        name: $name
        description: $description
        email: $email
        role: $role
        websiteUrl: $websiteUrl
        discordUrl: $discordUrl
        twitterUrl: $twitterUrl
      }
    ) {
      id
      userId
      name
      role
      email
      description
      websiteUrl
      twitterUrl
      discordUrl
    }
  }
`;
