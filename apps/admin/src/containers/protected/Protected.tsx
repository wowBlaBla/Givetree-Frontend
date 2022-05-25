import { useAuth0 } from "@auth0/auth0-react";
import React, { FC, ReactNode, useEffect } from "react";
import { GIVETREE_ADMIN_AUTH_KEY } from "../../configs/constants";
import { setAuthToken } from "../../utils/auth";

interface ProtectedContainerProps {
  children: ReactNode;
}

export const ProtectedContainer: FC<ProtectedContainerProps> = ({ children }) => {
  const { getAccessTokenSilently, isAuthenticated, isLoading, loginWithRedirect } =
    useAuth0();

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently();
        const date = new Date();
        const expiryDate = date.setDate(date.getDate() + 14);

        if (isAuthenticated) {
          setAuthToken(GIVETREE_ADMIN_AUTH_KEY, {
            token: token,
            expiry: expiryDate,
          });
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, [isAuthenticated, getAccessTokenSilently]);

  if (!isLoading && !isAuthenticated) {
    loginWithRedirect();

    return null;
  }

  return <div>{children}</div>;
};
