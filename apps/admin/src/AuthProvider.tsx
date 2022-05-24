import React, { FC, ReactNode, useEffect, useState } from "react";
import { GIVETREE_ADMIN_AUTH_KEY } from "./configs/constants";
import { AuthContext } from "./AuthContext";
import { getAuthToken } from "./utils/auth";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const authToken = getAuthToken(GIVETREE_ADMIN_AUTH_KEY);

    if (authToken) {
      setAuthenticated(true);
    }
  }, []);

  return <AuthContext.Provider value={authenticated}>{children}</AuthContext.Provider>;
};
