import React, { FC } from "react";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { GetCampaignDetailsDataQuery, GET_CAMPAIGN_DETAILS_DATA } from "./DetailsData";
import { BackgroundAsset } from "../../../components/BackgroundAsset";
import { GradientDivider } from "../../../components/GradientDivider";
import { SocialGrid } from "../../../components/SocialGrid";
import { MintingEventTile } from "../../../components/tiles/MintingEventTile";
import { CharityTile } from "../../../components/tiles/CharityTile";
import { CausesTile } from "../../../components/tiles/CausesTile";
import { ContentCreatorTile } from "../../../components/tiles/ContentCreatorTile";
import { CollectionDetailTile } from "../../../components/tiles/CollectionDetailTile";
import { GoToMintTile } from "../../../components/tiles/GoToMintTile";
import { CampaignBannerHeader } from "../../../components/CampaignBannerHeader";
import { getRoyaltyPercentage } from "../../../utils/getRoyaltyPercentage";
import { RoyaltyType } from "../../../typed/royalty-details";
import { getEventStatus } from "../../../utils/getEventStatus";

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
    return <div>Loading..</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  if (!data) {
    return <div>No Data</div>;
  }

  return (
    <div className="flex flex-1 flex-col">
      <Head>
        <title>GiveTree - {data.campaign.title}</title>
      </Head>

      <CampaignBannerHeader
        backgroundImage={data.campaign.media.campaignBannerUrl}
        campaignTitle={data.campaign.title}
        floorPrice={data.campaign.floorPrice}
        totalSupply={data.campaign.totalSupply}
        currency={data.campaign.currency}
        isVerified={data.campaign.isVerified}
        isFeatured
      />

      <div className="flex flex-col w-full max-w-screen-3xl mx-auto space-y-12 my-6 sm:my-8 px-3">
        <ContentCreatorTile
          name={data.campaign.creators[0].name}
          description={data.campaign.creators[0].description}
          imageAsset={data.campaign.creators[0].media.previewUrl}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 my-12 space-y-6 sm:space-y-8 lg:space-y-0">
          <div className="flex flex-col items-center w-full space-y-6 lg:col-span-7 sm:space-y-8">
            <CollectionDetailTile
              description={data.campaign.shortDescription}
              floorPrice={data.campaign.floorPrice}
              currency={data.campaign.currency}
              title={data.campaign.title}
              totalSupply={data.campaign.totalSupply}
              websiteUrl={data.campaign.websiteUrl}
              discordUrl={data.campaign.discordUrl}
              twitterUrl={data.campaign.twitterUrl}
              contractUrl={data.campaign.contractUrl}
              isLive={getEventStatus(data.campaign.event.rounds).isLive}
            />

            <CausesTile
              royaltyPercentage={getRoyaltyPercentage(
                data.campaign.royalties,
                RoyaltyType.CharityDonation
              )}
              causes={data.campaign.nominatedCharity.causes}
            />

            <MintingEventTile
              rounds={data.campaign.event.rounds}
              currency={data.campaign.currency}
            />
          </div>

          <div className="flex flex-col items-center sm:col-span-2 lg:col-span-5">
            <GoToMintTile
              linkTo={data.campaign.slug}
              imageAsset={data.campaign.media.campaignCollectionPreviewUrl}
            />

            <CharityTile
              name={data.campaign.nominatedCharity.name}
              description={`${getRoyaltyPercentage(
                data.campaign.royalties,
                RoyaltyType.CharityDonation
              )}% of ${data.campaign.title} mints go to`}
              imageAsset={data.campaign.nominatedCharity.media.tileUrl}
            />
          </div>
        </div>

        <GradientDivider />

        <div className="grid grid-cols-1 sm:grid-cols-6 mt-12">
          <div className="col-span-3 sm:col-span-2">
            <div className="relative w-full h-96">
              <BackgroundAsset
                asset={data.campaign.media.campaignDetailsUrl}
                className="shadow-lg rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col col-span-3 px-2 mt-2 space-y-5 sm:col-span-4 sm:mt-0 sm:px-5">
            <h3 className="text-3xl font-semibold sm:text-4xl">{data.campaign.title}</h3>
            <SocialGrid
              websiteUrl={data.campaign.websiteUrl}
              twitterUrl={data.campaign.twitterUrl}
              discordUrl={data.campaign.discordUrl}
            />

            <p>{data.campaign.longDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
