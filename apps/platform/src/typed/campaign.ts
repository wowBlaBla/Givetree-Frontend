import { ContentCreator } from "./content-creator";
import { Charity } from "./charity";
import { RoyaltyDetails } from "./royalty-details";
import { CampaignEvent } from "./campaign-event";
import { SupportedPlatform } from "./enum/supportedPlatform";

export interface Campaign {
  id: string;
  title: string;
  slug: string;
  shortDescription?: string;
  longDescription?: string;
  media: {
    campaignBannerUrl: string;
    campaignCollectionPreviewUrl: string;
    campaignDetailsUrl: string;
    campaignTilePreviewUrl: string;
    mintingBannerUrl: string;
    mintingCollectionPreviewUrl: string;
  };
  currency: SupportedPlatform;
  floorPrice: number;
  totalSupply: number;
  startMintDate: Date;
  endMintDate: Date;
  isVerified?: boolean;
  websiteUrl?: string;
  discordUrl?: string;
  twitterUrl?: string;
  contractUrl?: string;
  nominatedCharity: Charity;
  royalties: RoyaltyDetails[];
  creators: ContentCreator[];
  whitelistMemo?: string;
  event: CampaignEvent;
}
