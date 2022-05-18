import { gql } from "@apollo/client";
import { Campaign } from "../../../typed/campaign";

export interface GetCampaignDetailsDataQuery {
  campaign: Campaign;
}

export const GET_CAMPAIGN_DETAILS_DATA = gql`
  query GetCampaign($slug: String!) {
    campaign(slug: $slug) {
      id
      title
      slug
      shortDescription
      longDescription
      media {
        campaignBannerUrl
        campaignCollectionPreviewUrl
        campaignDetailsUrl
        campaignTilePreviewUrl
        mintingBannerUrl
        mintingCollectionPreviewUrl
      }
      currency
      floorPrice
      totalSupply
      isVerified
      websiteUrl
      discordUrl
      twitterUrl
      contractUrl
      whitelistMemo
      royalties {
        type
        walletAddress
        amountInPercentage
      }
      nominatedCharity {
        id
        name
        causes
        media {
          tileUrl
          previewUrl
        }
      }
      creators {
        id
        name
        description
        isVerified
        media {
          previewUrl
        }
      }
      event {
        id
        name
        rounds {
          id
          name
          type
          supply
          mintPrice
          maxToken
          whitelistCondition
          startDate
          endDate
        }
      }
    }
  }
`;
