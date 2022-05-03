import { Charity } from "../../../typed/charity";
import { sample } from "lodash";
import { Cause } from "../../../typed/enum/cause";
import { faker as gen } from "@faker-js/faker";

import CharityImg from "../../../assets/images/impact-partner-climate.png";

export const genCarbonClimateChangeSociety = (x?: Partial<Charity>): Charity => ({
  id: gen.datatype.uuid(),
  name: "Carbon Climate Change Society",
  media: {
    tileUrl: CharityImg.src,
    previewUrl: CharityImg.src,
  },
  causes: [sample(Object.keys(Cause))] as Cause[],
  ...x,
});
