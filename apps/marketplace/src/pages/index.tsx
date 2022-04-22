import type { NextPage } from "next";
import Head from "next/head";
import { CollectionCard } from "../components/cards/CollectionCard";
import { MainBanner } from "../components/MainBanner";
import { OutlineButton } from "../components/OutlineButton";

import CreatorImage from "../assets/images/mulga-the-artist.png";
import MulgaKongzCollectionImage from "../assets/images/mulgakongz-collection.png";
import GenopetsCollectionImage from "../assets/images/genopets-collection.png";
import GenopetsCreatorImage from "../assets/images/genopets-creator.png";
import YakucorpCollectionImage from "../assets/images/yakucorp-collection.png";
import YakucorpCreatorImage from "../assets/images/yakucorp-creator.jpeg";
import ForeverFriendsCollecitonImage from "../assets/images/ff-collection.png";
import ZzCollecitonImage from "../assets/images/zz-collection.png";

const Home: NextPage = () => {
  return (
    <div className="w-full mx-auto">
      <Head>
        <title>GiveTree</title>
        <meta name="description" content="This is the GiveTree NFT Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative">
        <MainBanner />
      </div>

      <div className="flex relative flex-col flex-1 w-full max-w-screen-3xl mx-auto mt-6 sm:mt-8 p-5">
        <h3 className="text-center text-2xl sm:text-3xl font-semibold">
          Upcoming Collections
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-6 sm:mt-10">
          <CollectionCard
            creatorImageAsset={CreatorImage}
            imageAsset={MulgaKongzCollectionImage}
            creator="MulgaTheArtist"
            title="Mulgakongz"
            eventDate="3 days"
            totalItems={4412}
            mintPrice={5}
          />
          <CollectionCard
            creatorImageAsset={GenopetsCreatorImage}
            imageAsset={GenopetsCollectionImage}
            creator="GenoPets"
            title="Genopets"
            eventDate="5 Days"
            totalItems={5289}
            mintPrice={6.5}
          />
          <CollectionCard
            creatorImageAsset={CreatorImage}
            imageAsset={ForeverFriendsCollecitonImage}
            creator="GoodVibes"
            title="Friends Forever"
            eventDate="27 Days"
            totalItems={19856}
            mintPrice={3}
          />
          <CollectionCard
            creatorImageAsset={YakucorpCreatorImage}
            imageAsset={YakucorpCollectionImage}
            creator="YakuCorp"
            title="YAKU Corp."
            eventDate="11 Days"
            totalItems={4412}
            mintPrice={4.5}
          />
          <CollectionCard
            creatorImageAsset={CreatorImage}
            imageAsset={ZzCollecitonImage}
            creator="ZzTheArtist"
            title="Zz"
            eventDate="31 Days"
            totalItems={9635}
            mintPrice={2.5}
          />

          <div className="hidden lg:flex"></div>
        </div>
        <div className="flex justify-center mt-6">
          <OutlineButton>View More Collections</OutlineButton>
        </div>
      </div>
    </div>
  );
};

export default Home;
