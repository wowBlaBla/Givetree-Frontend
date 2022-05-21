import React, { FC } from "react";
import { Cause } from "../../typed/enum/cause";
import { LeafIcon } from "../icons/LeafIcon";
import { BaseTile } from "./BaseTile";

interface CausesTileProps {
  royaltyPercentage: number | undefined;
  causes: Cause[];
}

export const CausesTile: FC<CausesTileProps> = ({ royaltyPercentage, causes }) => (
  <BaseTile className="bg-green-500 text-white">
    <LeafIcon className="float-right w-8 h-8 fill-current" />

    <p className="text-lg font-semibold">
      {royaltyPercentage}% of sale price goes towards these causes:
    </p>

    <div className="flex space-x-1 w-auto mt-3">
      {causes.map((cause, idx) => (
        <div
          key={idx}
          className="py-1 px-3 rounded-full border-2 border-white text-xs lg:text-sm font-semibold text-center"
        >
          {cause}
        </div>
      ))}
    </div>
  </BaseTile>
);
