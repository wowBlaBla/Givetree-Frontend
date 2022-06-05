import React from "react";
import { AppContainer } from "../../components/AppContainer";
import { LoadingContainer } from "../../components/LoadingContainer";
import { useGetAllUsersQuery } from "../../typed";

export const AdminDashboardContainer = () => {
  const { loading: getUsersLoading, data: getUsersData } = useGetAllUsersQuery({
    variables: {
      limit: 100,
    },
  });

  if (getUsersLoading) {
    return <LoadingContainer text="Fetching all partners" />;
  }

  return (
    <AppContainer>
      <div className="w-full text-4xl font-semibold tracking-wide text-center">
        Welcome to GiveTree Partnerships - Admin
      </div>
      {getUsersData?.users.map((u) => (
        <div key={u.id}>{u.aliasName}</div>
      ))}
    </AppContainer>
  );
};
