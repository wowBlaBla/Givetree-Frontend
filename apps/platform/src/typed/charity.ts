import { Cause } from "./enum/cause";

export interface Charity {
  id: string;
  name: string;
  media: {
    tileUrl: string;
    previewUrl: string;
  };
  causes: Cause[];
}
