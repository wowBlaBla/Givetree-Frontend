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
      startMintDate
      endMintDate
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
        startDate
        name
        rounds {
          id
          name
          type
          supply
          mintPrice
          maxLimit
          whitelistCondition
          startDate
          endDate
        }
      }
    }
  }
`;

// export interface Campaign {
//   id: string;
//   title: string;
//   slug: string;
//   shortDescription?: string;
//   longDescription?: string;
//   media: {
//     campaignBannerUrl: string;
//     campaignCollectionPreviewUrl: string;
//     campaignDetailsUrl: string;
//     campaignTilePreviewUrl: string;
//     mintingBannerUrl: string;
//     mintingCollectionPreviewUrl: string;
//   };
//   currency: SupportedPlatform;
//   floorPrice: number;
//   totalSupply: number;
//   startMintDate: Date;
//   isVerified?: boolean;
//   websiteUrl?: string;
//   discordUrl?: string;
//   twitterUrl?: string;
//   contractUrl?: string;
//   nomatedChartiy: Charity;
//   royalties: RoyaltyDetails[];
//   creators: ContentCreator[];
//   whitelistMemo?: string;
//   event: CampaignEvent;
// }
