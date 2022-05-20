import { faker as gen } from "@faker-js/faker";

import { genCarbonClimateChangeSociety } from "../charity/carbon-climate-change-society";
import { genRoyalty } from "../royalties";
import { genGenopetsContentCreator } from "../content-creator";
import { genCampaignEvent, genCampaignEventRound } from "../event";
import { Campaign } from "../../typed/campaign";
import { EventRoundType } from "../../typed/enum/eventType";
import { SupportedPlatform } from "../../typed/enum/supportedPlatform";

import AssetImage from "../../temp/images/genopets-asset.png";
import CollectionImage from "../../temp/images/genopets-collection.png";

export const genGenopetsCampaignData = (x?: Partial<Campaign>): Campaign => ({
  id: gen.datatype.uuid(),
  title: "Genopets",
  slug: "genopets",
  shortDescription: gen.lorem.paragraphs(),
  longDescription: gen.lorem.paragraphs(),
  media: {
    campaignBannerUrl: "/videos/genopets-bg.mp4",
    campaignCollectionPreviewUrl: CollectionImage.src,
    campaignDetailsUrl: CollectionImage.src,
    campaignTilePreviewUrl: CollectionImage.src,
    mintingBannerUrl: AssetImage.src,
    mintingCollectionPreviewUrl: CollectionImage.src,
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
        startDate: gen.date.recent(),
      }),
      genCampaignEventRound({
        type: EventRoundType.PublicSale,
        startDate: gen.date.soon(),
      }),
    ],
  }),
  ...x,
});
