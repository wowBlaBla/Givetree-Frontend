export interface OnboardingFormValues {
  aliasName: string;
  charityAbn: string;
  charityAddress: string;
  charityName: string;
  charityAcceptDirectDonations: boolean;
  charityAllowProxyFundraiser: boolean;
  charityApprovalBeforeGoLive: boolean;
  charityCreateFundraiser: boolean;
  charityEntityType: string;
  contactNumber: string;
  country: string;
  cryptoActivityRating: number;
  cryptoConfidenceRating: number;
  cryptoExperienceRating: number;
  cryptoOffRampStrategy: string;
  description: string;
  discordUrl: string;
  email: string;
  contactEmail: string;
  ethWalletAddress: string;
  expectedReleaseDate: string;
  firstName: string;
  isArtworkReady: boolean;
  isPhoneValid?: boolean;
  lastName: string;
  logoUrl: string;
  maticWalletAddress: string;
  primaryContactAddress: string;
  solWalletAddress: string;
  twitterUrl: string;
  userType: string;
  websiteUrl: string;
}

export interface OnboardingFormProps {
  initialValues: OnboardingFormValues;
  onSubmit: (values: OnboardingFormValues) => void;
}
