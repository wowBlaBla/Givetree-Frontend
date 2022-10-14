export enum PlatformRoute {
  Static = "#",
  Home = "/",
  CampaignDetails = "/mints/:campaignName",
  CampaignListing = "/mints",
  CharityDetails = "/charities/:charityName",
  CharityListing = "/charities",
  MarketplaceListing = "/marketplace",
  CollectionDetails = "/collection/:collectionName",
  ItemDetails = "/fundraiser/:campaignName",
  CreatorListing = "/creators",
  CreatorDetails = "/creators/:creatorName",
  ProfileDetails = "/profile/:category",
  ExploreDetails = "/explore/:category",
  ExploreNFTFundraisers = "/explore/fundraisers",
  ExploreCreators = "/explore/creators",
  ExploreCharities = "/explore/charities",
  About = "/about/:category",
}

export interface AppHeaderNavLink {
  id: string;
  title: string;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
  childrens?: Array<AppHeaderNavLink>;
}

export const MenuList: AppHeaderNavLink[] = [
  {
    id: "home",
    title: "HOME",
    href: PlatformRoute.Home,
  },
  {
    id: "explore",
    title: "EXPLORE",
    childrens: [
      { id: "nfts", title: "NFTs", href: "" },
      { id: "collections", title: "Collections", href: "" },
      { id: "mint-page", title: "Mint pages", href: "" },
      { id: "creators", title: "Creators", href: "/explore/creators" },
      { id: "charities", title: "Charities", href: "/explore/charities" },
      { id: "donors", title: "Donors", href: "/explore/donors" },
      { id: "leaderboards", title: "Leaderboards", href: "" },
    ],
    href: "/explore/creators",
  },
  {
    id: "create",
    title: "CREATE",
    childrens: [
      { id: "create-nft", title: "Create NFT", href: "" },
      { id: "create-nft-fundraiser", title: "Create NFT Fundraiser", href: "" },
    ],
  },
  {
    id: "donate",
    title: "DONATE",
    href: "",
  },
  {
    id: "about",
    title: "ABOUT",
    childrens: [
      { id: "welcome", title: "Welcome", href: "/about/welcome" },
      { id: "for-creators", title: "For creators", href: "" },
      { id: "for-charities", title: "For charities", href: "" },
      { id: "for-donors", title: "For donors", href: "" },
      { id: "our-story", title: "Our story", href: "" },
      { id: "our-blog", title: "Our Blog", href: "" },
      { id: "our-social", title: "Our socials", href: "" },
      { id: "temrs-of-use", title: "Terms of use", href: "" },
      { id: "privacy-policy", title: "Privacy policy", href: "" },
    ],
  },
];
