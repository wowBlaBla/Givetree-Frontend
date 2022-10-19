import { gql } from "@apollo/client";
import { Charity } from "../../typed/charity";

export interface GetCharityDetailsDataQuery {
  charity: Charity;
}

export const GET_CHARITY_DETAILS_DATA = gql`
  query GetCharity($slug: String!) {
    charity(slug: $slug) {
      name
      shortDescription
      longDescription
      websiteUrl
      media {
        tileUrl
        previewUrl
      }
      isVerified
      causes
    }
  }
`;
