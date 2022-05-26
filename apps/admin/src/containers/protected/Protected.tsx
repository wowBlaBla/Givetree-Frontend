import React, { FC, ReactNode } from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface ProtectedContainerProps {
  children: ReactNode;
}

export const ProtectedContainer: FC<ProtectedContainerProps> = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (!isLoading && !isAuthenticated) {
    loginWithRedirect();

    return null;
  }

  return <div>{children}</div>;
};
