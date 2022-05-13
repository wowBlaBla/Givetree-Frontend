import React from "react";
import Head from "next/head";

import { MainBanner } from "../../../components/MainBanner";
import { CampaignCard } from "../../../components/cards/CampaignCard";
import { CardGrid } from "../../../components/CardGrid";
import { SectionHeader } from "../../../components/SectionHeader";
import { PlatformRoute } from "../../../configs/routes";

import GiveTreeBgImg from "../../../assets/images/givtree-bg-image.png";
import MulgaBgImg from "../../../assets/images/mulga-bg-image.png";
import { genMulgakongzCampaignData } from "../../../fixtures/campaign/mulgakongz";
import { Carousel } from "../../../components/Carousel";

export const CampaignListingContainer = (): JSX.Element => {
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
          imageAsset={GiveTreeBgImg.src}
          title="The GiveTree NFT Marketplace & Metaverse Game-For-Good"
          subtitle="A % of every single NFT transaction is donated to charity"
          teaser="Learn more about GiveTree"
          teaserLink="#"
          ctaLink1={PlatformRoute.CampaignListing}
          ctaLink1Text="Explore"
          ctaLink2="/"
          ctaLink2Text="Start Minting"
          height="h-96"
        />

        <MainBanner
          imageAsset={MulgaBgImg.src}
          title="Mulgakongz by MulgaTheArtist"
          subtitle="4% of every single NFT minted is donated to Kids Learn Art"
          ctaLink1={PlatformRoute.CampaignListing}
          ctaLink1Text="Go to launchpad"
          height="h-96"
        />
      </Carousel>

      <div className="flex relative flex-col flex-1 w-full max-w-screen-3xl mx-auto mt-12 sm:mt-16 p-5">
        <CardGrid>
          <CampaignCard campaign={genMulgakongzCampaignData()} />
        </CardGrid>
      </div>
    </div>
  );
};
