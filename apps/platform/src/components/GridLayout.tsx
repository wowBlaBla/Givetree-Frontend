import React, { FC, ReactNode } from "react";

interface GridLayoutProps {
  children?: ReactNode;
}

export const GridLayout: FC<GridLayoutProps> = (props) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 mt-6 sm:mt-10">
    {props.children}
  </div>
);
