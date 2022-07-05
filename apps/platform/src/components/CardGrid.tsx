import React, { FC, ReactNode } from "react";

interface CardGridProps {
  children?: ReactNode;
}

export const CardGrid: FC<CardGridProps> = ({ children }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 mt-6 sm:mt-8">
    {children}
  </div>
);
