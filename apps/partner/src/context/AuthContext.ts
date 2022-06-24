import { createContext } from "react";
import { AuthRole } from "../typed/authRole";

export interface AuthContextProps {
  authRole: AuthRole;
}

export const AuthContext = createContext<AuthContextProps>({
  authRole: AuthRole.user,
});
