import React, { FC, ReactNode } from "react";
import { SkeletonTheme } from "react-loading-skeleton";

interface SkeletonContainerProps {
  children: ReactNode;
}

export const SkeletonContainer: FC<SkeletonContainerProps> = ({ children }) => (
  <SkeletonTheme baseColor="#e2e8f0" highlightColor="#f9f9f9">
    {children}
  </SkeletonTheme>
);
