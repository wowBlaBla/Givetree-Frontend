import React from "react";
import Head from "next/head";

import { SectionTitle } from "../../../components/SectionTitle";
import { useParams } from "react-router-dom";

export const CharityDetailsContainer = () => {
  const params = useParams();

  console.log(params);

  return (
    <div className="w-full mx-auto">
      <Head>
        <title>GiveTree - Charity</title>
      </Head>

      <div className="flex relative flex-col flex-1 w-full max-w-screen-3xl mx-auto mt-6 sm:mt-12 p-5">
        <SectionTitle>Impact Partners</SectionTitle>
      </div>
    </div>
  );
};
