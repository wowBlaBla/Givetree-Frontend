import { faker as gen } from "@faker-js/faker";
import { Charity } from "../../typed/charity";
import { Cause } from "../../typed/enum/cause";

import GOLogo from "../../temp/images/charities/gamers-outreach.png";

export const genGamersOutreachData = (x?: Partial<Charity>): Charity => ({
  id: gen.datatype.uuid(),
  name: "Gamers Outreach",
  slug: "gamers-outreach",
  shortDescription: `Gamers Outreach Foundation (stylized as Gamers Outreach) is a 501(c)(3) nonprofit organization that provides entertainment to hospitalized families through video games. The organization was started in 2007 in response to a canceled Halo tournament. Present-day, Gamers Outreach oversees devices and services to help hospitals manage video game content. The organization works to help families cope with treatment inside hospitals while reinforcing healthcare staff. According to its website, Gamers Outreach programs enable as many as 3 million gaming experiences[1] each year for patients across hundreds of healthcare facilities.`,
  longDescription: gen.lorem.paragraphs(8),
  isVerified: true,
  websiteUrl: "https://gamersoutreach.org/",
  media: {
    tileUrl: GOLogo.src,
    previewUrl: GOLogo.src,
  },
  causes: [Cause.HospitalizedKids, Cause.Entertainment, Cause.Gaming],
  ...x,
});
