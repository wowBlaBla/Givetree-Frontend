import React, { FC } from "react";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { GetCampaignDetailsDataQuery, GET_CAMPAIGN_DETAILS_DATA } from "./DetailsData";
import { BackgroundImage } from "../../../components/BackgroundImage";
import { GradientDivider } from "../../../components/GradientDivider";
import { SocialGrid } from "../../../components/SocialGrid";
import { MintingEventTile } from "../../../components/tiles/MintingEventTile";
import { CharityTile } from "../../../components/tiles/CharityTile";
import { CampaignDetailTile } from "../../../components/tiles/CampaignDetailTile";
import { CampaignBannerHeader } from "../../../components/CampaignBannerHeader";
import { getRoyaltyPercentage } from "../../../utils/getRoyaltyPercentage";
import { RoyaltyType } from "../../../typed/royalty-details";
import { PrimaryButton } from "../../../components/PrimaryCta";
import { BaseTile } from "../../../components/tiles/BaseTile";
import { round } from "lodash";
import { LoadingContainer } from "../../../components/LoadingContainer";
import { ErrorContainer } from "../../../components/ErrorContainer";

type CampaignDetailsParamTypes = {
  campaignName: string;
};

export const CampaignDetailsContainer: FC = () => {
  const params = useParams<CampaignDetailsParamTypes>();

  const { data, loading, error } = useQuery<GetCampaignDetailsDataQuery>(
    GET_CAMPAIGN_DETAILS_DATA,
    {
      variables: { slug: params.campaignName },
    }
  );

  if (loading) {
    return <LoadingContainer message="Loading campaign details..." />;
  }

  if (error) {
    return <ErrorContainer message="Could not load campaign details." />;
  }

  if (!data) {
    return <ErrorContainer message="Could not load campaign details." />;
  }

  return (
    <div className="flex flex-col flex-1 bg-gray-100">
      <Head>
        <title>GiveTree - {data.campaign.title}</title>
      </Head>

      <CampaignBannerHeader
        backgroundImage={data.campaign.media.campaignBannerUrl}
        description={data.campaign.shortDescription ?? ""}
        campaignTitle={data.campaign.title}
        isFeatured
        charityName={data.campaign.nominatedCharity.name}
        charityImage={data.campaign.nominatedCharity.media.tileUrl}
        causes={data.campaign.nominatedCharity.causes}
      />

      <div className="flex flex-col w-full max-w-screen-xl px-3 mx-auto my-6 space-y-12 bg-gray-100">
        <div className="grid grid-cols-1 space-y-6 lg:grid-cols-12 lg:gap-8 sm:space-y-8 lg:space-y-0">
          <div className="flex flex-col items-center w-full space-y-5 lg:col-span-7">
            <BaseTile className="bg-white">
              <CampaignDetailTile campaign={data.campaign} />

              <div className="my-5">
                <GradientDivider />
              </div>

              <MintingEventTile
                rounds={data.campaign.event.rounds}
                currency={data.campaign.currency}
              />

              <div className="my-5">
                <GradientDivider />
              </div>

              <CharityTile
                name={data.campaign.nominatedCharity.name}
                description={`${getRoyaltyPercentage(
                  data.campaign.royalties,
                  RoyaltyType.CharityDonation
                )}% of ${data.campaign.title} mints go to`}
                imageAsset={data.campaign.nominatedCharity.media.tileUrl}
                artistName={data.campaign.creators[0].name}
                royalty={
                  getRoyaltyPercentage(
                    data.campaign.royalties,
                    RoyaltyType.CharityDonation
                  ) ?? 0
                }
                causes={data.campaign.nominatedCharity.causes}
                totalSupply={data.campaign.totalSupply}
                floorPrice={data.campaign.floorPrice}
              />
            </BaseTile>
          </div>

          <div className="flex flex-col items-center sm:col-span-2 lg:col-span-5">
            <div className="relative flex flex-col w-full item-center">
              <div className="relative pt-full">
                <BackgroundImage
                  imageAsset={data.campaign.media.campaignCollectionPreviewUrl}
                  className="rounded-xl"
                />
              </div>

              <BaseTile className="flex flex-col mt-5 bg-white">
                <progress
                  className="w-full progress-error progress"
                  value="70"
                  max="100"
                ></progress>
                <div className="flex flex-row mt-2">
                  <span className="flex-grow text-gray-500">Total minted</span>
                  <p className="text-gray-400">
                    <span className="font-bold text-brand-orange">70%</span> (
                    {round(data.campaign.totalSupply * 0.7, 0)} /{" "}
                    {data.campaign.totalSupply})
                  </p>
                </div>

                <div className="flex justify-center mt-5">
                  <PrimaryButton className="items-center w-full">
                    Mint - {data.campaign.floorPrice} SOL
                  </PrimaryButton>
                </div>
              </BaseTile>
            </div>
          </div>
        </div>

        <h3 className="text-xl text-center text-gray-400">
          More about {data.campaign.title}
        </h3>

        <div className="grid grid-cols-1 mt-12 sm:grid-cols-6 sm:gap-6">
          <div className="col-span-3 sm:col-span-2">
            <div className="relative pt-full">
              <BackgroundImage
                imageAsset={data.campaign.media.campaignDetailsUrl}
                className="rounded-xl"
              />
            </div>
          </div>

          <BaseTile className="flex flex-col col-span-3 px-2 mt-2 space-y-5 bg-white sm:col-span-4 sm:mt-0 sm:px-5">
            <h3 className="text-3xl font-semibold sm:text-4xl">{data.campaign.title}</h3>
            <SocialGrid
              websiteUrl={data.campaign.websiteUrl}
              twitterUrl={data.campaign.twitterUrl}
              discordUrl={data.campaign.discordUrl}
            />
            <GradientDivider />
            <p>{data.campaign.longDescription}</p>
          </BaseTile>
        </div>
      </div>
    </div>
  );
};
