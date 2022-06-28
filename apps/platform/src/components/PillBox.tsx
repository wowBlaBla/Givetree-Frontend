import React, { FC } from "react";
import { CurrencyIcon } from "./icons/CurrencyIcon";
import { SupportedPlatform } from "../typed/enum/supportedPlatform";

interface PillBoxProps {
  currency?: SupportedPlatform;
  title: string;
  value: string | number;
}

export const PillBox: FC<PillBoxProps> = ({ currency, title, value }) => (
  <div className="grid w-full max-w-xs grid-cols-2 overflow-hidden text-xs border border-gray-300 divide-x divide-gray-300 rounded-lg shadow-sm xl:text-sm">
    <div className="py-1 text-center text-brand-orange">{title}</div>
    <div className="flex items-center justify-center py-1 space-x-1 ">
      <span className="font-medium text-brand-black">{value}</span>
      {currency && <CurrencyIcon className="w-4 h-4" currency={currency} />}
    </div>
  </div>
);
