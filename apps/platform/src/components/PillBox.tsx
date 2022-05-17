import React, { FC } from "react";
import { CurrencyIcon } from "./icons/CurrencyIcon";
import { SupportedPlatform } from "../typed/enum/supportedPlatform";

interface PillBoxProps {
  currency?: SupportedPlatform;
  title: string;
  value: string | number;
}

export const PillBox: FC<PillBoxProps> = ({ currency, title, value }) => (
  <div className="grid grid-cols-2 w-full max-w-xs border border-gray-800 rounded-lg shadow-md text-xs xl:text-sm overflow-hidden">
    <div className="py-1 bg-gray-800 text-white text-center">{title}</div>
    <div className="flex justify-center items-center space-x-1 py-1">
      <span className="text-gray-800 font-medium">{value}</span>
      {currency && <CurrencyIcon className="w-4 h-4" currency={currency} />}
    </div>
  </div>
);
