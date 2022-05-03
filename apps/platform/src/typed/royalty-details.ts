export enum RoyaltyType {
  PlatformFee = "platform_fee",
  ContentCreator = "content_creator",
  CharityDonation = "charity_donation",
}

export interface RoyaltyDetails {
  type: RoyaltyType;
  walletAddress: string;
  amountInPercentage: number;
}
