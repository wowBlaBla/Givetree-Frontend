import React from "react";
import Head from "next/head";

import { SectionTitle } from "../../components/SectionTitle";
import { ImpactPartnerCard } from "../../components/cards/ImpactPartnerCard";
import { PrimaryButton } from "../../components/PrimaryButton";
import { Causes } from "../../typed/enum/causes";
import { GridLayout } from "../../components/GridLayout";

import ClimateImpactPartnerImage from "../../assets/images/impact-partner-climate.png";
import ZambiImage from "../../assets/images/zambi.png";
import OceanCleanupImage from "../../assets/images/ocean-cleanup.png";
import YTIUImage from "../../assets/images/ytiu.png";

export const ImpactPartnerListingsContainer = () => {
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
          <ImpactPartnerCard
            imageAsset={ClimateImpactPartnerImage.src}
            partnerName="Carbon Climate Change Society"
            category={Causes.ClimateAction}
          />
          <ImpactPartnerCard
            imageAsset={ZambiImage.src}
            partnerName="Zambi Native Wildlife Sanctuary"
            category={Causes.WildlifePreservation}
          />
          <ImpactPartnerCard
            imageAsset={OceanCleanupImage.src}
            partnerName="The Ocean Cleanup"
            category={Causes.Environment}
          />
          <ImpactPartnerCard
            imageAsset={YTIUImage.src}
            partnerName="You Turn It Up Charity"
            category={Causes.FightHomelessness}
          />
          <ImpactPartnerCard
            imageAsset={ClimateImpactPartnerImage.src}
            partnerName="Carbon Climate Change Society"
            category={Causes.ClimateAction}
          />
          <ImpactPartnerCard
            imageAsset={ZambiImage.src}
            partnerName="Zambi Native Wildlife Sanctuary"
            category={Causes.WildlifePreservation}
          />
          <ImpactPartnerCard
            imageAsset={OceanCleanupImage.src}
            partnerName="The Ocean Cleanup"
            category={Causes.Environment}
          />
          <ImpactPartnerCard
            imageAsset={YTIUImage.src}
            partnerName="You Turn It Up Charity"
            category={Causes.FightHomelessness}
          />
          <ImpactPartnerCard
            imageAsset={ClimateImpactPartnerImage.src}
            partnerName="Carbon Climate Change Society"
            category={Causes.ClimateAction}
          />
          <ImpactPartnerCard
            imageAsset={ZambiImage.src}
            partnerName="Zambi Native Wildlife Sanctuary"
            category={Causes.WildlifePreservation}
          />
          <ImpactPartnerCard
            imageAsset={OceanCleanupImage.src}
            partnerName="The Ocean Cleanup"
            category={Causes.Environment}
          />
          <ImpactPartnerCard
            imageAsset={YTIUImage.src}
            partnerName="You Turn It Up Charity"
            category={Causes.FightHomelessness}
          />
        </GridLayout>
      </div>
    </div>
  );
};
