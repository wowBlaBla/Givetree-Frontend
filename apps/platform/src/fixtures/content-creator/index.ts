import { ContentCreator } from "../../typed/content-creator";
import MulgaTheArtistImg from "../../temp/images/mulga-the-artist.png";
import GenopetsPreviewImg from "../../temp/images/genopets-creator.png";

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

export const genGenopetsContentCreator = (
  x?: Partial<ContentCreator>
): ContentCreator => ({
  id: gen.datatype.uuid(),
  name: "Genopets Official",
  description: gen.lorem.paragraphs(2),
  media: {
    previewUrl: GenopetsPreviewImg.src,
  },
  isVerified: true,
  ...x,
});
