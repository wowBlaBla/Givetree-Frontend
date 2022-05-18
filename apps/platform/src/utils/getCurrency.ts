import { SupportedPlatform } from "../typed/enum/supportedPlatform";

export const getCurrency = (amount: number) => {
  return `${amount.toFixed(2)}`;
};
