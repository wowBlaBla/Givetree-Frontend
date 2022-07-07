import React, { FC } from "react";
import { useQuery } from "@apollo/client";
import Head from "next/head";

import { GetCharityDetailsDataQuery, GET_CHARITY_DETAILS_DATA } from "./DetailsData";
import { BackgroundImage } from "../../../components/BackgroundImage";
import { SocialGrid } from "../../../components/SocialGrid";
import { LoadingContainer } from "../../../components/LoadingContainer";
import { ErrorContainer } from "../../../components/ErrorContainer";
import { BaseTile } from "../../../components/tiles/BaseTile";
import { GradientDivider } from "../../../components/GradientDivider";
import { SolanaColorIcon } from "../../../components/icons/SolanaColorIcon";
import { CauseBadge } from "../../../components/badges/CauseBadge";
import { VerifiedBadge } from "../../../components/badges/VerifiedBadge";
import { VerifiedBadgeType } from "../../../typed/enum/verifiedBadgeType";
import { DonateModalButton } from "../../../components/DonateModalButton";
import { useWallet as useSolanaWallet } from "@solana/wallet-adapter-react";
import { ConnectWalletButton } from "../../../components/wallet/ConnectWalletButton";

interface CharityDetailsContainerProps {
  charityName: string;
}

export const CharityDetailsContainer: FC<CharityDetailsContainerProps> = ({
  charityName,
}) => {
  const { connected: isWalletConnected } = useSolanaWallet();

  const { data, loading, error } = useQuery<GetCharityDetailsDataQuery>(
    GET_CHARITY_DETAILS_DATA,
    {
      variables: { slug: charityName },
    }
  );

  if (loading) {
    return <LoadingContainer message="Loading charity details..." />;
  }

  if (error) {
    return <ErrorContainer message="Could not load charity details." />;
  }

  if (!data) {
    return <ErrorContainer message="Could not load charity details." />;
  }

  return (
    <div className="relative w-full mx-auto">
      <Head>
        <title>GiveTree - verified charity {data.charity.name}</title>
      </Head>

      <div className="grid w-full max-w-screen-xl grid-cols-1 gap-4 px-3 mx-auto my-6 lg:grid-cols-2 lg:gap-8 sm:my-8">
        <BaseTile className="flex flex-col px-2 bg-white">
          <div className="flex flex-row gap-3 mt-5">
            <div className="relative w-24 h-24">
              <BackgroundImage
                imageAsset={data.charity.media.previewUrl}
                className="w-full border border-gray-200 rounded-lg object-fit"
              />
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex items-center">
                <h3 className="space-x-0.5 text-3xl font-medium sm:text-4xl">
                  <span>{data.charity.name}</span>
                  <VerifiedBadge
                    isVerified={data.charity.isVerified}
                    type={VerifiedBadgeType.Charity}
                    large
                  />
                </h3>
              </div>

              <p className="mt-1 text-sm tracking-wide text-gray-500">
                {data.charity.shortDescription}
              </p>

              <div className="mt-3">
                <SocialGrid websiteUrl={data.charity.websiteUrl} twitterUrl="#" />
              </div>
            </div>
          </div>

          <div className="py-5">
            <GradientDivider />
          </div>

          <div className="flex-grow">
            <h3 className="text-xl font-semibold">Our causes</h3>
          </div>

          <div className="flex items-center mt-3 space-x-1 sm:space-x-3">
            <div className="flex flex-wrap space-x-1">
              {data.charity.causes.map((cause, idx) => (
                <CauseBadge key={idx} cause={cause} />
              ))}
            </div>
          </div>

          <div className="py-5">
            <GradientDivider />
          </div>

          <div className="flex-grow">
            <h3 className="text-xl font-semibold">About us</h3>
          </div>

          <p className="mt-2 text-base leading-7 text-gray-800">
            {data.charity.longDescription}
          </p>

          <div className="py-5">
            <GradientDivider />
          </div>

          <div className="flex-grow">
            <h3 className="text-xl font-semibold">Activity</h3>
          </div>

          <div className="grid grid-cols-3 gap-5 mt-3">
            <div>
              <p className="text-xs text-gray-500">Total nominations</p>
              <div className="flex flex-row items-end">
                <p className="text-4xl font-semibold">8</p>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-500">Avg. royalty</p>
              <div className="flex flex-row items-end">
                <p className="text-4xl font-semibold">25</p>
                <span className="">%</span>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-500">Total received donations</p>
              <div className="flex flex-row items-center ">
                <SolanaColorIcon className="w-5 mr-2" />
                <p className="text-4xl font-semibold">758~</p>
              </div>
            </div>
          </div>
        </BaseTile>

        <div className="flex flex-col space-y-5">
          <div className="relative pt-full">
            <BackgroundImage
              imageAsset={data.charity.media.previewUrl}
              className="border shadow-lg rounded-xl"
            />
          </div>

          {isWalletConnected && (
            <DonateModalButton
              containerClassName="flex w-full"
              buttonClassName="w-full"
              charity={data.charity}
            />
          )}

          {!isWalletConnected && <ConnectWalletButton />}
        </div>
      </div>
    </div>
  );
};
