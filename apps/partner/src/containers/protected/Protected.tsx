import React, { FC, ReactNode, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useGetUserDetailsLazyQuery } from "../../typed";
import { useLocation } from "react-router-dom";
import { AuthRole } from "../../typed/authRole";
import { LoadingContainer } from "../../components/LoadingContainer";
import { toast } from "react-toastify";

interface ProtectedContainerProps {
  children: ReactNode;
}

export const ProtectedContainer: FC<ProtectedContainerProps> = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect, user } = useAuth0();
  const [displayAdminBanner, setDisplayAdminBanner] = useState(false);
  const [getUserDetails, { data: userData, loading: userLoading, error: userError }] =
    useGetUserDetailsLazyQuery({
      fetchPolicy: "network-only",
    });
  const location = useLocation();

  useEffect(() => {
    if (user) {
      const fetchUserDetails = async () => {
        await getUserDetails({
          variables: {
            email: user?.email ?? "",
          },
        });
      };

      fetchUserDetails();
    }
  }, [user]);

  useEffect(() => {
    if (
      userData &&
      userData.users_by_pk?.role === AuthRole.admin &&
      !location.pathname.includes("admin")
    ) {
      setDisplayAdminBanner(true);
    }
  }, [userData]);

  if (!isLoading && !isAuthenticated) {
    loginWithRedirect();

    return null;
  }

  if (userLoading) {
    return <LoadingContainer message="Logging into partnership portal" />;
  }

  if (userError) {
    toast.error("Failed to login, please try again");
    loginWithRedirect();
  }

  return (
    <div>
      {displayAdminBanner && (
        <div className="p-3 font-medium text-center bg-orange-500">
          <a className="text-white" href="/admin/dashboard">
            Go to admin dashboard
          </a>
        </div>
      )}
      {children}
    </div>
  );
};
