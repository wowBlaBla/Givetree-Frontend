import { useQuery } from "@apollo/client";
import { FC } from "react";
import { GetHomeDataQuery, GET_HOME_DATA } from "../containers/home/HomeData";
import { CampaignCard } from "./cards/CampaignCard"
import { ErrorContainer } from "./ErrorContainer";
import { LoadingContainer } from "./LoadingContainer";

export const Fundraisers:FC = () => {
    
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
        <div className="max-w-screen-2xl mx-auto w-full md:px-20 px-4 my-10">
            <div className="grid gap-3 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                {[...data.campaigns, ...data.campaigns].map((campaign, idx) => (
                    <CampaignCard key={idx} campaign={campaign} />
                ))}
            </div>
        </div>
    )
}