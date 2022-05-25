import React, { FC, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { GiveTreeLogo } from "./GiveTreeLogo";
import { OutlineButton } from "./OutlineButton";
import { PrimaryButton } from "./PrimaryButton";

export const AppHeader: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();

  useEffect(() => {
    if (isLoading) {
      return setLoading(false);
    }

    setLoading(false);
  }, [isLoading]);

  const handleLogin = () => loginWithRedirect();

  const handleLogout = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <div className="grid grid-cols-2 w-full bg-brand-black p-3 z-50">
      <div className="flex items-center space-x-2">
        <GiveTreeLogo className="w-8 h-8" />
        <span className="text-white text-xl font-bold tracking-wider">Partnerships</span>
      </div>

      <div className="flex flex-row-reverse w-full h-12">
        {!loading && isAuthenticated && (
          <OutlineButton onClick={handleLogout}>Log out</OutlineButton>
        )}

        {!loading && !isAuthenticated && (
          <PrimaryButton onClick={handleLogin}>Log In</PrimaryButton>
        )}
      </div>
    </div>
  );
};
