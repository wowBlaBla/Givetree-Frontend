import { Creator } from "./creator";
import { Charity } from "./impactPartner";

export interface Collection {
  id: string;
  title: string;
  shortDescription?: string;
  longDescription?: string;
  symbol: string;
  creator: Creator;
  backgroundImageUrl: string;
  collectionImageUrl: string;
  floorPrice: number;
  totalSupply: number;
  startMintDate: Date;
  isVerified: boolean;
  websiteUrl: string;
  discordUrl: string;
  twitterUrl: string;
  contractUrl: string;
  mintingUrl: string;
  impactPartner: Charity;
}
