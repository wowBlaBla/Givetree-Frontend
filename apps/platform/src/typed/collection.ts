import { Creator } from "./creator";
import { ImpactPartner } from "./impactPartner";

export interface Collection {
  id: string;
  title: string;
  shortDescription?: string;
  longDescription?: string;
  symbol: string;
  creator: Creator;
  backgroundImageUrl: string;
  collectionImageUrl: string;
  startingMintPrice: number;
  totalSupplyCount: number;
  expectedMintDate: Date;
  isVerified: boolean;
  websiteUrl: string;
  discordUrl: string;
  twitterUrl: string;
  contractUrl: string;
  mintingUrl: string;
  impactPartner: ImpactPartner;
}
