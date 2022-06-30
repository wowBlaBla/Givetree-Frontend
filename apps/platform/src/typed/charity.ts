import { Cause } from "./enum/cause";

export interface Charity {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  websiteUrl?: string;
  media: {
    tileUrl: string;
    previewUrl: string;
  };
  causes: Cause[];
  custom?: {
    styles?: {
      tileBgColor?: string;
    };
  };
}
