import MulgaBgImg from "../../../assets/images/mulga-bg-image.png";
import MulgaTheArtistImg from "../../../assets/images/mulga-the-artist.png";
import MulgaAssetImg from "../../../assets/images/mulgakongz-bunny-ears.png";
import MulgaHatImg from "../../../assets/images/mulga.png";
import CharityImg from "../../../assets/images/impact-partner-climate.png";

export const mulgakongz = {
  id: 1,
  title: "Mulgakongz",
  shortDescription:
    "10 million years ago, a group of 8,888 mysterious gorilla like animals first appeared on earth. Found commonly on the beaches, jungles and islands of Australia, they weren’t just your regular Gorilla.",
  longDescription: "",
  backgroundImageUrl: MulgaBgImg.src,
  assetImageUrl: MulgaAssetImg,
  collectionImageUrl: MulgaHatImg,
  isVerified: true,
  symbol: "MKZ",
  isExplicitContent: false,
  floorPrice: 2,
  creator: {
    name: "MulgaTheArtist",
    description:
      "Mulga is Joel Moore, renowned Australian street artist, freelance illustrator, muralist, published author and designer of the much loved Mulga product range. Known for his unique Australian creations and signature style of intricate line work and bright colours, Mulga’s creations grace walls and objects across the world.",
    isVerified: true,
    avatarUrl: MulgaTheArtistImg,
  },
  totalSupply: 8888,
  whitelistStartDate: new Date("May 6, 2022 12:00:00"),
  whitelistEndDate: new Date("May 10, 2022 12:00:00"),
  publicStartDate: new Date("May 10, 2022 12:00:00"),
  publicEndDate: new Date("June 10, 2022 12:00:00"),
  websiteUrl: "https://mulgakongz.com/",
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
