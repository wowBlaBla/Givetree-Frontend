import { faker as gen } from "@faker-js/faker";
import { sample } from "lodash";
import { Charity } from "../../typed/charity";
import { Cause } from "../../typed/enum/cause";

import WorldWildlifeFundImage from "../../temp/images/charities/world-wildlife-fund.jpeg";

export const genWorldWildlifeFundData = (x?: Partial<Charity>): Charity => ({
  id: gen.datatype.uuid(),
  name: "World Wildlife Fund",
  slug: "world-wildlife-fund",
  media: {
    tileUrl: WorldWildlifeFundImage.src,
    previewUrl: WorldWildlifeFundImage.src,
  },
  causes: [sample(Cause)] as Cause[],
  ...x,
});
