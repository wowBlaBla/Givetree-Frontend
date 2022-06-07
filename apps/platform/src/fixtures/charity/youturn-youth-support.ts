import { faker as gen } from "@faker-js/faker";
import { sample } from "lodash";
import { Charity } from "../../typed/charity";
import { Cause } from "../../typed/enum/cause";

import YouturnYouthSupportImage from "../../temp/images/charities/youturn-youth-support.png";

export const genYouturnYouthSupportData = (x?: Partial<Charity>): Charity => ({
  id: gen.datatype.uuid(),
  name: "Youturn Youth Support",
  slug: "youturn-youth-support",
  description: gen.lorem.paragraphs(10),
  media: {
    tileUrl: YouturnYouthSupportImage.src,
    previewUrl: YouturnYouthSupportImage.src,
  },
  causes: [sample(Cause)] as Cause[],
  ...x,
});
