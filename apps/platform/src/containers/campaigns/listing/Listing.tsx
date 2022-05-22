import React from "react";
import { useQuery } from "@apollo/client";
import Head from "next/head";

import { GetCampaignListingDataQuery, GET_CAMPAIGN_LISTING_DATA } from "./ListingData";

import { PlatformRoute } from "../../../configs/routes";
import { CampaignCard } from "../../../components/cards/CampaignCard";
import { CardGrid } from "../../../components/CardGrid";
import { Carousel } from "../../../components/Carousel";
import { MainBanner } from "../../../components/MainBanner";
import { SectionHeader } from "../../../components/SectionHeader";

import MulgaBannerImage from "../../../temp/images/campaigns/mulgakongz-bg.png";

export const CampaignListingContainer = (): JSX.Element => {
  const { data, loading, error } = useQuery<GetCampaignListingDataQuery>(
    GET_CAMPAIGN_LISTING_DATA
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
        <title>GiveTree - Expore all mints</title>
      </Head>

      <SectionHeader
        mainTitle="Explore all Mints"
        subtitle="Discover current and upcoming mints for new NFT collections"
      />

      <Carousel>
        <MainBanner
          backgroundAsset="/videos/genopets-bg.mp4"
          title="Genopets By Genopets Official"
          subtitle="3% of every single NFT minted is donated to charity"
          ctaLink1={PlatformRoute.CampaignListing}
          ctaLink1Text="Go to launchpad"
        />

        <MainBanner
          backgroundAsset={MulgaBannerImage.src}
          title="Mulgakongz by MulgaTheArtist"
          subtitle="4% of every single NFT minted is donated to Kids Learn Art"
          ctaLink1={PlatformRoute.CampaignListing}
          ctaLink1Text="Go to launchpad"
        />
      </Carousel>

      <div className="flex relative flex-col flex-1 w-full max-w-screen-3xl mx-auto mt-12 sm:mt-16 p-5">
        <CardGrid>
          {data.campaigns.map((campaign, idx) => (
            <CampaignCard key={idx} campaign={campaign} />
          ))}
        </CardGrid>
      </div>
    </div>
  );
};
