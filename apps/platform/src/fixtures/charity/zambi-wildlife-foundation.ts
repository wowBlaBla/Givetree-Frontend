import { faker as gen } from "@faker-js/faker";
import { sample } from "lodash";
import { Charity } from "../../typed/charity";
import { Cause } from "../../typed/enum/cause";

import ZambiWildlifeFoundationImage from "../../temp/images/charities/zambi-wildlife-foundation.png";

export const genZambiWildlifeFoundationData = (x?: Partial<Charity>): Charity => ({
  id: gen.datatype.uuid(),
  name: "Zambi Wildlife Foundation",
  slug: "zambi-wildlife-foundation",
  description: gen.lorem.paragraphs(),
  media: {
    tileUrl: ZambiWildlifeFoundationImage.src,
    previewUrl: ZambiWildlifeFoundationImage.src,
  },
  causes: [sample(Cause)] as Cause[],
  ...x,
});
