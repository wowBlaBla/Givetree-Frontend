import React, { FC } from "react";
import Head from "next/head";

import { BackgroundImage } from "../../components/BackgroundImage";

import { VerificationBadge } from "../../components/VerificationBadge";

import Image, { StaticImageData } from "next/image";
import { PlatformRoute } from "../../configs/routes";
import { GiveTreeLogo } from "../../components/GiveTreeLogo";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../../components/PrimaryButton";
import { LiveBadge } from "../../components/LiveBadge";

export const MintEventContainer: FC = () => {
  return (
    <div className="relative flex flex-col flex-1 overflow-auto">
      {/* <Head>
        <title>GiveTree - {collection.title}</title>
      </Head>

      <BackgroundImage imageAsset={backgroundImage} className="z-0 h-full" />
      {collection.title === "Mulgakongz" ? (
        <BackgroundImage imageAsset={backgroundImage} className="z-0 h-full" />
      ) : (
        <BackgroundImage imageAsset={backgroundImage.src} className="z-0 h-full" />
      )}

      <div className="absolute w-full h-screen">
        <div className="absolute top-0 z-50 w-full h-48 z-200 bg-gradient-to-b from-brand-black to-transparent" />
        <div className="container py-10 m-auto text-center z-300">
          <div className="flex items-center justify-center flex-1 mt-32">
            <LiveBadge className="text-white" />
          </div>
          <div className="flex justify-center mt-10">
            <Link to={PlatformRoute.Home}>
              <GiveTreeLogo className="w-32 h-8 sm:h-12" />
            </Link>
          </div>
          <div className="flex items-center justify-center flex-1 my-4 text-center">
            <span className="text-xl text-white">x</span>
          </div>
          <h1 className="text-5xl font-bold text-white">{collection.title}</h1>

          <div className="flex flex-col items-center justify-center flex-1 mt-20">
            <div className="relative flex flex-col w-1/3 pb-6 item-center sm:pb-12">
              <div className="relative pt-full">
                {collection.title === "Mulgakongz" ? (
                  <BackgroundImage
                    className="shadow-lg rounded-xl"
                    imageAsset={mainImage}
                  />
                ) : (
                  <BackgroundImage
                    className="shadow-lg rounded-xl"
                    imageAsset={mainImage.src}
                  />
                )}
              </div>

              <div className="relative w-full mt-8 text-center">
                <PrimaryButton className="w-full" large>
                  Mint for 2.00 SOL
                </PrimaryButton>
              </div>
            </div>

            <div className="w-24 h-24 sm:w-30 sm:h-30">
              <Image
                className="min-w-full min-h-full rounded-full shadow-lg"
                src={creatorimage}
                alt="Genopets"
              />
            </div>
            <div className="flex flex-col items-center space-y-3">
              <h4 className="flex items-center space-x-1 text-xl font-medium flex-nowrap sm:text-2xl">
                <span className="text-white">by</span>
                <span className="text-brand-orange">{collection.creator.name}</span>
              </h4>

              <VerificationBadge />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
