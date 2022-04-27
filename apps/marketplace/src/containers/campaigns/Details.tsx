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

import MulgaBgImg from "./../../assets/images/mulga-bg-image.png";
import MulgaTheArtistImg from "./../../assets/images/mulga-the-artist.png";
import MulgaAssetImg from "./../../assets/images/mulgakongz-bunny-ears.png";
import MulgaHatImg from "./../../assets/images/mulgakongz-banana-hat.png";
import ImpactPartnerImg from "./../../assets/images/impact-partner-climate.png";
import { BaseTile } from "../../components/BaseTile";
import { EventWrapperTile } from "../../components/EventWrapperTile";
import { ItemBox } from "../../components/ItemBox";

export const CampaignDetailsContainer: FC = () => {
  return (
    <div className="flex flex-1 flex-col">
      <Head>
        <title>GiveTree - Mulgakongz</title>
      </Head>

      <div className="relative min-w-full h-96 xl:h-128 py-5 sm:py-8">
        <BackgroundImage imageAsset={MulgaBgImg.src} />
        <div className="absolute bottom-0 w-full z-10">
          <DarkBlendTop xlarge />
        </div>

        <div className="flex flex-col justify-end w-full max-w-screen-3xl min-h-full space-y-3 px-3">
          <div className="flex relative flex-col z-20">
            <div className="flex relative">
              <StatusBadge status="Featured Release" left large />
            </div>

            <div className="flex flex-col space-y-1 text-white">
              <h3 className="text-5xl sm:text-6xl font-semibold">
                This is <span className="text-brand-orange">Mulgakongz</span>
              </h3>

              <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-5 pt-3 sm:pt-0">
                <div className="text-lg sm:text-2xl">Total Items 4557</div>
                <div className="text-lg sm:text-2xl">Starting from 2.00 SOL per mint</div>
              </div>

              <div className="flex">
                <VerificationBadge />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-screen-3xl mx-auto py-6 sm:py-12 px-4 sm:px-5">
        <div className="flex flex-col sm:flex-row pb-12">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-3">
            <div className="w-24 h-24 sm:w-32 sm:h-32">
              <Image
                className="min-w-full min-h-full rounded-full"
                src={MulgaTheArtistImg}
                alt="MulgaTheArtist"
              />
            </div>

            <div className="flex flex-col items-center sm:items-start space-y-1">
              <h4 className="flex flex-nowrap items-center text-xl sm:text-2xl space-x-1 font-medium">
                <span className="text-black">by</span>
                <span className="text-brand-orange">MulgaTheArtist</span>
              </h4>

              <VerificationBadge />
            </div>
          </div>

          <div className="flex items-center mt-5 sm:mt-0">
            <p className="text-xl sm:px-12 text-gray-600">
              Inspired by Worms and Angry Birds, this new crazy videogame lets you
              challenge your friends with a barrage of carrots, exhausts and sperm whales!
            </p>
          </div>
        </div>

        <GradientDivider />

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-8 my-12 sm:my-16">
          <div className="flex flex-col col-span-7 space-y-5 sm:space-y-10">
            <BaseTile className="bg-white">
              <h3 className="text-5xl sm:text-6xl font-semibold">Mulgakongz</h3>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6 mt-6">
                <ItemBox title="Total Items" value="8888" />
                <ItemBox title="Price" value="2.00 SOL" />
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

            <EventWrapperTile />
          </div>

          <div className="flex flex-col items-center col-span-5 mt-12 sm:mt-0">
            <div className="flex flex-col item-center pb-6 sm:pb-12">
              <div className="flex justify-center flex-1 w-full h-72">
                <Image
                  className="rounded-lg shadow-lg"
                  src={MulgaAssetImg}
                  alt="mulgakongz asset"
                />
              </div>

              <div className="w-full mt-8 text-center">
                <PrimaryButton large>Go to minting site</PrimaryButton>
              </div>
            </div>

            <div className="mt-3 w-full sm:mt-6 sm:px-8">
              <div className="bg-gray-100 shadow-lg rounded-xl py-10 px-5">
                <p className="text-center text-lg sm:text-xl">
                  3% of Mulgakongz mints to go
                </p>
                <div className="flex flex-col mt-6">
                  <div className="flex justify-center w-48 h-48 sm:w-72 sm:h-72 mx-auto">
                    <Image
                      className="w-full rounded-full"
                      src={ImpactPartnerImg}
                      alt="mulgakongz asset"
                    />
                  </div>

                  <p className="mt-5 text-center text-brand-orange font-semibold text-base sm:text-xl">
                    Carbon Climate Change Society
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <GradientDivider />

        <div className="grid grid-cols-1 sm:grid-cols-3 mt-12 sm:mt-16">
          <div className="col-span-3 sm:col-span-1">
            <Image className="rounded-lg shadow-lg" src={MulgaHatImg} alt="mulga art" />
          </div>

          <div className="flex col-span-3 sm:col-span-2 flex-col space-y-5 mt-2 sm:mt-0 px-2 sm:px-10">
            <h3 className="text-4xl sm:text-5xl font-semibold">Mulgakongz</h3>
            <SocialLinkGrid websiteUrl="#" twitterUrl="#" discordUrl="#" />
            <p>
              The Story Miners of Mars is a unique storytelling NFT collection that
              transcends into the comic world and Tokenomics. All traits were hand-drawn
              on paper by Marvel comic artist Aleksa Gajic.
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
