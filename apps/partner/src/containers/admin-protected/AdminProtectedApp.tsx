import React, { FC, ReactNode } from "react";
import { AdminProtectedContainer } from "./AdminProtected";

interface AdminProtectedAppContainerProps {
  children: ReactNode;
}

export const AdminProtectedAppContainer: FC<AdminProtectedAppContainerProps> = ({
  children,
}) => (
  <AdminProtectedContainer>
    <div>{children}</div>
  </AdminProtectedContainer>
);
