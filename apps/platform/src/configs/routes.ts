export enum PlatformRoute {
  Static = "#",
  Home = "/",
  CampaignDetails = "/mints/:campaignName",
  CampaignListing = "/mints",
  CharityDetails = "/charities/:charityName",
  CharityListing = "/charities",
  MarketplaceListing = "/marketplace",
  CreatorsListing = "/creators",
  CollectionDetails = "/collection/:collectionName",
  ItemDetails = "/fundraiser/:campaignName",
  FundraiserDetails = "/fundraisers",
  CreatorListing = "/creators",
  CreatorDetails = "/creators/:creatorName",
  ProfileDetails = "/profile/:role/:category",
  CreateDetails = "/profile/creator/mint",
  About = "/about/:category",
};

export interface AppHeaderNavLink {
  title: string;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
  childrens?: Array<AppHeaderNavLink>;
}

export const MenuList: AppHeaderNavLink[] = [
  {
    title: "HOME",
    href: PlatformRoute.Home,
  },
  {
    title: "EXPLORE",
    childrens: [
      { title: "NFT Fundraisers", href: "/fundraisers" },
      { title: "Creators", href: "/creators" },
      { title: "Charities", href: "/charities" },
      { title: "Donors", href: "" },
    ],
  },
  {
    title: "CREATE",
    childrens: [
      { title: "Create NFT", href: "" },
      { title: "Create NFT Fundraiser", href: "" },
    ],
  },
  {
    title: "DONATE",
    href: "",
  },
  {
    title: "ABOUT",
    childrens: [
      { title: "Welcome", href: "/about/welcome" },
      { title: "For creators", href: "" },
      { title: "For charities", href: "" },
      { title: "For donors", href: "" },
      { title: "Our story", href: "" },
      { title: "Our Blog", href: "" },
      { title: "Our socials", href: "" },
      { title: "Terms of use", href: "" },
      { title: "Privacy policy", href: "" },
    ],
  },
];
