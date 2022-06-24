import { faker as gen } from "@faker-js/faker";
import { sample } from "lodash";
import { Charity } from "../../typed/charity";
import { Cause } from "../../typed/enum/cause";

import GOLogo from "../../temp/images/charities/gamers-outreach.png";

export const genGamersOutreachData = (x?: Partial<Charity>): Charity => ({
  id: gen.datatype.uuid(),
  name: "Gamers Outreach",
  slug: "gamers-outreach",
  description: gen.lorem.paragraphs(12),
  websiteUrl: "https://gamersoutreach.org/",
  media: {
    tileUrl: GOLogo.src,
    previewUrl: GOLogo.src,
  },
  causes: [sample(Cause)] as Cause[],
  custom: {
    styles: {
      tileBgColor: "#000",
    },
  },
  ...x,
});
