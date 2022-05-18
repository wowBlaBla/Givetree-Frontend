import { RoyaltyDetails, RoyaltyType } from "../../typed/royalty-details";
import { faker as gen } from "@faker-js/faker";

export const genGiveTreeRoyalty = (x?: Partial<RoyaltyDetails>): RoyaltyDetails => ({
  type: RoyaltyType.PlatformFee,
  walletAddress: gen.datatype.uuid(),
  amountInPercentage: 1,
  ...x,
});

export const genCharityRoyalty = (x?: Partial<RoyaltyDetails>): RoyaltyDetails => ({
  type: RoyaltyType.CharityDonation,
  walletAddress: gen.datatype.uuid(),
  amountInPercentage: gen.datatype.number({ min: 1, max: 10 }),
  ...x,
});

export const genContentCreatorRoyalty = (
  x?: Partial<RoyaltyDetails>
): RoyaltyDetails => ({
  type: RoyaltyType.ContentCreator,
  walletAddress: gen.datatype.uuid(),
  amountInPercentage: gen.datatype.number({ min: 1, max: 98 }),
  ...x,
});

interface GenRoyaltyParams {
  platform: RoyaltyDetails;
  charity: RoyaltyDetails;
  contentCreator: RoyaltyDetails;
}

export const genRoyalty = (x?: Partial<GenRoyaltyParams>): RoyaltyDetails[] => {
  const platform = x?.platform || genGiveTreeRoyalty();
  const charity = x?.charity || genCharityRoyalty();
  const contentCreator =
    x?.contentCreator ||
    genContentCreatorRoyalty({
      amountInPercentage: 100 - platform.amountInPercentage - charity.amountInPercentage,
    });

  return [platform, charity, contentCreator];
};
