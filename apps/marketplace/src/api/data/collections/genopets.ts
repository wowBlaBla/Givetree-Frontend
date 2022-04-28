import CreatorAvatarImg from "../../../assets/images/genopets-creator.png";
import AssetImg from "../../../assets/images/genopets-asset.png";
import CollectionImg from "../../../assets/images/genopets-collection.png";
import ImpactPartnerImg from "../../../assets/images/impact-partner-climate.png";

export const genopets = {
  id: 2,
  title: "Genopets",
  shortDescription: "",
  longDescription: "",
  backgroundImageUrl: AssetImg,
  assetImageUrl: AssetImg,
  collectionImageUrl: CollectionImg,
  isVerified: true,
  symbol: "GP",
  isExplicitContent: false,
  startingMintPrice: 2,
  creator: {
    name: "Genopets",
    description:
      "Inspired by Worms and Angry Birds, this new crazy videogame lets you challenge your friends with a barrage of carrots, exhausts and sperm whales!",
    isVerified: true,
    avatarUrl: CreatorAvatarImg,
  },
  totalSupplyCount: 4557,
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
