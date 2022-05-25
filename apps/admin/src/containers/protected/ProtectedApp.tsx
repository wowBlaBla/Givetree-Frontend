import React, { FC, ReactNode } from "react";
import { ProtectedContainer } from "./Protected";

interface ProtectedAppContainerProps {
  children: ReactNode;
}

export const ProtectedAppContainer: FC<ProtectedAppContainerProps> = ({ children }) => (
  <ProtectedContainer>
    <div>{children}</div>
  </ProtectedContainer>
);
