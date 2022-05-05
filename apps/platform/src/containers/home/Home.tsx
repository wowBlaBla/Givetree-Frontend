import React from "react";
import Head from "next/head";
import Slider from "react-slick";
import { PlatformRoute } from "../../configs/routes";

import { CampaignCard } from "../../components/cards/CampaignCard";
import { MainBanner } from "../../components/MainBanner";
import { OutlineLink } from "../../components/OutlineButton";
import { SectionTitle } from "../../components/SectionTitle";
import { GridLayout } from "../../components/GridLayout";

import GiveTreeBgImg from "./../../assets/images/givtree-bg-image.png";
import MulgaBgImg from "./../../assets/images/mulga-bg-image.png";
import { genMulgakongzCampaignData } from "../../fixtures/campaign/mulgakongz";
import { genGenopetsCampaignData } from "../../fixtures/campaign/genopets";

export const HomeContainer = () => {
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
    <div className="w-full mx-auto">
      <Head>
        <title>GiveTree</title>
        <meta name="description" content="This is the GiveTree NFT Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative">
        <Slider {...sliderProps}>
          <MainBanner
            height="h-96 xl:h-128"
            imageAsset={GiveTreeBgImg.src}
            title="The GiveTree NFT Marketplace & Metaverse Game-For-Good"
            subtitle="A % of every single NFT transaction is donated to charity"
            teaser="Learn more about GiveTree"
            teaserLink="#"
            ctaLink1={PlatformRoute.CampaignListing}
            ctaLink1Text="Explore"
            ctaLink2="/"
            ctaLink2Text="Start Minting"
          />
          <MainBanner
            height="h-96 xl:h-128"
            imageAsset={MulgaBgImg.src}
            title="Mulgakongz by MulgaTheArtist"
            subtitle="4% of every single NFT minted is donated to Kids Learn Art"
            ctaLink1={PlatformRoute.CampaignListing}
            ctaLink1Text="Go to launchpad"
          />
        </Slider>
      </div>

      <div className="flex relative flex-col flex-1 w-full max-w-screen-3xl mx-auto mt-12 sm:mt-16 p-5">
        <SectionTitle>Upcoming Collections</SectionTitle>

        <GridLayout>
          <CampaignCard campaign={genMulgakongzCampaignData()} />
          <CampaignCard campaign={genGenopetsCampaignData()} />
        </GridLayout>

        <div className="flex justify-center mt-8">
          <OutlineLink to={PlatformRoute.CampaignListing}>
            View More Collections
          </OutlineLink>
        </div>
      </div>
    </div>
  );
};
