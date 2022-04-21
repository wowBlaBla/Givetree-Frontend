import type { NextPage } from "next";
import Head from "next/head";
import { CollectionCard } from "../components/cards/CollectionCard";
import { MainBanner } from "../components/MainBanner";
import { OutlineButton } from "../components/OutlineButton";
import NftImage from "../images/mulgakongz-nft-1.png";
import CreatorImage from "../images/mulga-the-artist.png";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>GiveTree</title>
        <meta name="description" content="This is the GiveTree NFT Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative">
        <MainBanner />
      </div>

      <div className="flex relative flex-col w-full mt-6 sm:mt-6 p-5">
        <h3 className="text-center text-2xl sm:text-3xl font-semibold">
          Upcoming Collections
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-6 sm:mt-12">
          <CollectionCard
            creatorImageAsset={CreatorImage}
            imageAsset={NftImage}
            creator="MulgaTheArtist"
            title="Mulgakongz"
            eventDate="3 days"
            totalItems={4412}
            mintPrice={5}
          />
          <CollectionCard
            creatorImageAsset={CreatorImage}
            imageAsset={NftImage}
            creator="MulgaTheArtist"
            title="Mulgakongz"
            eventDate="3 Days"
            totalItems={4412}
            mintPrice={5}
          />
          <CollectionCard
            creatorImageAsset={CreatorImage}
            imageAsset={NftImage}
            creator="MulgaTheArtist"
            title="Mulgakongz"
            eventDate="3 Days"
            totalItems={4412}
            mintPrice={5}
          />
          <CollectionCard
            creatorImageAsset={CreatorImage}
            imageAsset={NftImage}
            creator="MulgaTheArtist"
            title="Mulgakongz"
            eventDate="3 Days"
            totalItems={4412}
            mintPrice={5}
          />
        </div>
        <div className="flex justify-center mt-6 sm:mt-12">
          <OutlineButton>View More Collections</OutlineButton>
        </div>
      </div>
    </div>
  );
};

export default Home;
