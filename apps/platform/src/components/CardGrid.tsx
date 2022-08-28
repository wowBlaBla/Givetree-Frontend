import React, { FC, ReactNode } from "react";

interface CardGridProps {
  children?: ReactNode;
}

export const CardGrid: FC<CardGridProps> = ({ children }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16 sm:gap-11 sm:mt-8 mb-4">
    {children}
  </div>
);
