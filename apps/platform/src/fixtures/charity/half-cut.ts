import { faker as gen } from "@faker-js/faker";
import { sample } from "lodash";
import { Charity } from "../../typed/charity";
import { Cause } from "../../typed/enum/cause";

import HCLogo from "../../temp/images/charities/half-cut.jpg";

export const genHalfCutData = (x?: Partial<Charity>): Charity => ({
  id: gen.datatype.uuid(),
  name: "Half Cut",
  slug: "half-cut",
  description: gen.lorem.paragraphs(12),
  websiteUrl: "https://go.halfcut.org/",
  media: {
    tileUrl: HCLogo.src,
    previewUrl: HCLogo.src,
  },
  causes: [sample(Cause)] as Cause[],
  ...x,
});
