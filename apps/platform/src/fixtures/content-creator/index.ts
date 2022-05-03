import { ContentCreator } from "../../typed/content-creator";
import MulgaTheArtistImg from "../../../assets/images/mulga-the-artist.png";

import { faker as gen } from "@faker-js/faker";

export const genMulgaTheArtistContentCreator = (
  x?: Partial<ContentCreator>
): ContentCreator => ({
  id: gen.datatype.uuid(),
  name: "Mulga The Artist",
  description: gen.lorem.paragraphs(2),
  media: {
    previewUrl: MulgaTheArtistImg.src,
  },
  isVerified: true,
  ...x,
});
