import { Cause } from "./enum/cause";

export interface Charity {
  id: string;
  name: string;
  slug: string;
  description: string;
  media: {
    tileUrl: string;
    previewUrl: string;
  };
  causes: Cause[];
}
