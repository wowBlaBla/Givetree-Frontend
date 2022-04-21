import type { NextPage } from "next";
import Head from "next/head";
import { MainBanner } from "../components/MainBanner";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>GiveTree</title>
        <meta name="description" content="This is the GiveTree NFT Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative lg::pb-24">
        <MainBanner />
      </div>
    </div>
  );
};

export default Home;
