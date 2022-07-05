import { faker as gen } from "@faker-js/faker";
import { Charity } from "../../typed/charity";
import { Cause } from "../../typed/enum/cause";
import HCLogo from "../../temp/images/charities/half-cut.jpg";

export const genHalfCutData = (x?: Partial<Charity>): Charity => ({
  id: gen.datatype.uuid(),
  name: "Half Cut",
  slug: "half-cut",
  shortDescription: `Half the world's rainforests have been destroyed. We encourage people to wear the "halfcut look" and help us raise money for rainforest protection!`,
  longDescription: gen.lorem.paragraphs(8),
  isVerified: true,
  websiteUrl: "https://go.halfcut.org/",
  media: {
    tileUrl: HCLogo.src,
    previewUrl: HCLogo.src,
  },
  causes: [Cause.RainforrestProtection, Cause.CleanAir],
  ...x,
});
