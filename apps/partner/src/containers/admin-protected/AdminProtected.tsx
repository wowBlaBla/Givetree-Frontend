import React, { FC, ReactNode, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useGetUserDetailsLazyQuery } from "../../typed";
import { AuthRole } from "../../typed/authRole";
import { toast } from "react-toastify";
import { LoadingContainer } from "../../components/LoadingContainer";

interface AdminProtectedContainerProps {
  children: ReactNode;
}

export const AdminProtectedContainer: FC<AdminProtectedContainerProps> = ({
  children,
}) => {
  const { isAuthenticated, isLoading, loginWithRedirect, user } = useAuth0();
  const [getUserDetails, { data: userData, loading: userLoading, error: userError }] =
    useGetUserDetailsLazyQuery();

  if (!isLoading && !isAuthenticated) {
    loginWithRedirect();

    return null;
  }

  if (userData && userData.users_by_pk?.role !== AuthRole.admin) {
    toast.warning("This account does not have admin access");
    loginWithRedirect();

    return null;
  }

  useEffect(() => {
    if (user) {
      const fetchUserDetails = async () => {
        await getUserDetails({
          variables: {
            userId: user?.sub ?? "",
          },
        });
      };

      fetchUserDetails();
    }
  }, [user]);

  if (userLoading || isLoading) {
    return <LoadingContainer text="Logging into partnership portal" />;
  }

  if (userError) {
    toast.error("Failed to login, please try again");
    loginWithRedirect();
  }

  return <div>{children}</div>;
};
