import React, { FC, ReactNode, useContext } from "react";
import { LoginFormContainer } from "../login/LoginForm";
import { GIVETREE_ADMIN_AUTH_KEY } from "../../configs/constants";
import { AdminRoute } from "../../configs/routes";
import { AuthContext } from "../../AuthContext";
import { AuthToken, setAuthToken } from "../../utils/auth";

interface ProtectedContainerProps {
  children: ReactNode;
  onLoginSuccess?: (authToken: AuthToken) => void;
}

export const ProtectedContainer: FC<ProtectedContainerProps> = ({
  children,
  onLoginSuccess,
}) => {
  const authenticated = useContext(AuthContext);

  const onAuthenticated = (authToken: AuthToken): void => {
    if (authenticated) {
      return;
    }

    setAuthToken(GIVETREE_ADMIN_AUTH_KEY, authToken);

    if (onLoginSuccess) {
      onLoginSuccess(authToken);
    }

    if (AdminRoute.LOGIN || AdminRoute.Home) {
      return;
    }
  };

  if (!authenticated) {
    return <LoginFormContainer onAuthenticated={onAuthenticated} />;
  }

  return <div>{children}</div>;
};
