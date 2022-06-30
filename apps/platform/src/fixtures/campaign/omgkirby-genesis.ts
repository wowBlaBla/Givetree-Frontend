import { faker as gen } from "@faker-js/faker";

import { genOmgkirbyContentCreator } from "../content-creator";
import { genCampaignEvent, genCampaignEventRound } from "../event";
import { genRoyalty } from "../royalties";
import { Campaign } from "../../typed/campaign";
import { EventRoundType } from "../../typed/enum/eventType";
import { SupportedPlatform } from "../../typed/enum/supportedPlatform";

import OmgkirbyGenesisBannerImage from "../../temp/images/campaigns/omgkirby-genesis-bg.png";
import OmgkirbyGenesisCollectionImage from "../../temp/images/campaigns/omgkirby-genesis-collection.jpeg";
import OmgkirbyGenesisCollection2Image from "../../temp/images/campaigns/omgkirby-genesis-collection-2.jpeg";
import { genGamersOutreachData } from "../charity/gamers-outreach";

export const genOmgkirbyGenesisCampaignData = (x?: Partial<Campaign>): Campaign => ({
  id: gen.datatype.uuid(),
  title: "omgkirby Genesis",
  slug: "omgkirby-genesis",
  shortDescription: gen.lorem.sentences(3),
  longDescription: gen.lorem.paragraphs(),
  media: {
    campaignBannerUrl: OmgkirbyGenesisBannerImage.src,
    campaignCollectionPreviewUrl: OmgkirbyGenesisCollectionImage.src,
    campaignDetailsUrl: OmgkirbyGenesisCollection2Image.src,
    campaignTilePreviewUrl: OmgkirbyGenesisCollectionImage.src,
    mintingBannerUrl: OmgkirbyGenesisBannerImage.src,
    mintingCollectionPreviewUrl: OmgkirbyGenesisCollectionImage.src,
  },
  floorPrice: gen.datatype.float({ min: 3, max: 5 }),
  currency: SupportedPlatform.SOL,
  totalSupply: gen.datatype.number({ min: 100, max: 10000 }),
  isVerified: true,
  websiteUrl: gen.internet.url(),
  discordUrl: gen.internet.url(),
  twitterUrl: gen.internet.url(),
  contractUrl: gen.internet.url(),
  nominatedCharity: genGamersOutreachData(),
  royalties: genRoyalty(),
  creators: [genOmgkirbyContentCreator()],
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
