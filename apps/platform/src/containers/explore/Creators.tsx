import { useQuery } from "@apollo/client";
import { FC } from "react";
import { CardGrid } from "../../components/CardGrid";
import { CreatorCard } from "../../components/cards/CreatorCard";
import { ErrorContainer } from "../../components/ErrorContainer";
import { LoadingContainer } from "../../components/LoadingContainer";
import { SectionContainer } from "../../components/SectionContainer";
import { SectionHeader } from "../../components/SectionHeader";
import { GetHomeDataQuery, GET_HOME_DATA } from "../home/HomeData";

export const Creators: FC = () => {
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
    <SectionContainer className="max-w-layout">

      <CardGrid>
        {[...data.campaigns, ...data.campaigns].map((campaign, idx) => (
          <CreatorCard key={idx} campaign={campaign} />
        ))}
      </CardGrid>
    </SectionContainer>
  );
};
