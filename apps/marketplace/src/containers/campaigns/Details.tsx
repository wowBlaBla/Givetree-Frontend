import React, { FC } from "react";
import Head from "next/head";

import { DarkBlendTop } from "../../components/BoxBlends";
import { BackgroundImage } from "../../components/BackgroundImage";
import { StatusBadge } from "../../components/StatusBadge";
import { VerificationBadge } from "../../components/VerificationBadge";
import { GradientDivider } from "../../components/GradientDivider";
import { SocialLinkGrid } from "../../components/SocialLinkGrid";

import ImpactPartnerImg from "./../../assets/images/impact-partner-climate.png";
import { EventsTile } from "../../components/tiles/EventsTile";
import { ImpactPartnerTile } from "../../components/tiles/ImpactPartnerTile";
import { mulgakongz } from "../../api/data/collections/mulgakongz";
import { genopets } from "../../api/data/collections/genopets";
import { CausesTile } from "../../components/tiles/CausesTile";
import { CreatorTile } from "../../components/tiles/CreatorTile";
import { CollectionTile } from "../../components/tiles/CollectionTile";
import { GoToMintTile } from "../../components/tiles/GoToMintTile";
import { BackgroundVideo } from "../../components/BackgroundVideo";

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
          <BackgroundVideo videoAsset="/videos/genopets-bg.mp4" />
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

            {collection.isVerified && (
              <div className="flex">
                <VerificationBadge text="Verified Collection" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full max-w-screen-3xl mx-auto py-6 sm:py-8 px-4 sm:px-5">
        <CreatorTile
          name={collection.creator.name}
          description={collection.creator.description}
          imageAsset={collection.creator.avatarUrl}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 space-y-10 lg:space-y-0 my-12 sm:my-16">
          <div className="flex flex-col items-center w-full lg:col-span-7 space-y-5 sm:space-y-10">
            <CollectionTile
              title={collection.title}
              totalSupplyCount={collection.totalSupplyCount}
              mintingPrice={collection.startingMintPrice}
              description={collection.shortDescription}
            />

            <CausesTile
              distributionPercentage={collection.impactPartner.distributionPercentage}
              causes={collection.impactPartner.causes}
            />

            {/* TODO: Remove condiitonal after showcase */}
            <EventsTile
              hasStarted={collection.title === "Genopets"}
              collection={collection.title}
              whitelistStartDate={collection.whitelistStartDate}
              whitelistEndDate={collection.whitelistEndDate}
              publicStartDate={collection.publicStartDate}
              publicEndDate={collection.publicStartDate}
            />
          </div>

          <div className="flex flex-col items-center sm:col-span-2 lg:col-span-5 mt-12 sm:mt-0 px-1">
            <GoToMintTile imageAsset={collection.assetImageUrl.src} name="asset" />
            <ImpactPartnerTile
              name="Carbon Climate Change Society"
              description="3% of Mulgakongz mints to go"
              imageAsset={ImpactPartnerImg}
            />
          </div>
        </div>

        <GradientDivider />

        <div className="grid grid-cols-1 sm:grid-cols-6 mt-12 sm:mt-16">
          <div className="col-span-3 sm:col-span-2">
            <div className="relative w-full h-96">
              <BackgroundImage
                className="rounded-xl shadow-lg"
                imageAsset={collection.collectionImageUrl.src}
              />
            </div>
          </div>

          <div className="flex col-span-3 sm:col-span-4 flex-col space-y-5 mt-2 sm:mt-0 px-2 sm:px-5">
            <h3 className="text-4xl sm:text-5xl font-semibold">{collection.title}</h3>
            <SocialLinkGrid websiteUrl="#" twitterUrl="#" discordUrl="#" />
            <p>
              10 million years ago, a group of 8,888 mysterious gorilla like animals first
              appeared on earth. Found commonly on the beaches, jungles and islands of
              Australia, they weren’t just your regular Gorilla. Instead of eating bananas
              and playing with sticks for fun like their close relatives, the gorillas,
              now known as the “MulgaKongz” had evolved into drinking Mojitos, surfing,
              and throwing the biggest and best beach party on the whole island.
            </p>
            <p>
              After many moons, the Kongz began to evolve forming 250 unique traits to
              represent their fruity personality. Friends and good vibes are all what the
              MulgaKongz stand for. They stand out from the rest due to their radiating
              good vibes, bright and colourful style and their ingenious ways to throw
              bigger and better parties in the future, certifying them as the coolest
              Kongz in the world.
            </p>
            <p>
              Speak closely with our team and engage in our community in our Discord
              ecosystem. Follow our social media for exciting challenges, announcements
              and interactions with other NFT communities!
            </p>
            <p>LIVE</p>
            <ul>
              <li>Single-sided $IV Staking pool 200% APY</li>
              <li>Yield Farming $IV/SOL LP 200%+ APY </li>
              <li>Yield Farming $IV/USDC LP 200% APY</li>
            </ul>
            <p>IN DEVELOPMENT</p>
            <ul>
              <li>Partner projects tokens LP introductions</li>
              <li>Stable-Coin introduction</li>
              <li>Centralized Exchanges $IV listing</li>
              <li></li>
              <li>Lending/Borrowing</li>
              <li>Buy Now Pay Later (BNPL)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
