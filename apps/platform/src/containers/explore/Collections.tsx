import { useQuery } from "@apollo/client";
import { FC } from "react";
import { CardGrid } from "../../components/CardGrid";
import { FundraiserCard } from "../../components/cards/FundraiserCard";
import { ErrorContainer } from "../../components/ErrorContainer";
import { LoadingContainer } from "../../components/LoadingContainer";
import { SectionContainer } from "../../components/SectionContainer";
import { GetHomeDataQuery, GET_HOME_DATA } from "../home/home.data";

export const Collections: FC = () => {
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
      
      <CardGrid>
        {[...data.campaigns, ...data.campaigns].map((campaign, idx) => (
          <FundraiserCard key={idx} campaign={campaign} />
        ))}
      </CardGrid>
    </SectionContainer>
  );
};
