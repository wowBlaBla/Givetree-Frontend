import React, { FC, ReactNode } from "react";
import { ProtectedContainer } from "./Protected";
import { AuthToken } from "../../utils/auth";

interface ProtectedAppContainerProps {
  children: ReactNode;
  onLoginSuccess?: (authToken: AuthToken) => void;
}

export const ProtectedAppContainer: FC<ProtectedAppContainerProps> = ({
  children,
  onLoginSuccess,
}) => (
  <ProtectedContainer onLoginSuccess={onLoginSuccess}>
    <div>{children}</div>
  </ProtectedContainer>
);
