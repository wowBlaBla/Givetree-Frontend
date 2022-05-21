import { gql } from "@apollo/client";
import { Charity } from "../../../typed/charity";

export interface GetCharityListingDataQuery {
  charities: Charity[];
}

export const GET_CHARITY_LISTING_DATA = gql`
  query GetCampaigns {
    charities @client
  }
`;
