import React from "react";
import Head from "next/head";
// import { gql, useQuery } from "@apollo/client";

export const HomeContainer = () => {
  return (
    <div className="flex w-full mx-auto">
      <Head>
        <title>GiveTree - Partnerships</title>
        <meta name="description" content="This is the GiveTree NFT Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full text-center text-4xl font-semibold tracking-wide">
        Welcome to GiveTree Partnerships
      </div>
    </div>
  );
};
