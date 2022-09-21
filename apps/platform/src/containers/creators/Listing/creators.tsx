import { useQuery } from "@apollo/client";
import { FC } from "react";
import { CardGrid } from "../../../components/CardGrid";
import { CreatorCard } from "../../../components/cards/CreatorCard";
import { ErrorContainer } from "../../../components/ErrorContainer";
import { LoadingContainer } from "../../../components/LoadingContainer";
import { SectionContainer } from "../../../components/SectionContainer";
import { SectionHeader } from "../../../components/SectionHeader";
import { GetHomeDataQuery, GET_HOME_DATA } from "../../home/HomeData";

export const CreatorsContainer:FC = () => {
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
        <SectionContainer>
            <SectionHeader
                mainTitle="Creators"
                subtitle="Discover creators helping to make the world a better place"
                className="mx-auto"
                titleClassName="text-center"
            />
            
            <div className="category text-sm mb-2 dark:text-white">
                <span>Display: </span>
                <span className="ml-1">All</span>
            </div>
            
            <CardGrid>
                {[...data.campaigns, ...data.campaigns].map((campaign, idx) => (
                    <CreatorCard key={idx} campaign={campaign} />
                ))}
            </CardGrid>
        </SectionContainer>
    )
}