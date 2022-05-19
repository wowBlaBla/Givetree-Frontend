import { faker as gen } from "@faker-js/faker";

import { genCarbonClimateChangeSociety } from "../charity/carbon-climate-change-society";
import { genMulgaTheArtistContentCreator } from "../content-creator";
import { genCampaignEvent } from "../event";
import { genRoyalty } from "../royalties";
import { Campaign } from "../../typed/campaign";
import { SupportedPlatform } from "../../typed/enum/supportedPlatform";

import MulgaBannerImage from "../../temp/images/mulga-bg-image.png";
import MulgaAssetImage from "../../temp/images/mulgakongz-bunny-ears.png";
import MulgaAsset2Image from "../../temp/images/mulga.png";

export const genMulgakongzCampaignData = (x?: Partial<Campaign>): Campaign => ({
  id: gen.datatype.uuid(),
  title: "Mulgakongz",
  slug: "mulgakongz",
  shortDescription: gen.lorem.paragraph(),
  longDescription: gen.lorem.paragraphs(),
  media: {
    campaignBannerUrl: MulgaBannerImage.src,
    campaignCollectionPreviewUrl: MulgaAssetImage.src,
    campaignDetailsUrl: MulgaAsset2Image.src,
    campaignTilePreviewUrl: MulgaAssetImage.src,
    mintingBannerUrl: MulgaBannerImage.src,
    mintingCollectionPreviewUrl: MulgaAssetImage.src,
  },
  floorPrice: gen.datatype.number({ min: 3, max: 5 }),
  currency: SupportedPlatform.ETH,
  totalSupply: gen.datatype.number({ min: 100, max: 10000 }),
  isVerified: true,
  websiteUrl: gen.internet.url(),
  discordUrl: gen.internet.url(),
  twitterUrl: gen.internet.url(),
  contractUrl: gen.internet.url(),
  nominatedCharity: genCarbonClimateChangeSociety(),
  royalties: genRoyalty(),
  creators: [genMulgaTheArtistContentCreator()],
  whitelistMemo: gen.datatype.uuid(),
  event: genCampaignEvent({}),
  ...x,
});
