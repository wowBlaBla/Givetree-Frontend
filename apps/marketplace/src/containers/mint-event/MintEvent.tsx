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

export const MintEventContainer: FC = () => {
  // TODO: Remove after demo
  const pathname = window.location.pathname;
  const collection = pathname === "/mulgakongz" ? mulgakongz : genopets;

  console.log(">>>>>>>>>>", collection);

  return (
    <div className="flex flex-col flex-1">
      <Head>
        <title>GiveTree - {collection.title}</title>
      </Head>

      <section className="relative w-full h-screen">
        <BackgroundImage imageUrl={collection.backgroundImageUrl.src} />
      </section>

      <h1>Mulgakongz event is live</h1>
    </div>
  );
};
