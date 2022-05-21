import { faker as gen } from "@faker-js/faker";

import { genCarbonClimateChangeSocietyData } from "../charity/carbon-climate-change-society";
import { genRengaFactoryContentCreator } from "../content-creator";
import { genCampaignEvent, genCampaignEventRound } from "../event";
import { genRoyalty } from "../royalties";
import { Campaign } from "../../typed/campaign";
import { EventRoundType } from "../../typed/enum/eventType";
import { SupportedPlatform } from "../../typed/enum/supportedPlatform";

import TheArtOfSeasonsBannerImage from "../../temp/images/campaigns/the-art-of-seasons-bg.png";
import TheArtOfSeasonsCollectionImage from "../../temp/images/campaigns/the-art-of-seasons-collection-2.jpeg";
import TheArtOfSeasonsCollection2Image from "../../temp/images/campaigns/the-art-of-seasons-collection.jpeg";

export const genTheArtOfSeasonsCampaignData = (x?: Partial<Campaign>): Campaign => ({
  id: gen.datatype.uuid(),
  title: "The Art of Seasons",
  slug: "the-art-of-seasons",
  shortDescription: gen.lorem.paragraph(),
  longDescription: gen.lorem.paragraphs(),
  media: {
    campaignBannerUrl: TheArtOfSeasonsBannerImage.src,
    campaignCollectionPreviewUrl: TheArtOfSeasonsCollectionImage.src,
    campaignDetailsUrl: TheArtOfSeasonsCollection2Image.src,
    campaignTilePreviewUrl: TheArtOfSeasonsCollectionImage.src,
    mintingBannerUrl: TheArtOfSeasonsBannerImage.src,
    mintingCollectionPreviewUrl: TheArtOfSeasonsCollectionImage.src,
  },
  floorPrice: gen.datatype.number({ min: 3, max: 5 }),
  currency: SupportedPlatform.SOL,
  totalSupply: gen.datatype.number({ min: 100, max: 10000 }),
  isVerified: true,
  websiteUrl: gen.internet.url(),
  discordUrl: gen.internet.url(),
  twitterUrl: gen.internet.url(),
  contractUrl: gen.internet.url(),
  nominatedCharity: genCarbonClimateChangeSocietyData(),
  royalties: genRoyalty(),
  creators: [genRengaFactoryContentCreator()],
  whitelistMemo: gen.datatype.uuid(),
  event: genCampaignEvent({
    rounds: [
      genCampaignEventRound({
        type: EventRoundType.WhitelistToken,
        startDate: gen.date.soon(),
      }),
      genCampaignEventRound({
        type: EventRoundType.PublicSale,
        startDate: gen.date.soon(),
      }),
    ],
  }),
  ...x,
});
