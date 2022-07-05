import { faker as gen } from "@faker-js/faker";
import { Charity } from "../../typed/charity";
import { Cause } from "../../typed/enum/cause";
import FNPWLogoLogo from "../../temp/images/charities/foundation-for-national-parks-and-wildlife.jpeg";

export const genFoundationForNationalParksAndWildlifeData = (
  x?: Partial<Charity>
): Charity => ({
  id: gen.datatype.uuid(),
  name: "Foundation for National Parks & Wildlife",
  slug: "foundation-for-national-parks-and-wildlife",
  shortDescription: `The Foundation for National Parks & Wildlife is an Australian not-for-profit, non-governmental organisation that was incorporated on 29 June 1970.`,
  longDescription: gen.lorem.paragraphs(8),
  isVerified: true,
  websiteUrl: "https://fnpw.org.au/",
  media: {
    tileUrl: FNPWLogoLogo.src,
    previewUrl: FNPWLogoLogo.src,
  },
  causes: [Cause.WildlifePreservation, Cause.Humanity],
  ...x,
});
