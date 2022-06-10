import { faker as gen } from "@faker-js/faker";

import { genFoundationForNationalParksAndWildlifeData } from "../charity/foundation-for-national-parks-and-wildlife";
import { genRoyalty } from "../royalties";
import { genGenopetsContentCreator } from "../content-creator";
import { genCampaignEvent, genCampaignEventRound } from "../event";
import { Campaign } from "../../typed/campaign";
import { EventRoundType } from "../../typed/enum/eventType";
import { SupportedPlatform } from "../../typed/enum/supportedPlatform";

import GenopetsCollectionImage from "../../temp/images/campaigns/genopets-collection.png";
import GenopetsCollection2Image from "../../temp/images/campaigns/genopets-collection-2.png";

export const genGenopetsCampaignData = (x?: Partial<Campaign>): Campaign => ({
  id: gen.datatype.uuid(),
  title: "Genopets",
  slug: "genopets",
  shortDescription: gen.lorem.sentences(3),
  longDescription: gen.lorem.paragraphs(),
  media: {
    campaignBannerUrl: "/videos/genopets-bg.mp4",
    campaignCollectionPreviewUrl: GenopetsCollectionImage.src,
    campaignDetailsUrl: GenopetsCollectionImage.src,
    campaignTilePreviewUrl: GenopetsCollectionImage.src,
    mintingBannerUrl: GenopetsCollection2Image.src,
    mintingCollectionPreviewUrl: GenopetsCollectionImage.src,
  },
  floorPrice: gen.datatype.float({ min: 3, max: 5 }),
  currency: SupportedPlatform.SOL,
  totalSupply: gen.datatype.number({ min: 7000, max: 10000 }),
  isVerified: true,
  websiteUrl: gen.internet.url(),
  discordUrl: gen.internet.url(),
  twitterUrl: gen.internet.url(),
  contractUrl: gen.internet.url(),
  nominatedCharity: genFoundationForNationalParksAndWildlifeData(),
  royalties: genRoyalty(),
  creators: [genGenopetsContentCreator()],
  whitelistMemo: gen.datatype.uuid(),
  event: genCampaignEvent({
    rounds: [
      genCampaignEventRound({
        type: EventRoundType.WhitelistToken,
        startDate: gen.date.recent(),
        endDate: gen.date.soon(),
      }),
      genCampaignEventRound({
        type: EventRoundType.PublicSale,
        startDate: gen.date.soon(),
      }),
    ],
  }),
  ...x,
});
