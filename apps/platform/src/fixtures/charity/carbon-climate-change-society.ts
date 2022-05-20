import { faker as gen } from "@faker-js/faker";
import { sample } from "lodash";
import { Charity } from "../../typed/charity";
import { Cause } from "../../typed/enum/cause";

import CharityImg from "../../temp/images/charities/carbon-climate-change-society.png";

export const genCarbonClimateChangeSocietyData = (x?: Partial<Charity>): Charity => ({
  id: gen.datatype.uuid(),
  name: "Carbon Climate Change Society",
  slug: "carbon-climate-change-society",
  media: {
    tileUrl: CharityImg.src,
    previewUrl: CharityImg.src,
  },
  causes: [sample(Cause)] as Cause[],
  ...x,
});
