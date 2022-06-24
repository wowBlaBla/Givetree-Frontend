import React, { FC } from "react";
import { Cause } from "../../typed/enum/cause";
import { LeafIcon } from "../icons/LeafIcon";
import { BaseTile } from "./BaseTile";

interface CausesTileProps {
  causes: Cause[];
  description: string;
}

export const CausesTile: FC<CausesTileProps> = ({ description, causes }) => (
  <BaseTile className="border-[2px] border-green-600 bg-white text-brand-black">
    <LeafIcon className="float-right w-8 h-8 fill-current" />

    <p className="text-lg font-semibold">{description}</p>

    <div className="flex space-x-1 w-auto mt-3">
      {causes.map((cause, idx) => (
        <div
          key={idx}
          className="py-1 px-3 rounded-full border-2 border-green-600 text-xs lg:text-sm font-semibold text-center"
        >
          {cause}
        </div>
      ))}
    </div>
  </BaseTile>
);
