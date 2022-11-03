export enum PlatformRoute {
  Static = "#",
  Home = "/",
  Login = "/login",
  Register = "/register",
  CampaignDetails = "/mints/:campaignName",
  CampaignListing = "/mints",
  CharityListing = "/charities",
  MarketplaceListing = "/marketplace",
  CollectionDetails = "/collection/:collectionName",
  ItemDetails = "/fundraiser/:campaignName",
  CreatorListing = "/creators",
  PublicProfileDetails = "/explore/:category/:name",
  ProfileDetails = "/profile/:category*",
  ExploreAll = "/explore",
  ExploreDetails = "/explore/:category",
  ExploreNFTFundraisers = "/explore/nfts",
  ExploreCreators = "/explore/creators",
  ExploreCharities = "/explore/charities",
  About = "/about/:category",
  AssetDetails = "/asset/:network/:collection/:tokenId",
  Mint = "/mint/:collectionName",
  AuctionDetails = "/auction/:collectionName",
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
    href: "/explore",
  },
  {
    id: "create",
    title: "CREATE",
    href: "/profile/new-nft",
  },
  {
    id: "donate",
    title: "DONATE",
    href: "/",
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
    href: "/about/welcome"
  },
];
