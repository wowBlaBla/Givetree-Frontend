import MulgaBgImg from "../../../assets/images/mulga-bg-image.png";
import MulgaTheArtistImg from "../../../assets/images/mulga-the-artist.png";
import MulgaAssetImg from "../../../assets/images/mulgakongz-bunny-ears.png";
import MulgaHatImg from "../../../assets/images/mulgakongz-banana-hat.png";
import ImpactPartnerImg from "../../../assets/images/impact-partner-climate.png";

export const mulgakongz = {
  id: 1,
  title: "Mulgakongz",
  shortDescription: "",
  longDescription: "",
  backgroundImageUrl: MulgaBgImg.src,
  assetImageUrl: MulgaAssetImg,
  collectionImageUrl: MulgaHatImg,
  isVerified: true,
  symbol: "MKZ",
  isExplicitContent: false,
  startingMintPrice: 2,
  creator: {
    name: "MulgaTheArtist",
    description:
      "Inspired by Worms and Angry Birds, this new crazy videogame lets you challenge your friends with a barrage of carrots, exhausts and sperm whales!",
    isVerified: true,
    avatarUrl: MulgaTheArtistImg,
  },
  totalSupplyCount: 8888,
  mintingStartDate: "",
  mintingEndDate: "",
  websiteUrl: "#",
  discordUrl: "#",
  twitterUrl: "#",
  contractUrl: "#",
  mintingUrl: "#",
  impactPartner: {
    id: 1,
    avatarUrl: ImpactPartnerImg,
    name: "Carbon Climate Change Society",
    causes: ["Climate Crisis", "Substantial materials"],
    distributionPercentage: 3,
  },
};
