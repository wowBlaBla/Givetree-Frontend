import React from "react";
import Head from "next/head";
import ClimateImpactPartnerImage from "../../assets/images/impact-partner-climate.png";
import { SectionTitle } from "../../components/SectionTitle";
import { ImpactPartnerCard } from "../../components/cards/ImpactPartnerCard";
import { PrimaryButton } from "../../components/PrimaryButton";
import { Causes } from "../../typed/enum/causes";
import { GridLayout } from "../../components/GridLayout";

export const ImpactPartnerListingsContainer = () => {
  return (
    <div className="w-full mx-auto">
      <Head>
        <title>GiveTree - Impact partners</title>
      </Head>

      <div className="flex relative flex-col flex-1 w-full max-w-screen-3xl mx-auto mt-6 sm:mt-12 p-5">
        <SectionTitle center>Impact Partners</SectionTitle>

        {/* 
        <div className="flex justify-center mt-5">
          <PrimaryButton className="w-auto">Register now</PrimaryButton>
        </div> */}

        <GridLayout>
          <ImpactPartnerCard
            imageAsset={ClimateImpactPartnerImage.src}
            partnerName="Carbon Climate Change Society"
            category={Causes.ClimateAction}
          />
          <ImpactPartnerCard
            imageAsset={ClimateImpactPartnerImage.src}
            partnerName="Carbon Climate Change Society"
            category={Causes.ClimateAction}
          />
          <ImpactPartnerCard
            imageAsset={ClimateImpactPartnerImage.src}
            partnerName="Carbon Climate Change Society"
            category={Causes.ClimateAction}
          />
          <ImpactPartnerCard
            imageAsset={ClimateImpactPartnerImage.src}
            partnerName="Carbon Climate Change Society"
            category={Causes.ClimateAction}
          />
          <ImpactPartnerCard
            imageAsset={ClimateImpactPartnerImage.src}
            partnerName="Carbon Climate Change Society"
            category={Causes.ClimateAction}
          />
          <ImpactPartnerCard
            imageAsset={ClimateImpactPartnerImage.src}
            partnerName="Carbon Climate Change Society"
            category={Causes.ClimateAction}
          />
          <ImpactPartnerCard
            imageAsset={ClimateImpactPartnerImage.src}
            partnerName="Carbon Climate Change Society"
            category={Causes.ClimateAction}
          />
          <ImpactPartnerCard
            imageAsset={ClimateImpactPartnerImage.src}
            partnerName="Carbon Climate Change Society"
            category={Causes.ClimateAction}
          />
          <ImpactPartnerCard
            imageAsset={ClimateImpactPartnerImage.src}
            partnerName="Carbon Climate Change Society"
            category={Causes.ClimateAction}
          />
          <ImpactPartnerCard
            imageAsset={ClimateImpactPartnerImage.src}
            partnerName="Carbon Climate Change Society"
            category={Causes.ClimateAction}
          />
          <ImpactPartnerCard
            imageAsset={ClimateImpactPartnerImage.src}
            partnerName="Carbon Climate Change Society"
            category={Causes.ClimateAction}
          />
          <ImpactPartnerCard
            imageAsset={ClimateImpactPartnerImage.src}
            partnerName="Carbon Climate Change Society"
            category={Causes.ClimateAction}
          />
        </GridLayout>
      </div>
    </div>
  );
};
