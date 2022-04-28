import React, { FC } from "react";
import { LeafIcon } from "../icons/LeafIcon";
import { BaseTile } from "./BaseTile";

interface CausesTileProps {
  distributionPercentage: number;
  causes: string[];
}

export const CausesTile: FC<CausesTileProps> = (props) => (
  <BaseTile className="relative bg-white border-2 border-green-400">
    <div className="absolute top-0 right-0 p-3">
      <LeafIcon className="w-8 h-8 text-brand-green-active fill-current" />
    </div>
    <div className="text-lg font-semibold">
      <p>
        Amazingly {props.distributionPercentage}% of sale price goes towards these causes:
      </p>
    </div>

    <div className="flex w-auto space-x-3 mt-4">
      {props.causes.map((cause, idx) => (
        <div
          key={idx}
          className="text-sm sm:text-base font-semibold text-center rounded-md border-2 text-green-600 border-brand-green-active py-2 px-3"
        >
          {cause}
        </div>
      ))}
    </div>
  </BaseTile>
);
