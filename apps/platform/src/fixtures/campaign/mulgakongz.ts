import { Campaign } from "../../typed/campaign";
import { faker as gen } from "@faker-js/faker";

import MulgaBgImg from "../../assets/images/mulga-bg-image.png";
import MulgaAssetImg from "../../assets/images/mulgakongz-bunny-ears.png";
import MulgaHatImg from "../../assets/images/mulga.png";
import { SupportedPlatform } from "../../typed/enum/supportedPlatform";
import { genCarbonClimateChangeSociety } from "../charity/carbon-climate-change-society";
import { genRoyalty } from "../royalties";
import { genMulgaTheArtistContentCreator } from "../content-creator";
import { genCampaignEvent } from "../event";

export const genMulgakongzCampaignData = (x?: Partial<Campaign>): Campaign => ({
  id: gen.datatype.uuid(),
  title: "Mulgakongz",
  slug: "mulgakongz",
  shortDescription: gen.lorem.paragraph(),
  longDescription: gen.lorem.paragraphs(),
  media: {
    campaignBannerUrl: MulgaBgImg.src,
    campaignCollectionPreviewUrl: MulgaAssetImg.src,
    campaignDetailsUrl: MulgaHatImg.src,
    campaignTilePreviewUrl: MulgaAssetImg.src,
    mintingBannerUrl: MulgaBgImg.src,
    mintingCollectionPreviewUrl: MulgaAssetImg.src,
  },
  floorPrice: 3,
  currency: SupportedPlatform.ETH,
  totalSupply: 8888,
  startMintDate: gen.date.future(1),
  endMintDate: gen.date.future(1),
  isVerified: true,
  websiteUrl: gen.internet.url(),
  discordUrl: gen.internet.url(),
  twitterUrl: gen.internet.url(),
  contractUrl: gen.internet.url(),
  nominatedCharity: genCarbonClimateChangeSociety(),
  royalties: genRoyalty(),
  creators: [genMulgaTheArtistContentCreator()],
  whitelistMemo: gen.datatype.uuid(),
  event: genCampaignEvent(),
  ...x,
});
