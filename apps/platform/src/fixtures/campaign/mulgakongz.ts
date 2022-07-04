import { faker as gen } from "@faker-js/faker";

import { genMulgaTheArtistContentCreator } from "../content-creator";
import { genCampaignEvent, genCampaignEventRound } from "../event";
import { genRoyalty } from "../royalties";
import { Campaign } from "../../typed/campaign";
import { EventRoundType } from "../../typed/enum/eventType";
import { SupportedPlatform } from "../../typed/enum/supportedPlatform";

import MulgakongzBannerImage from "../../temp/images/campaigns/mulgakongz-bg.png";
import MulgakongzCollectionImage from "../../temp/images/campaigns/mulgakongz-collection.png";
import MulgakongzCollection2Image from "../../temp/images/campaigns/mulgakongz-collection-2.png";
import { genHalfCutData } from "../charity/half-cut";

export const genMulgakongzCampaignData = (x?: Partial<Campaign>): Campaign => ({
  id: gen.datatype.uuid(),
  title: "Mulgakongz",
  slug: "mulgakongz",
  shortDescription: gen.lorem.sentences(3),
  longDescription: gen.lorem.paragraphs(),
  media: {
    campaignBannerUrl: MulgakongzBannerImage.src,
    campaignCollectionPreviewUrl: MulgakongzCollectionImage.src,
    campaignDetailsUrl: MulgakongzCollection2Image.src,
    campaignTilePreviewUrl: MulgakongzCollectionImage.src,
    mintingBannerUrl: MulgakongzBannerImage.src,
    mintingCollectionPreviewUrl: MulgakongzCollectionImage.src,
  },
  floorPrice: gen.datatype.float({ min: 0, max: 2 }),
  currency: SupportedPlatform.SOL,
  totalSupply: gen.datatype.number({ min: 100, max: 10000 }),
  isVerified: true,
  websiteUrl: gen.internet.url(),
  discordUrl: gen.internet.url(),
  twitterUrl: gen.internet.url(),
  contractUrl: gen.internet.url(),
  nominatedCharity: genHalfCutData(),
  royalties: genRoyalty(),
  creators: [genMulgaTheArtistContentCreator()],
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
