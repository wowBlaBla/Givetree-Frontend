import React from "react";
import { useQuery } from "@apollo/client";
import Head from "next/head";
import { useParams } from "react-router-dom";
import { GetCharityDetailsDataQuery, GET_CHARITY_DETAILS_DATA } from "./DetailsData";
import { BackgroundAsset } from "../../../components/BackgroundAsset";
import { SocialGrid } from "../../../components/SocialGrid";
import { LoadingContainer } from "../../../components/LoadingContainer";
import { ErrorContainer } from "../../../components/ErrorContainer";
import { PrimaryLink } from "../../../components/PrimaryButton";

export const CharityDetailsContainer = () => {
  const params = useParams();

  const { data, loading, error } = useQuery<GetCharityDetailsDataQuery>(
    GET_CHARITY_DETAILS_DATA,
    {
      variables: { slug: params.charityName },
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
    <div className="w-full mx-auto">
      <Head>
        <title>GiveTree - {data.charity.name}</title>
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 w-full max-w-screen-3xl mx-auto my-6 sm:my-8 px-3">
        <div className="flex flex-col space-y-5">
          <div className="relative pt-full">
            <BackgroundAsset
              asset={data.charity.media.previewUrl}
              className="border rounded-xl shadow-lg"
            />
          </div>

          <div className="flex justify-center items-center space-x-4">
            <PrimaryLink href="#">Donate</PrimaryLink>
            <PrimaryLink href="#">Fundraiser</PrimaryLink>
          </div>
        </div>

        <div className="flex flex-col space-y-3 px-2">
          <h3 className="text-3xl sm:text-4xl xl:text-5xl font-bold">
            {data.charity.name}
          </h3>

          <SocialGrid websiteUrl="#" twitterUrl="#" discordUrl="#" />

          <div className="flex items-center space-x-1 sm:space-x-3 mt-3">
            <h3 className="text-xs sm:text-sm text-gray-600 font-semibold">
              Causes we support:
            </h3>

            <div className="flex flex-wrap space-x-1">
              {data.charity.causes.map((cause, idx) => (
                <div
                  key={idx}
                  className="border bg-green-600 rounded-full px-2 sm:px-3 py-1 text-white text-xs sm:text-sm"
                >
                  {cause}
                </div>
              ))}
            </div>
          </div>

          <p className="mt-5 text-base lg:text-lg">{data.charity.description}</p>
        </div>
      </div>
    </div>
  );
};
