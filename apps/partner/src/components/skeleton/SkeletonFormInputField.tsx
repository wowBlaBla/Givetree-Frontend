import React, { FC } from "react";
import Skeleton from "react-loading-skeleton";

interface SkeletonFormInputFieldProps {
  textarea?: boolean;
}

export const SkeletonFormInputField: FC<SkeletonFormInputFieldProps> = ({ textarea }) => {
  const height = textarea ? 150 : 50;

  return (
    <div className="flex flex-col space-y-3 text-gray-200">
      <Skeleton height={20} />
      <Skeleton height={height} />
    </div>
  );
};
