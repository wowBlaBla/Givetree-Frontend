import React, { FC } from "react";
import Head from "next/head";

import { DarkBlendTop } from "../../components/BoxBlends";
import { BackgroundImage } from "../../components/BackgroundImage";
import { StatusBadge } from "../../components/StatusBadge";
import { VerificationBadge } from "../../components/VerificationBadge";
import { GradientDivider } from "../../components/GradientDivider";
import { SocialLinkGrid } from "../../components/SocialLinkGrid";

import CharityImg from "./../../assets/images/impact-partner-climate.png";
import { EventsTile } from "../../components/tiles/EventsTile";
import { CharityTile } from "../../components/tiles/CharityTile";
import { mulgakongz } from "../../api/data/collections/mulgakongz";
import { genopets } from "../../api/data/collections/genopets";
import { CausesTile } from "../../components/tiles/CausesTile";
import { CreatorTile } from "../../components/tiles/CreatorTile";
import { CollectionTile } from "../../components/tiles/CollectionTile";
import { GoToMintTile } from "../../components/tiles/GoToMintTile";
import { BackgroundVideo } from "../../components/BackgroundVideo";
import Image, { StaticImageData } from "next/image";
import { PlatformRoute } from "../../configs/routes";
import { GiveTreeLogo } from "../../components/GiveTreeLogo";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../../components/PrimaryButton";
import { LiveBadge } from "../../components/LiveBadge";

export const MintEventContainer: FC = () => {
  // TODO: Remove after demo
  const pathname = window.location.pathname;
  const collection = pathname === "/minting/mulgakongz" ? mulgakongz : genopets;

  const backgroundImage =
    collection.title === "Mulgakongz"
      ? collection.backgroundImageUrl
      : (collection.backgroundImageUrl as StaticImageData);
  const mainImage = collection.collectionImageUrl as StaticImageData;
  const creatorimage = collection.creator.avatarUrl as StaticImageData;

  return (
    <div className="relative flex flex-col flex-1 overflow-auto">
      <Head>
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
      </div>
    </div>
  );
};
