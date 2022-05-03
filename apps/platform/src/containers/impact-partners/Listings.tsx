import React from "react";
import Head from "next/head";

import { SectionTitle } from "../../components/SectionTitle";
import { CharityCard } from "../../components/cards/CharityCard";
import { PrimaryButton } from "../../components/PrimaryButton";
import { Causes } from "../../typed/enum/cause";
import { GridLayout } from "../../components/GridLayout";

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

        <GridLayout>
          <CharityCard
            imageAsset={ClimateCharityImage.src}
            partnerName="Carbon Climate Change Society"
            category={Causes.ClimateAction}
          />
          <CharityCard
            imageAsset={ZambiImage.src}
            partnerName="Zambi Native Wildlife Sanctuary"
            category={Causes.WildlifePreservation}
          />
          <CharityCard
            imageAsset={OceanCleanupImage.src}
            partnerName="The Ocean Cleanup"
            category={Causes.Environment}
          />
          <CharityCard
            imageAsset={YTIUImage.src}
            partnerName="You Turn It Up Charity"
            category={Causes.FightHomelessness}
          />
          <CharityCard
            imageAsset={ClimateCharityImage.src}
            partnerName="Carbon Climate Change Society"
            category={Causes.ClimateAction}
          />
          <CharityCard
            imageAsset={ZambiImage.src}
            partnerName="Zambi Native Wildlife Sanctuary"
            category={Causes.WildlifePreservation}
          />
          <CharityCard
            imageAsset={OceanCleanupImage.src}
            partnerName="The Ocean Cleanup"
            category={Causes.Environment}
          />
          <CharityCard
            imageAsset={YTIUImage.src}
            partnerName="You Turn It Up Charity"
            category={Causes.FightHomelessness}
          />
          <CharityCard
            imageAsset={ClimateCharityImage.src}
            partnerName="Carbon Climate Change Society"
            category={Causes.ClimateAction}
          />
          <CharityCard
            imageAsset={ZambiImage.src}
            partnerName="Zambi Native Wildlife Sanctuary"
            category={Causes.WildlifePreservation}
          />
          <CharityCard
            imageAsset={OceanCleanupImage.src}
            partnerName="The Ocean Cleanup"
            category={Causes.Environment}
          />
          <CharityCard
            imageAsset={YTIUImage.src}
            partnerName="You Turn It Up Charity"
            category={Causes.FightHomelessness}
          />
        </GridLayout>
      </div>
    </div>
  );
};
