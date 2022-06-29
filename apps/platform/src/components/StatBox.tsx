import React, { FC } from "react";
import { CurrencyIcon } from "./icons/CurrencyIcon";
import { SupportedPlatform } from "../typed/enum/supportedPlatform";

interface StatBoxProps {
  currency?: SupportedPlatform;
  title: string;
  value: string | number;
}

export const StatBox: FC<StatBoxProps> = ({ currency, title, value }) => (
  <div className="grid">
    <div className="flex flex-row items-center text-lg">
      {currency && <CurrencyIcon className="w-4 h-4 mr-1" currency={currency} />}
      <span className="font-semibold text-brand-black">{value}</span>
    </div>
    <div className="text-xs text-brand-orange">{title}</div>
  </div>
);
