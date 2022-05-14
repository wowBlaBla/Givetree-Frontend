import React, { FC } from "react";
import { useQuery } from "@apollo/client";
import Head from "next/head";
import { Link, useParams } from "react-router-dom";

import { GetMintingEventDataQuery, GET_MINTING_EVENT_DATA } from "./MintEventData";

import { BackgroundImage } from "../../components/BackgroundImage";
import { VerificationBadge } from "../../components/VerificationBadge";
import { GiveTreeLogo } from "../../components/GiveTreeLogo";
import { PrimaryButton } from "../../components/PrimaryButton";
import { LiveBadge } from "../../components/LiveBadge";
import { PlatformRoute } from "../../configs/routes";
import { CurrencyIcon } from "../../components/icons/CurrencyIcon";
import { getCurrency } from "../../utils/getCurrency";
import { Currency } from "../../components/Currency";
import { DarkBlendBottom, DarkBlend } from "../../components/BoxBlends";
import { ContentCreatorBadge } from "../../components/ContentCreatorBadge";

export const MintEventContainer: FC = () => {
  const params = useParams();
  const { data, loading } = useQuery<GetMintingEventDataQuery>(GET_MINTING_EVENT_DATA, {
    variables: { slug: params.campaignName },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No Data</div>;
  }

  return (
    <div className="flex relative flex-1 flex-col  w-full h-full min-h-screen overflow-auto">
      <Head>
        <title>GiveTree - {data.campaign.title}</title>
      </Head>

      <BackgroundImage imageAsset={data.campaign.media.mintingBannerUrl} />
      <DarkBlend top xlarge />

      <div className="flex flex-1 justify-center items-center w-full h-full m-auto py-10 p-5">
        <div className="absolute top-0 w-full h-48 z-20 bg-gradient-to-b from-brand-black to-transparent" />

        <div className="flex justify-center relative rounded-lg w-full max-w-3xl m-auto p-5 text-center">
          <div className="absolute w-full h-full bg-black bg-opacity-20 backdrop-blur-lg shadow-lg rounded-xl z-0"></div>

          <div className="flex relative flex-col justify-center items-center pt-10 pb-5 z-40">
            <div className="flex justify-center mt-5">
              <LiveBadge className="text-white" />
            </div>

            <div className="flex justify-center mt-5">
              <Link to={PlatformRoute.Home}>
                <GiveTreeLogo className="w-32 h-8 sm:w-32 sm:h-10" />
              </Link>
            </div>

            <div className="flex justify-center mt-3">
              <span className="text-4xl sm:text-5xl text-white">x</span>
            </div>

            <div className="flex justify-center mt-5">
              <h1 className="text-3xl sm:text-5xl font-bold text-white">
                {data.campaign.title}
              </h1>
            </div>

            <div className="flex flex-col space-y-10 sm:space-y-12 justify-center items-center w-full mt-12">
              <div className="flex flex-col w-full item-center">
                <div className="relative w-full h-full pt-full">
                  <BackgroundImage
                    className="shadow-lg rounded-xl"
                    imageAsset={data.campaign.media.mintingCollectionPreviewUrl}
                  />
                </div>

                <div className="w-full mt-6 sm:mt-8 text-center">
                  <PrimaryButton
                    className="flex justify-center items-center space-x-1 w-full"
                    large
                  >
                    <span>Mint for</span>
                    <Currency
                      amount={data.campaign.floorPrice}
                      currency={data.campaign.currency}
                    />
                  </PrimaryButton>
                </div>
              </div>

              <ContentCreatorBadge
                avatarUrl={data.campaign.creators[0].media.previewUrl}
                name={data.campaign.creators[0].name}
                large
                isVerified
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
