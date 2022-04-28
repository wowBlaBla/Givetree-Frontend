import React, { FC } from "react";
import Head from "next/head";
import Image from "next/image";

import { DarkBlendTop } from "../../components/BoxBlends";
import { BackgroundImage } from "../../components/BackgroundImage";
import { StatusBadge } from "../../components/StatusBadge";
import { PrimaryButton } from "../../components/PrimaryButton";
import { VerificationBadge } from "../../components/VerificationBadge";
import { GradientDivider } from "../../components/GradientDivider";
import { SocialLinkGrid } from "../../components/SocialLinkGrid";

import MulgaAssetImg from "./../../assets/images/mulgakongz-bunny-ears.png";
import MulgaHatImg from "./../../assets/images/mulgakongz-banana-hat.png";
import ImpactPartnerImg from "./../../assets/images/impact-partner-climate.png";
import { BaseTile } from "../../components/BaseTile";
import { EventsTile } from "../../components/EventsTile";
import { ItemBox } from "../../components/ItemBox";
import { ImpactPartnerTile } from "../../components/tiles/ImpactPartnerTile";
import { mulgakongz } from "../../api/data/collections/mulgakongz";
import { genopets } from "../../api/data/collections/genopets";

export const CampaignDetailsContainer: FC = () => {
  // TODO: Remove after demo
  const pathname = window.location.pathname;
  const collection = pathname === "/mulgakongz" ? mulgakongz : genopets;

  return (
    <div className="flex flex-1 flex-col">
      <Head>
        <title>GiveTree - {collection.title}</title>
      </Head>

      <div className="relative min-w-full h-96 xl:h-128 py-5 sm:py-8 overflow-hidden">
        {/* TODO: Remove after demo */}
        {collection.title === "Genopets" ? (
          <video
            autoPlay
            loop
            playsInline
            className="absolute top-0 min-w-full min-h-full z-0"
          >
            <source
              src="https://storage.googleapis.com/fractal_game_assets/genopets_banner_2.mp4"
              type="video/mp4"
            />
          </video>
        ) : (
          <BackgroundImage imageAsset={collection.backgroundImageUrl} />
        )}

        <div className="absolute bottom-0 w-full z-10">
          <DarkBlendTop className="bottom-0" xlarge />
        </div>

        <div className="flex items-end w-full max-w-screen-3xl min-h-full mx-auto px-3">
          <div className="flex flex-col space-y-3 text-white z-20">
            <div className="flex relative">
              <StatusBadge status="Featured Release" left large />
            </div>

            <h3 className="text-5xl sm:text-6xl font-bold">
              This is <span className="text-brand-orange">{collection.title}</span>
            </h3>

            <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-5 pt-3 sm:pt-0 font-medium text-lg sm:text-2xl">
              <h3>Total Items {collection.totalSupplyCount}</h3>
              <h3>Starting from {collection.startingMintPrice} SOL per mint</h3>
            </div>

            <div className="flex">
              <VerificationBadge />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-screen-3xl mx-auto py-6 sm:py-8 px-4 sm:px-5">
        <div className="flex flex-col sm:flex-row pb-12 border-b-[3px]">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-3">
            <div className="w-24 h-24 sm:w-30 sm:h-30">
              <Image
                className="min-w-full min-h-full rounded-full"
                src={collection.creator.avatarUrl}
                alt="MulgaTheArtist"
              />
            </div>

            <div className="flex flex-col items-center sm:items-start space-y-3">
              <h4 className="flex flex-nowrap items-center text-xl sm:text-2xl space-x-1 font-medium">
                <span className="text-black">by</span>
                <span className="text-brand-orange">{collection.creator.name}</span>
              </h4>

              <VerificationBadge />
            </div>
          </div>

          <div className="flex items-center max-w-7xl mt-5 sm:mt-0 sm:px-12">
            <p className="text-xl text-gray-600 xl:leading-9">
              {collection.creator.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-8 my-12 sm:my-16">
          <div className="flex flex-col col-span-7 space-y-5 sm:space-y-10">
            <BaseTile className="bg-white">
              <h3 className="text-4xl sm:text-5xl xl:text-6xl font-semibold">
                {collection.title}
              </h3>

              <div className="flex flex-col sm:flex-row mt-6 space-y-3 sm:space-y-0 sm:space-x-6">
                <ItemBox title="Total Items" value={collection.totalSupplyCount} />
                <ItemBox title="Price" value={`${collection.startingMintPrice} SOL`} />
              </div>

              <SocialLinkGrid
                websiteUrl="#"
                twitterUrl="#"
                discordUrl="#"
                contractUrl="#"
              />

              <div className="mt-5 text-base sm:text-lg">
                <p>
                  Miners of Mars is a collection of 7000 algorithmically generated
                  characters hand-drawn on paper by Marvel comic artist Aleksa Gajic.
                </p>
              </div>
            </BaseTile>

            <BaseTile className="bg-white border-2 border-green-400">
              <div className="text-lg font-semibold">
                <p>Amazingly 3% of sale price goes towards these causes:</p>
              </div>

              <div className="flex w-auto space-x-3 mt-4">
                <div className="text-sm sm:text-base font-semibold text-center rounded-md border-2 text-green-600 border-brand-green-active py-2 px-3">
                  Climate Crisis
                </div>

                <div className="text-sm sm:text-base font-semibold text-center rounded-md border-2 text-green-600 border-brand-green-active py-2 px-3">
                  Substantial materials
                </div>
              </div>
            </BaseTile>

            <EventsTile />
          </div>

          <div className="flex flex-col items-center col-span-5 mt-12 sm:mt-0 sm:px-8">
            <div className="flex flex-col item-center w-full pb-6 sm:pb-12">
              <Image
                className="w-full h-full rounded-lg shadow-lg"
                src={MulgaAssetImg}
                alt="mulgakongz asset"
              />

              <div className="w-full mt-8 text-center">
                <PrimaryButton large>Go To Minting Site</PrimaryButton>
              </div>
            </div>

            <ImpactPartnerTile
              name="Carbon Climate Change Society"
              description="3% of Mulgakongz mints to go"
              imageAsset={ImpactPartnerImg}
            />
          </div>
        </div>

        <GradientDivider />

        <div className="grid grid-cols-1 sm:grid-cols-6 mt-12 sm:mt-16">
          <div className="w-full col-span-3 sm:col-span-2">
            <Image className="rounded-lg shadow-lg" src={MulgaHatImg} alt="mulga art" />
          </div>

          <div className="flex col-span-3 sm:col-span-4 flex-col space-y-5 mt-2 sm:mt-0 px-2 sm:px-5">
            <h3 className="text-4xl sm:text-5xl font-semibold">{collection.title}</h3>
            <SocialLinkGrid websiteUrl="#" twitterUrl="#" discordUrl="#" />
            <p>
              This is a unique storytelling NFT collection that transcends into the world
              of art and pop culture. All traits were hand-drawn on paper by Marvel comic
              artist Aleksa Gajic.
            </p>

            <p>MoM Story</p>

            <p>
              They never knew the impact of losing their home planet until they felt it in
              the depths of Mars.
            </p>
            <p>
              Drilling Engineer Manuel Aronowsky, last day on the job, was tasked to
              calculate the exact time of their death.
            </p>
            <p>
              With only 18 months left to live they decided to create this archive as the
              last evidence of human existence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
