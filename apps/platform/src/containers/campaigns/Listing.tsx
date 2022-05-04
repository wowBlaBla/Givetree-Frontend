import React from "react";
import Head from "next/head";
import Slider from "react-slick";

import { MainBanner } from "../../components/MainBanner";
import { CampaignCard } from "../../components/cards/CampaignCard";
import { GridLayout } from "../../components/GridLayout";
import { SectionHeader } from "../../components/SectionHeader";
import { PlatformRoute } from "../../configs/routes";

import GiveTreeBgImg from "./../../assets/images/givtree-bg-image.png";
import MulgaBgImg from "./../../assets/images/mulga-bg-image.png";
import { genMulgakongzCampaignData } from "../../fixtures/campaign/mulgakongz";

export const CampaignListingContainer = (): JSX.Element => {
  const sliderProps = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Head>
        <title>GiveTree - Expore all mints</title>
      </Head>

      <SectionHeader
        mainTitle="Explore all Mints"
        subtitle="Discover current and upcoming mints for new NFT collections"
      />

      <Slider className="relative mx-auto" {...sliderProps}>
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
      </Slider>

      <div className="flex relative flex-col flex-1 w-full max-w-screen-3xl mx-auto mt-12 sm:mt-16 p-5">
        <GridLayout>
          <CampaignCard campaign={genMulgakongzCampaignData()} />
        </GridLayout>
      </div>
    </div>
  );
};
