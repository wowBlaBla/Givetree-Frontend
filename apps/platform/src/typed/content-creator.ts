export interface ContentCreator {
  id: string;
  name: string;
  description: string;
  media: {
    previewUrl: string;
  };
  isVerified: boolean;
}
