import { gql } from "@apollo/client";
import { Campaign } from "../../../typed/campaign";

export interface GetCampaignListingDataQuery {
  campaigns: Campaign[];
  featuredCampaigns: Campaign[];
}

export const GET_CAMPAIGN_LISTING_DATA = gql`
  query GetCampaigns {
    campaigns @client
    featuredCampaigns @client
  }
`;
