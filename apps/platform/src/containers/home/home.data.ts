import { gql } from "@apollo/client";
import { Campaign } from "../../typed/campaign";
import { Charity } from "../../typed/charity";

export interface GetHomeDataQuery {
  campaigns: Campaign[];
  homepageCampaign: Campaign;
  charities: Charity[];
}

export const GET_HOME_DATA = gql`
  query GetHomeData {
    campaigns @client
    homepageCampaign @client
    charities @client
  }
`;
