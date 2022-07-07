import React from "react";
import { AppContainer } from "../../components/AppContainer";
import { LoadingContainer } from "../../components/LoadingContainer";
import { UserTypeBadge } from "../../components/UserTypeBadge";
import { useGetAllUsersQuery } from "../../typed";
import { PartnerType } from "../../typed/partnerType";
import { formatTabularDate } from "../../utils/dates";

export const AdminDashboardContainer = () => {
  const { loading: getUsersLoading, data: getUsersData } = useGetAllUsersQuery({
    variables: {
      limit: 100,
    },
  });

  if (getUsersLoading) {
    return <LoadingContainer message="Fetching all partners" />;
  }

  return (
    <AppContainer>
      <div className="w-full text-4xl font-semibold tracking-wide text-center">
        Welcome to GiveTree Partnerships - Admin
      </div>

      <div className="mt-10 overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Type</th>
              <th>Contact name</th>
              <th>Email</th>
              <th>Contact number</th>
              <th>Charity name</th>
              <th>Artist name</th>
              <th>Exp. release date</th>
              <th>Status</th>
              <th>ETH wallet</th>
              <th>SOL wallet</th>
              <th>Created at</th>
            </tr>
          </thead>
          <tbody>
            {getUsersData?.users.map((u, key) => (
              <tr key={u.id}>
                <th>{key}</th>
                <td>
                  <UserTypeBadge type={u.userType as PartnerType} />
                </td>
                <td>
                  {u.firstName} {u.lastName}
                </td>
                <td>{u.contactEmail ?? u.email}</td>
                <td>{u.contactNumber ?? "-"}</td>
                <td>{u.charityName ?? "-"}</td>
                <td>{u.aliasName ?? "-"}</td>
                <td>{formatTabularDate(u.expectedReleaseDate, false)}</td>
                <td>{u.status || "None"}</td>
                <td>{u.ethWalletAddress || "None"}</td>
                <td>{u.solWalletAddress || "None"}</td>
                <td>{formatTabularDate(u.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppContainer>
  );
};
