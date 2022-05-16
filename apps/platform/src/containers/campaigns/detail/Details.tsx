import React, { FC } from "react";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
// import * as yup from "yup";

import { GetCampaignDetailsDataQuery, GET_CAMPAIGN_DETAILS_DATA } from "./DetailsData";
import { BackgroundImage } from "../../../components/BackgroundImage";
import { GradientDivider } from "../../../components/GradientDivider";
import { SocialsGrid } from "../../../components/SocialsGrid";
import { MintingEventTile } from "../../../components/tiles/MintingEventTile";
import { CharityTile } from "../../../components/tiles/CharityTile";
import { CausesTile } from "../../../components/tiles/CausesTile";
import { ContentCreatorTile } from "../../../components/tiles/ContentCreatorTile";
import { CollectionDetailTile } from "../../../components/tiles/CollectionDetailTile";
import { GoToMintTile } from "../../../components/tiles/GoToMintTile";
import { CampaignBannerHeader } from "../../../components/CampaignBannerHeader";
import { getRoyaltyPercentage } from "../../../utils/getRoyaltyPercentage";
import { RoyaltyType } from "../../../typed/royalty-details";
import { isEventLive } from "../../../utils/getEventStatus";

// interface CampaignDetailsParams {
//   campaignName: string;
// }

// const CampaignDetialsParamsSchema: yup.SchemaOf<CampaignDetailsParams> = yup.object({
//   campaignName: yup.string().required(),
// });

export const CampaignDetailsContainer: FC = () => {
  const params = useParams();

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
    <div className="flex flex-col flex-1">
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

      <div className="w-full max-w-screen-3xl  mx-auto py-6 sm:py-8 px-3 sm:px-5">
        <ContentCreatorTile
          name={data.campaign.creators[0].name}
          description={data.campaign.creators[0].description}
          imageAsset={data.campaign.creators[0].media.previewUrl}
        />

        <div className="grid grid-cols-1 my-12 space-y-6 lg:grid-cols-12 lg:gap-8 lg:space-y-0 sm:my-16">
          <div className="flex flex-col items-center w-full space-y-5 lg:col-span-7 sm:space-y-10">
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
              isLive={isEventLive(data.campaign.mintStartDate, data.campaign.mintEndDate)}
            />

            <CausesTile
              charityRoyaltyPercentage={getRoyaltyPercentage(
                data.campaign.royalties,
                RoyaltyType.CharityDonation
              )}
              causes={data.campaign.nominatedCharity.causes}
            />

            <MintingEventTile
              rounds={data.campaign.event.rounds}
              startDate={data.campaign.mintStartDate}
              endDate={data.campaign.mintEndDate}
              currency={data.campaign.currency}
            />
          </div>

          <div className="flex flex-col items-center px-1 sm:col-span-2 lg:col-span-5 sm:mt-0">
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

        <div className="grid grid-cols-1 mt-12 sm:grid-cols-6 sm:mt-16">
          <div className="col-span-3 sm:col-span-2">
            <div className="relative w-full h-96">
              <BackgroundImage
                className="shadow-lg rounded-lg"
                imageAsset={data.campaign.media.campaignDetailsUrl}
              />
            </div>
          </div>

          <div className="flex flex-col col-span-3 px-2 mt-2 space-y-5 sm:col-span-4 sm:mt-0 sm:px-5">
            <h3 className="text-3xl font-semibold sm:text-4xl">{data.campaign.title}</h3>
            <SocialsGrid
              websiteUrl={data.campaign.websiteUrl}
              twitterUrl={data.campaign.twitterUrl}
              discordUrl={data.campaign.discordUrl}
            />

            <ReactMarkdown>{data.campaign.longDescription}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};
