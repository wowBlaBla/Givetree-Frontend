import { faker as gen } from "@faker-js/faker";
import { ContentCreator } from "../../typed/content-creator";
import MulgaTheArtistCreatorImage from "../../temp/images/campaigns/mulga-the-artist-creator.png";
import GenopetsCreatorImage from "../../temp/images/campaigns/genopets-creator.png";
import RengaFactoryCreatorImage from "../../temp/images/campaigns/renga-factory.gif";
import OmgkirbyCreatorImage from "../../temp/images/campaigns/omgkirby-creator.png";

export const genMulgaTheArtistContentCreator = (
  x?: Partial<ContentCreator>
): ContentCreator => ({
  id: gen.datatype.uuid(),
  name: "Mulga The Artist",
  description: gen.lorem.paragraphs(2),
  media: {
    previewUrl: MulgaTheArtistCreatorImage.src,
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
    previewUrl: GenopetsCreatorImage.src,
  },
  isVerified: true,
  ...x,
});

export const genRengaFactoryContentCreator = (
  x?: Partial<ContentCreator>
): ContentCreator => ({
  id: gen.datatype.uuid(),
  name: "RENGA-Factory",
  description: gen.lorem.paragraphs(2),
  media: {
    previewUrl: RengaFactoryCreatorImage.src,
  },
  isVerified: true,
  ...x,
});

export const genOmgkirbyContentCreator = (
  x?: Partial<ContentCreator>
): ContentCreator => ({
  id: gen.datatype.uuid(),
  name: "omgkirby",
  description: gen.lorem.paragraphs(2),
  media: {
    previewUrl: OmgkirbyCreatorImage.src,
  },
  isVerified: true,
  ...x,
});
