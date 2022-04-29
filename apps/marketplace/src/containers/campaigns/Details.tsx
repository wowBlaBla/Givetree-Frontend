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
    <div className="flex flex-col flex-1">
      <Head>
        <title>GiveTree - {collection.title}</title>
      </Head>

      <div className="relative min-w-full py-5 overflow-hidden h-96 xl:h-128 sm:py-8">
        {/* TODO: Remove after demo */}
        {collection.title === "Genopets" ? (
          <BackgroundVideo videoAsset="/videos/genopets-bg.mp4" />
        ) : (
          <BackgroundImage imageAsset={collection.backgroundImageUrl} />
        )}

        <div className="absolute bottom-0 z-10 w-full">
          <DarkBlendTop className="bottom-0" xlarge />
        </div>

        <div className="flex items-end w-full min-h-full px-3 mx-auto max-w-screen-3xl">
          <div className="z-20 flex flex-col space-y-3 text-white">
            <div className="relative flex">
              <StatusBadge status="Featured Release" left large />
            </div>

            <h3 className="text-5xl font-bold sm:text-6xl">
              This is <span className="text-brand-orange">{collection.title}</span>
            </h3>

            <div className="flex flex-col pt-3 space-y-1 text-lg font-medium sm:flex-row sm:items-center sm:space-y-0 sm:space-x-5 sm:pt-0 sm:text-2xl">
              <h3>Total items {collection.totalSupplyCount}</h3>
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

      <div className="w-full px-4 py-6 mx-auto max-w-screen-3xl sm:py-8 sm:px-5">
        <CreatorTile
          name={collection.creator.name}
          description={collection.creator.description}
          imageAsset={collection.creator.avatarUrl}
        />

        <div className="grid grid-cols-1 my-12 space-y-10 lg:grid-cols-12 lg:gap-8 lg:space-y-0 sm:my-16">
          <div className="flex flex-col items-center w-full space-y-5 lg:col-span-7 sm:space-y-10">
            <CollectionTile
              isLive={collection.title === "Genopets"}
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

          <div className="flex flex-col items-center px-1 mt-12 sm:col-span-2 lg:col-span-5 sm:mt-0">
            <GoToMintTile imageAsset={collection.assetImageUrl.src} name="asset" />
            <ImpactPartnerTile
              name="Carbon Climate Change Society"
              description="3% of Mulgakongz mints to go"
              imageAsset={ImpactPartnerImg}
            />
          </div>
        </div>

        <GradientDivider />

        <div className="grid grid-cols-1 mt-12 sm:grid-cols-6 sm:mt-16">
          <div className="col-span-3 sm:col-span-2">
            <div className="relative w-full h-96">
              <BackgroundImage
                className="shadow-lg rounded-xl"
                imageAsset={collection.collectionImageUrl.src}
              />
            </div>
          </div>

          <div className="flex flex-col col-span-3 px-2 mt-2 space-y-5 sm:col-span-4 sm:mt-0 sm:px-5">
            <h3 className="text-3xl font-semibold sm:text-4xl">{collection.title}</h3>
            <SocialLinkGrid
              websiteUrl={collection.websiteUrl}
              twitterUrl={collection.twitterUrl}
              discordUrl={collection.discordUrl}
            />

            <p>
              10 million years ago, a group of 8,888 mysterious gorilla like animals first
              appeared on earth. Found commonly on the beaches, jungles and islands of
              Australia, they weren’t just your regular Gorilla. Instead of eating bananas
              and playing with sticks for fun like their close relatives, the gorillas,
              now known as the <b>“MulgaKongz”</b> had evolved into drinking Mojitos,
              surfing, and throwing the biggest and best beach party on the whole island.
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
            <p>
              <b>LIVE</b>
            </p>
            <ul>
              <li>Single-sided $IV Staking pool 200% APY</li>
              <li>Yield Farming $IV/SOL LP 200%+ APY </li>
              <li>Yield Farming $IV/USDC LP 200% APY</li>
            </ul>
            <p>
              <b>IN DEVELOPMENT</b>
            </p>
            <ul>
              <li>Partner projects tokens LP introductions</li>
              <li>Stable-Coin introduction</li>
              <li>Centralized Exchanges $IV listing</li>
              <li>Lending/Borrowing</li>
              <li>Buy Now Pay Later (BNPL)</li>
            </ul>

            <div className="space-y-5">
              <h1 className="font-bold">
                Phase 1: Staking of Pixel Panthers | Co-Own a Bank in the Metaverse!
              </h1>
              <ul>
                <li>
                  Launching a staking platform to allow holders to begin earning $PIXL,
                  our governance-utility token.
                </li>
                <li>25% of the supply of $PIXL is allocated for project emissions.</li>
              </ul>

              <h1 className="font-bold">
                Phase 2: Launch of Pixels.so | Borrow Against Your NFTs!
              </h1>
              <ul>
                <li>
                  Launching of the Peer-to-Peer NFT borrowing model. This will enable
                  anyone to request to borrow against any of their NFTs.
                </li>
                <li>
                  Launching of the Instant Borrowing model. This will enable anyone to
                  instantly borrow up to 25% of their NFT, Digital Land, or Metaverse
                  Asset. Holders will vote on which projects will be eligible for the
                  Instant Borrowing Model. Only well-established projects, with a proven
                  track-record, will be eligible.
                </li>
              </ul>
              <h1 className="font-bold"></h1>
              <h1 className="font-bold">Phase 3: Cross-Chain Support</h1>
              <ul>
                <li>
                  Pixels.so | Borrow Against Your NFTs! will allow non-Solana assets such
                  as ERC-721 projects, and non-Solana digital land to be eligible
                  collateral under our Peer-to-Peer NFT Borrowing model and our Instant
                  Borrowing model.
                </li>
              </ul>
              <h1 className="font-bold"></h1>
              <h1 className="font-bold">Phase 4: Bank of the Metaverse</h1>
              <ul>
                <li>
                  Pixels.so | Borrow Against Your NFTs! will boast a full suite of
                  advanced products centered around our core mission of building out the
                  Bank of the Metaverse. The platform&apos;s future products will focus on
                  fueling the integration of DeFi into the Metaverse. There are many
                  innovative offerings to build out and we are more than excited to bring
                  these to market in never-before-seen ways!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
