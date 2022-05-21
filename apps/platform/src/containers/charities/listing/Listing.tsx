import React from "react";
import Head from "next/head";

import { CardGrid } from "../../../components/CardGrid";
import { CharityCard } from "../../../components/cards/CharityCard";
import { PrimaryButton } from "../../../components/PrimaryButton";
import { SectionTitle } from "../../../components/SectionTitle";
import { useQuery } from "@apollo/client";
import { GetCharityListingDataQuery, GET_CHARITY_LISTING_DATA } from "./ListingData";

export const CharityListingContainer = () => {
  const { data, loading, error } = useQuery<GetCharityListingDataQuery>(
    GET_CHARITY_LISTING_DATA
  );

  return (
    <div className="w-full mx-auto">
      <Head>
        <title>GiveTree - Impact partners</title>
      </Head>

      <div className="flex relative flex-col flex-1 w-full max-w-screen-3xl mx-auto mt-6 sm:mt-12 p-5">
        <SectionTitle>Impact Partners</SectionTitle>

        <div className="flex justify-center mt-5">
          <PrimaryButton className="w-auto">Register now</PrimaryButton>
        </div>

        <CardGrid>
          {data?.charities.map((charity, idx) => (
            <CharityCard
              key={idx}
              name={charity.name}
              imageAsset={charity.media.tileUrl}
              cause={charity.causes[0]}
            />
          ))}
        </CardGrid>
      </div>
    </div>
  );
};
