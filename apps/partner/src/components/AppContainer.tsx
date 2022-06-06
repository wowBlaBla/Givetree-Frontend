import React, { FC, ReactNode } from "react";

interface AppContainerProps {
  children: ReactNode;
  isLoading?: boolean;
}

export const AppContainer: FC<AppContainerProps> = ({ children }) => (
  <div className="flex flex-1 flex-col w-full min-h-full mx-auto py-10 sm:py-24 px-3">
    {children}
  </div>
);
