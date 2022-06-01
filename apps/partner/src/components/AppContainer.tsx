import React, { FC, ReactNode } from "react";

interface AppContainerProps {
  children: ReactNode;
}

export const AppContainer: FC<AppContainerProps> = ({ children }) => (
  <div className="flex relative flex-1 flex-col w-full min-h-full mx-auto mt-3 sm:mt-10 py-10 px-3">
    {children}
  </div>
);
