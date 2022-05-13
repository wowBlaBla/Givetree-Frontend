import React, { FC } from "react";
import { Cause } from "../../typed/enum/cause";
import { LeafIcon } from "../icons/LeafIcon";
import { BaseTile } from "./BaseTile";

interface CausesTileProps {
  charityRoyaltyPercentage: number | undefined;
  causes: Cause[];
}

export const CausesTile: FC<CausesTileProps> = ({ charityRoyaltyPercentage, causes }) => (
  <BaseTile className="bg-white border-2 border-green-400">
    <LeafIcon className="float-right w-8 h-8 text-brand-green-active fill-current" />

    <p className="text-lg font-semibold">
      Amazingly {charityRoyaltyPercentage}% of sale price goes towards these causes:
    </p>

    <div className="flex w-auto mt-3">
      {causes.map((cause, idx) => (
        <div
          key={idx}
          className="m-1 py-2 px-3 rounded-full border-2 text-green-600 border-brand-green-active text-xs lg:text-sm font-semibold text-center "
        >
          {Cause[cause as keyof typeof Cause]}
        </div>
      ))}
    </div>
  </BaseTile>
);
