import { Cause } from "./enum/cause";

interface WalletAddresses {
  address: string;
}

export interface Charity {
  id: string;
  name: string;
  slug: string;
  longDescription: string;
  shortDescription: string;
  websiteUrl?: string;
  media: {
    tileUrl: string;
    previewUrl: string;
  };
  causes: Cause[];
  isVerified: boolean;
  userName?: string;
  profileImage?: string;
  title?: string;
  location?: string;
  bio?: string;
  banner?: string;
  walletAddresses?: WalletAddresses[]
}

export interface CharityProperties {
  foundedAt?: string;
  employee?: number;
  founders?: string;
  businessNumber?: string;
  causes?: string;
}
