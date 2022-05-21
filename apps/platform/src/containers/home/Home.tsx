import React from "react";
import { gql, useQuery } from "@apollo/client";
import Head from "next/head";

import { PlatformRoute } from "../../configs/routes";
import { CardGrid } from "../../components/CardGrid";
import { CampaignCard } from "../../components/cards/CampaignCard";
import { Carousel } from "../../components/Carousel";
import { MainBanner } from "../../components/MainBanner";
import { OutlineLink } from "../../components/OutlineButton";
import { SectionTitle } from "../../components/SectionTitle";
import { Campaign } from "../../typed/campaign";

import MulgaBannerImage from "./../../temp/images/campaigns/mulgakongz-bg.png";

interface GetCampaignsDataQuery {
  campaigns: Campaign[];
}

const GET_CAMPAIGNS_DATA = gql`
  query GetCampaigns {
    campaigns @client
  }
`;

export const HomeContainer = () => {
  const { data, loading } = useQuery<GetCampaignsDataQuery>(GET_CAMPAIGNS_DATA);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No Campaigns Found</div>;
  }

  return (
    <div className="w-full mx-auto">
      <Head>
        <title>GiveTree</title>
        <meta name="description" content="This is the GiveTree NFT Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative">
        <Carousel>
          <MainBanner
            backgroundAsset="/videos/genopets-bg.mp4"
            title="Genopets By Genopets Official"
            subtitle="3% of every single NFT minted is donated to charity"
            ctaLink1={`${PlatformRoute.CampaignListing}`}
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
      </div>

      <div className="flex relative flex-col flex-1 w-full max-w-screen-3xl mx-auto mt-12 sm:mt-16 p-5">
        <SectionTitle>Upcoming Collections</SectionTitle>

        <CardGrid>
          {data.campaigns.map((campaign, idx) => (
            <CampaignCard key={idx} campaign={campaign} />
          ))}
        </CardGrid>

        <div className="flex justify-center mt-8">
          <OutlineLink to={PlatformRoute.CampaignListing}>
            View More Collections
          </OutlineLink>
        </div>
      </div>
    </div>
  );
};
