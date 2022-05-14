import React, { FC } from "react";
import { SupportedPlatform } from "../typed/enum/supportedPlatform";
import { CurrencyIcon } from "./icons/CurrencyIcon";

interface CurrencyProps {
  amount: number;
  currency: SupportedPlatform;
}

export const Currency: FC<CurrencyProps> = ({ amount, currency }) => (
  <div className="flex items-center space-x-1">
    <span>{amount.toFixed(2)}</span>
    <CurrencyIcon className="w-4- h-4" currency={currency} />
  </div>
);
