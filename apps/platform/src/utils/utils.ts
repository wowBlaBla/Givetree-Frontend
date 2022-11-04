export const checkIsBannerImage = (image?: string) => {
  if (image) {
    if (
      image.slice(0, 7) === "http://" ||
      image.slice(0, 8) === "https://" ||
      image.slice(0, 12) === "blob:http://" ||
      image.slice(0, 13) === "blob:https://"
    ) {
      return true;
    }
  }
  return false;
};
