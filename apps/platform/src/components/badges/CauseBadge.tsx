import React, { FC } from "react";

export interface CauseBadgeProps {
  cause: string;
}

export const CauseBadge: FC<CauseBadgeProps> = ({ cause }) => (
  <p className="rounded-lg py-0.5 px-2 border border-green-600 bg-green-200 text-green-600 text-center text-xs sm:text-sm">
    {cause}
  </p>
);
