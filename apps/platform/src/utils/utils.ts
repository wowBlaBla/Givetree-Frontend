export const checkIsBannerImage = (image?: string) => {
  if (image) {
    if (image.slice(0, 7) === "https://") {
      return true;
    }
  }
  return false;
};
