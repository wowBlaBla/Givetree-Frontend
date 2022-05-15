import React from "react";
import Head from "next/head";

import { SectionTitle } from "../../components/SectionTitle";
import { CharityCard } from "../../components/cards/CharityCard";
import { PrimaryButton } from "../../components/PrimaryButton";
import { Cause } from "../../typed/enum/cause";
import { CardGrid } from "../../components/CardGrid";

import ClimateCharityImage from "../../assets/images/impact-partner-climate.png";
import ZambiImage from "../../assets/images/zambi.png";
import OceanCleanupImage from "../../assets/images/ocean-cleanup.png";
import YTIUImage from "../../assets/images/ytiu.png";

export const CharityListingsContainer = () => {
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
          <CharityCard
            imageAsset={ClimateCharityImage.src}
            name="Carbon Climate Change Society"
            cause={Cause.ClimateAction}
          />
          <CharityCard
            imageAsset={ZambiImage.src}
            name="Zambi Native Wildlife Sanctuary"
            cause={Cause.WildlifePreservation}
          />
          <CharityCard
            imageAsset={OceanCleanupImage.src}
            name="The Ocean Cleanup"
            cause={Cause.Environment}
          />
          <CharityCard
            imageAsset={YTIUImage.src}
            name="You Turn It Up Charity"
            cause={Cause.FightHomelessness}
          />
        </CardGrid>
      </div>
    </div>
  );
};
