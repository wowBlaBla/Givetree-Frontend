import React, { FC } from "react";

interface StatusBadgeProps {
  status: string;
}

export const StatusBadge: FC<StatusBadgeProps> = ({ status }) => (
  <div className="py-1 px-2 text-xs sm:text-base rounded-md bg-brand-black text-white bg-opacity-70">
    {status}
  </div>
);
