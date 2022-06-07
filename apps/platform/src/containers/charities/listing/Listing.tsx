import React from "react";
import { useQuery } from "@apollo/client";
import Head from "next/head";

import { GetCharityListingDataQuery, GET_CHARITY_LISTING_DATA } from "./ListingData";

import { CardGrid } from "../../../components/CardGrid";
import { CharityCard } from "../../../components/cards/CharityCard";
import { SectionHeader } from "../../../components/SectionHeader";

export const CharityListingContainer = () => {
  const { data, loading, error } = useQuery<GetCharityListingDataQuery>(
    GET_CHARITY_LISTING_DATA
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data) {
    return <div>No Campaigns Found</div>;
  }

  return (
    <div>
      <Head>
        <title>GiveTree - Impact partners</title>
      </Head>

      <SectionHeader
        className="mt-6 sm:mt-8"
        mainTitle="Impact Partners"
        subtitle="Charities that help make the world a better place"
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
