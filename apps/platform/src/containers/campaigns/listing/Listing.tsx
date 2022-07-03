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
import { SectionContainer } from "../../../components/SectionContainer";

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
        className="my-6 sm:my-8"
        mainTitle="Explore all Mints"
        subtitle="Discover current and upcoming mints for new NFT collections"
        textCenter
      />

      <Carousel>
        <MainBanner
          backgroundAsset={MulgaBannerImage.src}
          title="Mulgakongz by MulgaTheArtist"
          subtitle="4% of every single NFT minted is donated to Kids Learn Art"
          ctaLink={PlatformRoute.CampaignListing}
          ctaLinkText="Learn more"
        />

        <MainBanner
          backgroundAsset="/videos/genopets-bg.mp4"
          title="Genopets By Genopets Official"
          subtitle="3% of every single NFT minted is donated to charity"
          ctaLink={PlatformRoute.CampaignListing}
          ctaLinkText="Learn more"
        />
      </Carousel>

      <SectionContainer className="mt-12">
        <CardGrid>
          {data.campaigns.map((campaign, idx) => (
            <CampaignCard key={idx} campaign={campaign} />
          ))}
        </CardGrid>
      </SectionContainer>
    </div>
  );
};
