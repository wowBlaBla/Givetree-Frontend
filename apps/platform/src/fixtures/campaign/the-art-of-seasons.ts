import { faker as gen } from "@faker-js/faker";

import { genFoundationForNationalParksAndWildlifeData } from "../charity/foundation-for-national-parks-and-wildlife";
import { genRengaFactoryContentCreator } from "../content-creator";
import { genCampaignEvent, genCampaignEventRound } from "../event";
import { genRoyalty } from "../royalties";
import { Campaign } from "../../typed/campaign";
import { EventRoundType } from "../../typed/enum/eventType";
import { SupportedPlatform } from "../../typed/enum/supportedPlatform";

import TheArtOfSeasonsBannerImage from "../../temp/images/campaigns/the-art-of-seasons-bg.png";
import TheArtOfSeasonsCollectionImage from "../../temp/images/campaigns/the-art-of-seasons-collection-2.jpeg";
import TheArtOfSeasonsCollection2Image from "../../temp/images/campaigns/the-art-of-seasons-collection.jpeg";
import { gen20TalkData } from "../charity/twenty-talk";

export const genTheArtOfSeasonsCampaignData = (x?: Partial<Campaign>): Campaign => ({
  id: gen.datatype.uuid(),
  title: "The Art of Seasons",
  slug: "the-art-of-seasons",
  shortDescription: gen.lorem.sentences(3),
  longDescription: gen.lorem.paragraphs(),
  media: {
    campaignBannerUrl: TheArtOfSeasonsBannerImage.src,
    campaignCollectionPreviewUrl: TheArtOfSeasonsCollectionImage.src,
    campaignDetailsUrl: TheArtOfSeasonsCollection2Image.src,
    campaignTilePreviewUrl: TheArtOfSeasonsCollectionImage.src,
    mintingBannerUrl: TheArtOfSeasonsBannerImage.src,
    mintingCollectionPreviewUrl: TheArtOfSeasonsCollectionImage.src,
  },
  floorPrice: gen.datatype.float({ min: 0.5, max: 1.5 }),
  currency: SupportedPlatform.SOL,
  totalSupply: gen.datatype.number({ min: 100, max: 10000 }),
  isVerified: true,
  websiteUrl: gen.internet.url(),
  discordUrl: gen.internet.url(),
  twitterUrl: gen.internet.url(),
  contractUrl: gen.internet.url(),
  nominatedCharity: gen20TalkData(),
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
