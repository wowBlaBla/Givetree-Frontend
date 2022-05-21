import { faker as gen } from "@faker-js/faker";
import { sample } from "lodash";
import { Charity } from "../../typed/charity";
import { Cause } from "../../typed/enum/cause";

import TheOceanCleanupImage from "../../temp/images/charities/the-ocean-cleanup.png";

export const genTheOceanCleanupData = (x?: Partial<Charity>): Charity => ({
  id: gen.datatype.uuid(),
  name: "The Ocean Cleanup",
  slug: "the-ocean-cleanup",
  media: {
    tileUrl: TheOceanCleanupImage.src,
    previewUrl: TheOceanCleanupImage.src,
  },
  causes: [sample(Cause)] as Cause[],
  ...x,
});
