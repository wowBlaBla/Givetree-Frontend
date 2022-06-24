import { faker as gen } from "@faker-js/faker";
import { sample } from "lodash";
import { Charity } from "../../typed/charity";
import { Cause } from "../../typed/enum/cause";

import TTLogo from "../../temp/images/charities/twenty-talk.jpeg";

export const gen20TalkData = (x?: Partial<Charity>): Charity => ({
  id: gen.datatype.uuid(),
  name: "20Talk",
  slug: "20-talk",
  description: gen.lorem.paragraphs(11),
  websiteUrl: "https://20talk.com.au/",
  media: {
    tileUrl: TTLogo.src,
    previewUrl: TTLogo.src,
  },
  causes: [sample(Cause)] as Cause[],
  ...x,
});
