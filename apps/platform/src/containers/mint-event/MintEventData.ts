import { gql } from "@apollo/client";
import { Campaign } from "../../typed/campaign";

export interface GetMintingEventDataQuery {
  campaign: Campaign;
}

export const GET_MINTING_EVENT_DATA = gql`
  query GetMintingEventData($slug: String!) {
    campaign(slug: $slug) {
      id
      title
      slug
      shortDescription
      currency
      floorPrice
      isVerified
      media {
        mintingBannerUrl
        mintingCollectionPreviewUrl
      }
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
    }
  }
`;
