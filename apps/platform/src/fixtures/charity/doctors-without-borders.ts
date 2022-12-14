import { faker as gen } from "@faker-js/faker";
import { Charity } from "../../typed/charity";
import { Cause } from "../../typed/enum/cause";
import DWBLogo from "../../temp/images/charities/doctors-without-borders.jpg";

export const genDoctorsWithoutBordersData = (x?: Partial<Charity>): Charity => ({
  id: gen.datatype.uuid(),
  name: "Doctors without Borders Australia",
  slug: "doctors-without-borders",
  shortDescription: `Médecins Sans Frontières, or Doctors Without Borders in English, is an international humanitarian medical non-governmental organisation of French origin best known for its projects in conflict zones and in countries affected by endemic diseases.`,
  longDescription: gen.lorem.paragraphs(8),
  websiteUrl: "https://www.msf.org/",
  media: {
    tileUrl: DWBLogo.src,
    previewUrl: DWBLogo.src,
  },
  isVerified: true,
  causes: [Cause.EmergencyAid, Cause.Humanity],
  ...x,
});
