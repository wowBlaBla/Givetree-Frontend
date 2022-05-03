import CreatorAvatarImg from "../../../assets/images/genopets-creator.png";
import AssetImg from "../../../assets/images/genopets-asset.png";
import CollectionImg from "../../../assets/images/genopets-collection.png";
import CharityImg from "../../../assets/images/impact-partner-climate.png";

export const genopets = {
  id: 2,
  title: "Genopets",
  shortDescription:
    "Genopets is the world's first free NFT game with a Move-to-Earn feature, making it fun and rewarding for an active lifestyle. ",
  longDescription: "",
  backgroundImageUrl: AssetImg,
  assetImageUrl: AssetImg,
  collectionImageUrl: CollectionImg,
  isVerified: true,
  symbol: "GP",
  isExplicitContent: false,
  floorPrice: 2,
  creator: {
    name: "Genopets",
    description:
      "Inspired by Worms and Angry Birds, this new crazy videogame lets you challenge your friends with a barrage of carrots, exhausts and sperm whales!",
    isVerified: true,
    avatarUrl: CreatorAvatarImg,
  },
  totalSupply: 4557,
  whitelistStartDate: new Date("April 28, 2022 12:00:00"),
  whitelistEndDate: new Date("May 2, 2022 12:00:00"),
  publicStartDate: new Date("May 2, 2022 12:00:00"),
  publicEndDate: new Date("June 2, 2022 12:00:00"),
  websiteUrl: "#",
  discordUrl: "#",
  twitterUrl: "#",
  contractUrl: "#",
  mintingUrl: "#",
  impactPartner: {
    id: 1,
    avatarUrl: CharityImg,
    name: "Carbon Climate Change Society",
    causes: ["Climate Crisis", "Substantial materials"],
    distributionPercentage: 3,
  },
};
