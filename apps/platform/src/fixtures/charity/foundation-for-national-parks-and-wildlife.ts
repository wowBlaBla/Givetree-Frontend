import { faker as gen } from "@faker-js/faker";
import { sample } from "lodash";
import { Charity } from "../../typed/charity";
import { Cause } from "../../typed/enum/cause";

import FNPWLogoLogo from "../../temp/images/charities/foundation-for-national-parks-and-wildlife.jpeg";

export const genFoundationForNationalParksAndWildlifeData = (
  x?: Partial<Charity>
): Charity => ({
  id: gen.datatype.uuid(),
  name: "Foundation for National Parks & Wildlife",
  slug: "foundation-for-national-parks-and-wildlife",
  description: gen.lorem.paragraphs(12),
  isVerified: true,
  websiteUrl: "https://fnpw.org.au/",
  media: {
    tileUrl: FNPWLogoLogo.src,
    previewUrl: FNPWLogoLogo.src,
  },
  causes: [sample(Cause)] as Cause[],
  ...x,
});
