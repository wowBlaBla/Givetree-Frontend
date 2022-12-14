import { Cause } from "./enum/cause";

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
}

export interface CharityProperties {
  foundedAt?: string;
  employee?: number;
  founders?: string;
  phone?: string;
  causes?: string[];
}
