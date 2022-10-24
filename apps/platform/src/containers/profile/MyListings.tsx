import { useQuery } from "@apollo/client";
import { FC } from "react";
import { CollectionCard } from "../../components/cards/CollectionCard";
import { ErrorContainer } from "../../components/ErrorContainer";
import { LoadingContainer } from "../../components/LoadingContainer";
import { GetHomeDataQuery, GET_HOME_DATA } from "../home/home.data";

export const MyListings: FC = () => {
  const { data, error, loading } = useQuery<GetHomeDataQuery>(GET_HOME_DATA);

  if (loading) {
    return <LoadingContainer message="Loading collections..." />;
  }

  if (error) {
    return <ErrorContainer message="Failed to load collections." />;
  }

  if (!data) {
    return <ErrorContainer message="Failed to load collections." />;
  }

  return (
    <div className="profile">
      <div className="p-8 max-w-layout-xl">
        <h1 className="font-bold text-black text-[24px] mb-2">My listings</h1>
        <div className="profile-section relative !mt-6 text-black">
          <span className="text-[20px] font-bold">Sales</span>
          <span>Connect your wallet to view your NFT collections</span>
          <div className="flex my-6">
            <input
              readOnly
              type="text"
              className="input input-bordered block w-full outline-none bg-white border-[#5B626C] max-w-[400px]"
            />
            <button className="btn btn-primary btn-connect ml-2">Connect</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...data.campaigns, ...data.campaigns].map((campaign, idx) => (
              <CollectionCard key={idx} campaign={campaign} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
