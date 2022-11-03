export const checkIsBannerImage = (image?: string) => {
  if (image) {
    if (image.slice(0, 8) === "https://") {
      return true;
    }
  }
  return false;
};
