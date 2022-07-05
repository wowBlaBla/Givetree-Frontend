import { faker as gen } from "@faker-js/faker";
import { Charity } from "../../typed/charity";
import { Cause } from "../../typed/enum/cause";

import WRLogo from "../../temp/images/charities/white-ribbon.png";

export const genWhiteRibbonData = (x?: Partial<Charity>): Charity => ({
  id: gen.datatype.uuid(),
  name: "White Ribbon",
  slug: "white-ribbon",
  shortDescription: `The White Ribbon Campaign is a global movement of men and boys working to end male violence against women and girls.`,
  longDescription: gen.lorem.paragraphs(8),
  isVerified: true,
  websiteUrl: "https://www.whiteribbon.org.au/",
  media: {
    tileUrl: WRLogo.src,
    previewUrl: WRLogo.src,
  },

  causes: [Cause.Humanity],
  ...x,
});
