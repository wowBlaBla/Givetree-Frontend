import React from "react";
import { useQuery } from "@apollo/client";
import Head from "next/head";

import { GetHomeDataQuery, GET_HOME_DATA } from "./HomeData";
import { PlatformRoute } from "../../configs/routes";
import { CharityCard } from "../../components/cards/CharityCard";
import { SectionContainer } from "../../components/SectionContainer";
import { SectionHeader } from "../../components/SectionHeader";
// import { BackgroundAsset } from "../../components/BackgroundAsset";
import { CardGrid } from "../../components/CardGrid";
import { CampaignCard } from "../../components/cards/CampaignCard";
import { Carousel } from "../../components/Carousel";
import { LoadingContainer } from "../../components/LoadingContainer";
import { ErrorContainer } from "../../components/ErrorContainer";
import { MainBanner } from "../../components/MainBanner";
import { OutlineLink } from "../../components/OutlineButton";
import { SectionTitle } from "../../components/SectionTitle";

import MulgaBannerImage from "./../../temp/images/campaigns/mulgakongz-bg.png";
// import GiveTreeImage from "../../assets/images/givetree-bg-image.png";

export const HomeContainer = () => {
  const { data, error, loading } = useQuery<GetHomeDataQuery>(GET_HOME_DATA);

  if (loading) {
    return <LoadingContainer message="Loading collections..." />;
  }

  if (error) {
    return <ErrorContainer message="Failed to load collections." />;
  }

  if (!data) {
    return <ErrorContainer message="Failed to load collections." />;
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

      <div className="mt-12 sm:mt-16">
        {/* TODO: Update image */}
        {/* <SectionContainer>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-12">
            <div className="flex flex-1 items-center max-w-xl mx-auto">
              <SectionHeader
                mainTitle="Donate & Fundraise with NFTs, Cryptocurrency & Games (The Metaverse)"
                subtitle="Support the causes & organisations you love with direct donations of cryptocurrency NFT fundraisers and play to give games in the Metaverse."
              />
            </div>

            <div className="flex relative justify-center w-full max-w-96 min-h-86 mx-auto">
              <BackgroundAsset asset={GiveTreeImage.src} className="rounded-xl" />
            </div>
          </div>
        </SectionContainer> */}

        <SectionContainer>
          <SectionTitle className="text-center">Upcoming Collections</SectionTitle>
          <CardGrid>
            {data.campaigns.slice(0, 4).map((campaign, idx) => (
              <CampaignCard key={idx} campaign={campaign} />
            ))}
          </CardGrid>

          <div className="flex justify-center mt-8">
            <OutlineLink href={PlatformRoute.CampaignListing}>
              View More Collections
            </OutlineLink>
          </div>
        </SectionContainer>

        <SectionContainer>
          <SectionHeader
            mainTitle="Our Impact Partners"
            subtitle="Donate cryptocurrency directly to charity or create a NFT Fundraiser"
          />
          <CardGrid>
            {data.charities.slice(0, 4).map((charity, idx) => (
              <CharityCard key={idx} charity={charity} />
            ))}
          </CardGrid>

          <div className="flex justify-center mt-8">
            <OutlineLink href={PlatformRoute.CharityListing}>
              View More Charities
            </OutlineLink>
          </div>
        </SectionContainer>

        {/* TODO: Update image */}
        {/* 
        <SectionContainer>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-12">
            <div className="flex relative justify-center w-full max-w-96 min-h-86 mx-auto">
              <BackgroundAsset asset={GiveTreeImage.src} className="rounded-xl" />
            </div>

            <div className="flex flex-1 items-center max-w-xl mx-auto">
              <SectionHeader
                mainTitle="Create & sell digital assets in the GiveTree metaverse"
                subtitle="GiveTree enables creators and charities to create digital land, then create digital assets on the land. Those digital assets can be purchased, sold, and traded. You can run events, and create community spaces for people to hang out, learn, and vibe with each other."
              />
            </div>
          </div>
        </SectionContainer> */}
      </div>
    </div>
  );
};
