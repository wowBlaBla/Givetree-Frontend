import React from "react";
import Slider from "react-slick";
import { Banner } from "../../components/Banner";

import GiveTreeBgImg from "./../../assets/images/givtree-bg-image.png";
import MulgaBgImg from "./../../assets/images/mulga-bg-image.png";
import CreatorImage from "../../assets/images/mulga-the-artist.png";
import MulgaKongzCollectionImage from "../../assets/images/mulgakongz-collection.png";
import GenopetsCollectionImage from "../../assets/images/genopets-collection.png";
import GenopetsCreatorImage from "../../assets/images/genopets-creator.png";
import YakucorpCollectionImage from "../../assets/images/yakucorp-collection.png";
import YakucorpCreatorImage from "../../assets/images/yakucorp-creator.jpeg";
import ForeverFriendsCollecitonImage from "../../assets/images/ff-collection.png";
import ZzCollecitonImage from "../../assets/images/zz-collection.png";
import { CollectionCard } from "../../components/cards/CollectionCard";
import { SectionTitle } from "../../components/SectionTitle";

export const CollectionListingsContainer = (): JSX.Element => {
  const sliderProps = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="flex flex-col items-center my-6 sm:my-12 space-y-3 px-4">
        <SectionTitle>Explore all Mints</SectionTitle>
        <h3 className="text-center text-sm sm:text-base">
          Discover current and upcoming mints for new NFT collections
        </h3>
      </div>

      <div className="relative">
        <Slider {...sliderProps}>
          <Banner
            imageAsset={GiveTreeBgImg.src}
            title="The GiveTree NFT Marketplace & Metaverse Game-For-Good"
            subtitle="A % of every single NFT transaction is donated to charity"
            teaser="Lern more about GiveTree"
            teaserLink="#"
            ctaLink1="/"
            ctaLink1Text="Explore"
            ctaLink2="/"
            ctaLink2Text="Start minting"
            height="h-96"
          />
          <Banner
            imageAsset={MulgaBgImg.src}
            title="Mulgakongz by MulgaTheArtist"
            subtitle="4% of every single NFT minted is donated to Kids Learn Art"
            ctaLink1="/"
            ctaLink1Text="Go to launchpad"
            height="h-96"
          />
        </Slider>
      </div>

      <div className="flex relative flex-col flex-1 w-full max-w-screen-3xl mx-auto mt-12 sm:mt-16 p-5">
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

          <CollectionCard
            creatorImageAsset={CreatorImage}
            imageAsset={ZzCollecitonImage}
            creator="ZzTheArtist"
            title="Zz"
            eventDate="31 Days"
            totalItems={9635}
            mintPrice={2.5}
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
        </div>
      </div>
    </div>
  );
};
