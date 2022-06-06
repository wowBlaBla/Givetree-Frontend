import React, { FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { GiveTreeLogo } from "./GiveTreeLogo";
import { OutlineButton } from "./OutlineButton";
import { PrimaryButton } from "./PrimaryButton";

export const AppHeader: FC = () => {
  const { isAuthenticated, isLoading, loginWithRedirect, logout, user } = useAuth0();

  const handleLogout = () => {
    logout({
      returnTo: window.location.origin,
    });
  };

  return (
    <div className="z-50 flex w-full p-3 bg-brand-black">
      <div className="flex items-center flex-1 space-x-2">
        <GiveTreeLogo className="w-8 h-8" />
        <span className="text-xl font-bold tracking-wider text-white">Partnerships</span>
      </div>

      <div className="flex flex-row items-center justify-center h-10 gap-3">
        {user && <p className="text-gray-50">{user.email}</p>}
        <div>
          {!isLoading && isAuthenticated && (
            <OutlineButton onClick={handleLogout}>Log out</OutlineButton>
          )}

          {!isLoading && !isAuthenticated && (
            <PrimaryButton onClick={loginWithRedirect}>Log In</PrimaryButton>
          )}
        </div>
      </div>
    </div>
  );
};
