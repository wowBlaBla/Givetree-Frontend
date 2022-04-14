import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-900">
      <Head>
        <title>Give Tree</title>
        <meta name="description" content="This is the Give Tree NFT Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
