import AssetImg from "../../assets/images/genopets-asset.png";
import CollectionImg from "../../assets/images/genopets-collection.png";
import { SupportedPlatform } from "../../typed/enum/supportedPlatform";
import { Campaign } from "../../typed/campaign";

import { genCarbonClimateChangeSociety } from "../charity/carbon-climate-change-society";
import { genRoyalty } from "../royalties";
import { genGenopetsContentCreator } from "../content-creator";
import { genCampaignEvent, genCampaignEventRound } from "../event";

import { faker as gen } from "@faker-js/faker";
import { EventRoundType } from "../../typed/enum/eventType";

export const genGenopetsCampaignData = (x?: Partial<Campaign>): Campaign => ({
  id: gen.datatype.uuid(),
  title: "Genopets",
  slug: "genopets",
  shortDescription: gen.lorem.paragraphs(),
  longDescription: gen.lorem.paragraphs(),
  media: {
    campaignBannerUrl: AssetImg.src,
    campaignCollectionPreviewUrl: CollectionImg.src,
    campaignDetailsUrl: CollectionImg.src,
    campaignTilePreviewUrl: CollectionImg.src,
    mintingBannerUrl: AssetImg.src,
    mintingCollectionPreviewUrl: CollectionImg.src,
  },
  floorPrice: gen.datatype.number({ min: 3, max: 5 }),
  currency: SupportedPlatform.SOL,
  totalSupply: gen.datatype.number({ min: 7000, max: 10000 }),
  isVerified: true,
  websiteUrl: gen.internet.url(),
  discordUrl: gen.internet.url(),
  twitterUrl: gen.internet.url(),
  contractUrl: gen.internet.url(),
  nominatedCharity: genCarbonClimateChangeSociety(),
  royalties: genRoyalty(),
  creators: [genGenopetsContentCreator()],
  whitelistMemo: gen.datatype.uuid(),
  event: genCampaignEvent({
    rounds: [
      genCampaignEventRound({
        type: EventRoundType.WhitelistToken,
        startDate: gen.date.past(),
      }),
      genCampaignEventRound({
        type: EventRoundType.PublicSale,
        startDate: gen.date.future(),
      }),
    ],
  }),
  ...x,
});
