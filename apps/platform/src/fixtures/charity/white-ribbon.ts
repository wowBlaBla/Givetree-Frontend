import { faker as gen } from "@faker-js/faker";
import { sample } from "lodash";
import { Charity } from "../../typed/charity";
import { Cause } from "../../typed/enum/cause";

import WRLogo from "../../temp/images/charities/the-ocean-cleanup.png";

export const genWhiteRibbonData = (x?: Partial<Charity>): Charity => ({
  id: gen.datatype.uuid(),
  name: "White Ribbon",
  slug: "white-ribbon",
  shortDescription: `The White Ribbon Campaign is a global movement of men and boys working to end male violence against women and girls.`,
  description: gen.lorem.paragraphs(11),
  media: {
    tileUrl: WRLogo.src,
    previewUrl: WRLogo.src,
  },
  causes: [sample(Cause)] as Cause[],
  ...x,
});
