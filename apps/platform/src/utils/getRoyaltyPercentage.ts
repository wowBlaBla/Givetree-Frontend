import { RoyaltyDetails, RoyaltyType } from "../typed/royalty-details";

export const getRoyaltyPercentage = (
  royalties: RoyaltyDetails[],
  royaltyType: RoyaltyType
) => {
  const royalty = royalties?.find((royalty) => royalty.type === royaltyType);

  return royalty?.amountInPercentage;
};
