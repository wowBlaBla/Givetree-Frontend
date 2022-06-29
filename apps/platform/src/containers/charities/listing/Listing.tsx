import React from "react";
import { useQuery } from "@apollo/client";
import Head from "next/head";

import { GetCharityListingDataQuery, GET_CHARITY_LISTING_DATA } from "./ListingData";

import { CardGrid } from "../../../components/CardGrid";
import { CharityCard } from "../../../components/cards/CharityCard";
import { SectionHeader } from "../../../components/SectionHeader";
import { LoadingContainer } from "../../../components/LoadingContainer";
import { ErrorContainer } from "../../../components/ErrorContainer";

export const CharityListingContainer = () => {
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

      <SectionHeader
        className="mt-6 sm:mt-8"
        mainTitle="Charities"
        subtitle="Charities that help make the world a better place"
        textCenter
      />

      <div className="flex flex-col flex-1 w-full max-w-screen-3xl mx-auto p-5">
        <CardGrid>
          {data.charities.map((charity, idx) => (
            <CharityCard key={idx} charity={charity} />
          ))}
        </CardGrid>
      </div>
    </div>
  );
};
