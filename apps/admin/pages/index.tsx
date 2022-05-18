import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-gray-900">
      <Head>
        <title>GiveTree</title>
        <meta name="description" content="This is the GiveTree NFT Admin portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
