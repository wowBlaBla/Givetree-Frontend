import React from "react";
import { useQuery } from "@apollo/client";
import Head from "next/head";
import { useParams } from "react-router-dom";

import { GetCharityDetailsDataQuery, GET_CHARITY_DETAILS_DATA } from "./DetailsData";

import { BackgroundAsset } from "../../../components/BackgroundAsset";
import { SocialGrid } from "../../../components/SocialGrid";

export const CharityDetailsContainer = () => {
  const params = useParams();

  const { data, loading, error } = useQuery<GetCharityDetailsDataQuery>(
    GET_CHARITY_DETAILS_DATA,
    {
      variables: { slug: params.charityName },
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
    <div className="w-full mx-auto">
      <Head>
        <title>GiveTree - {data.charity.name}</title>
      </Head>

      <div className="flex flex-col w-full max-w-screen-3xl mx-auto space-y-12 my-6 sm:my-8 px-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          <div className="flex flex-col">
            <div className="relative pt-full">
              <BackgroundAsset
                asset={data.charity.media.previewUrl}
                className="border rounded-xl shadow-lg"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-5">
            <div className="">
              <h3 className="text-3xl sm:text-4xl xl:text-5xl font-bold">
                {data.charity.name}
              </h3>

              <SocialGrid websiteUrl="#" />

              <p className="mt-5 text-base lg:text-lg">{data.charity.description}</p>
            </div>

            <div className="flex items-center space-x-2 w-auto mt-3">
              <span className="text-gray-600 font-semibold">Causes we support:</span>
              {data.charity.causes.map((cause, idx) => (
                <div
                  key={idx}
                  className="py-1 px-3 rounded-full border-2 border-green-600 text-green-600 text-xs font-semibold text-center"
                >
                  {cause}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
