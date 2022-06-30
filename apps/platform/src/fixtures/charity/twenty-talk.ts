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
  shortDescription: `20talk is a registered mental health awareness charity that began in 2018 after the loss of two close friends to suicide. This led a team of young Australians on a journey to find out how they could address the problem.`,
  websiteUrl: "https://20talk.com.au/",
  media: {
    tileUrl: TTLogo.src,
    previewUrl: TTLogo.src,
  },
  causes: [sample(Cause)] as Cause[],
  ...x,
});
