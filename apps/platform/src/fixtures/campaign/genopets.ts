import AssetImg from "../../assets/images/genopets-asset.png";
import CollectionImg from "../../assets/images/genopets-collection.png";
import { SupportedPlatform } from "../../typed/enum/supportedPlatform";
import { Campaign } from "../../typed/campaign";

import { genCarbonClimateChangeSociety } from "../charity/carbon-climate-change-society";
import { genRoyalty } from "../royalties";
import { genGenopetsContentCreator } from "../content-creator";
import { genCampaignEvent } from "../event";

import { faker as gen } from "@faker-js/faker";

export const genGenopetsCampaign = (x?: Partial<Campaign>): Campaign => ({
  id: gen.datatype.uuid(),
  title: "Genopets",
  name: "Genopets",
  shortDescription: gen.lorem.paragraphs(),
  longDescription: gen.lorem.paragraphs(),
  media: {
    campaignBannerUrl: AssetImg.src,
    campaignCollectionPreviewUrl: AssetImg.src,
    campaignDetailsUrl: CollectionImg.src,
    campaignTilePreviewUrl: CollectionImg.src,
    mintingBannerUrl: AssetImg.src,
    mintingCollectionPreviewUrl: AssetImg.src,
  },
  floorPrice: 3,
  currency: SupportedPlatform.ETH,
  totalSupply: 8888,
  startMintDate: gen.date.future(5),
  isVerified: true,
  websiteUrl: gen.internet.url(),
  discordUrl: gen.internet.url(),
  twitterUrl: gen.internet.url(),
  contractUrl: gen.internet.url(),
  nomatedChartiy: genCarbonClimateChangeSociety(),
  royalties: genRoyalty(),
  creators: [genGenopetsContentCreator()],
  whitelistMemo: gen.datatype.uuid(),
  event: genCampaignEvent(),
  ...x,
});
