import React from "react";
import { gql, useQuery } from "@apollo/client";
import Head from "next/head";

import { CardGrid } from "../../components/CardGrid";
import { CharityCard } from "../../components/cards/CharityCard";
import { SectionHeader } from "../../components/SectionHeader";
import { LoadingContainer } from "../../components/LoadingContainer";
import { ErrorContainer } from "../../components/ErrorContainer";
import { SectionContainer } from "../../components/SectionContainer";

import { Charity } from "../../typed/charity";

export interface GetCharityListingDataQuery {
  charities: Charity[];
}

export const GET_CHARITY_LISTING_DATA = gql`
  query GetCampaigns {
    charities @client
  }
`;

export const Charities = () => {
  const { data, loading, error } = useQuery<GetCharityListingDataQuery>(
    GET_CHARITY_LISTING_DATA
  );

  if (loading) {
    return <LoadingContainer message="Loading charities..." />;
  }

  if (error) {
    return <ErrorContainer message={error.message} />;
  }

  if (!data) {
    return <ErrorContainer message="Could not load charities" />;
  }

  return (
    <div>
      <Head>
        <title>GiveTree - Charities</title>
      </Head>

      <SectionContainer>

        <CardGrid>
          {[...data.charities, ...data.charities, ...data.charities].map(
            (charity, idx) => (
              <CharityCard key={idx} charity={charity} />
            )
          )}
        </CardGrid>
      </SectionContainer>
    </div>
  );
};
