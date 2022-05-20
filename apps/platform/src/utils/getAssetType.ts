export enum AssetType {
  Video = "video",
  Image = "image",
}
export const getAssetType = (asset: string) => {
  if (asset?.includes(".mp4")) {
    return AssetType.Video;
  }

  return AssetType.Image;
};
