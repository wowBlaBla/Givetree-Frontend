import React, { FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { GiveTreeLogo } from "./GiveTreeLogo";
import { OutlineButton } from "./OutlineButton";
import { PrimaryButton } from "./PrimaryButton";
import { unsetToken } from "../utils/auth";
import { GIVETREE_ADMIN_AUTH_KEY } from "../configs/constants";

export const AppHeader: FC = () => {
  const { isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();

  const handleLogout = () => {
    unsetToken(GIVETREE_ADMIN_AUTH_KEY);

    logout({
      returnTo: window.location.origin,
    });
  };

  return (
    <div className="grid grid-cols-2 w-full bg-brand-black p-3 z-50">
      <div className="flex items-center space-x-2">
        <GiveTreeLogo className="w-8 h-8" />
        <span className="text-white text-xl font-bold tracking-wider">Partnerships</span>
      </div>

      <div className="flex flex-row-reverse w-full h-12">
        {<OutlineButton onClick={handleLogout}>Log out</OutlineButton>}

        {!isLoading && !isAuthenticated && (
          <PrimaryButton onClick={loginWithRedirect}>Log In</PrimaryButton>
        )}
      </div>
    </div>
  );
};
