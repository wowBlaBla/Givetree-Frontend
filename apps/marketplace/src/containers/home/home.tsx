import React from "react";
import Head from "next/head";
import Slider from "react-slick";
import { MarketplaceRoute } from "../../configs/routes";

import { CollectionCard } from "../../components/cards/CollectionCard";
import { MainBanner } from "../../components/MainBanner";
import { OutlineLink } from "../../components/OutlineButton";
import { SectionTitle } from "../../components/SectionTitle";
import { GridLayout } from "../../components/GridLayout";

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

export const HomeContainer = () => {
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
    <div className="w-full mx-auto">
      <Head>
        <title>GiveTree</title>
        <meta name="description" content="This is the GiveTree NFT Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative">
        <Slider {...sliderProps}>
          <MainBanner
            height="h-96 xl:h-128"
            imageAsset={GiveTreeBgImg.src}
            title="The GiveTree NFT Marketplace & Metaverse Game-For-Good"
            subtitle="A % of every single NFT transaction is donated to charity"
            teaser="Learn more about GiveTree"
            teaserLink="#"
            ctaLink1={MarketplaceRoute.CollectionListing}
            ctaLink1Text="Explore"
            ctaLink2="/"
            ctaLink2Text="Start Minting"
          />
          <MainBanner
            height="h-96 xl:h-128"
            imageAsset={MulgaBgImg.src}
            title="Mulgakongz by MulgaTheArtist"
            subtitle="4% of every single NFT minted is donated to Kids Learn Art"
            ctaLink1="/"
            ctaLink1Text="Go to launchpad"
          />
        </Slider>
      </div>

      <div className="flex relative flex-col flex-1 w-full max-w-screen-3xl mx-auto mt-12 sm:mt-16 p-5">
        <SectionTitle>Upcoming Collections</SectionTitle>

        <GridLayout>
          <CollectionCard
            status="Featured"
            creatorImageAsset={CreatorImage}
            imageAsset={MulgaKongzCollectionImage.src}
            creator="MulgaTheArtist"
            collectionName="Mulgakongz"
            eventDate="3 days"
            totalItems={4412}
            mintPrice={5}
          />

          <CollectionCard
            status="Featured"
            creatorImageAsset={GenopetsCreatorImage}
            imageAsset={GenopetsCollectionImage.src}
            creator="GenoPets"
            collectionName="Genopets"
            eventDate="5 Days"
            totalItems={5289}
            mintPrice={6.5}
          />

          <CollectionCard
            status="Featured"
            creatorImageAsset={CreatorImage}
            imageAsset={ForeverFriendsCollecitonImage.src}
            creator="GoodVibes"
            collectionName="Friends Forever"
            eventDate="27 Days"
            totalItems={19856}
            mintPrice={3}
          />

          <CollectionCard
            status="Featured"
            creatorImageAsset={YakucorpCreatorImage}
            imageAsset={YakucorpCollectionImage.src}
            creator="YakuCorp"
            collectionName="YAKU Corp."
            eventDate="11 Days"
            totalItems={4412}
            mintPrice={4.5}
          />

          <CollectionCard
            status="Featured"
            creatorImageAsset={CreatorImage}
            imageAsset={ForeverFriendsCollecitonImage.src}
            creator="GoodVibes"
            collectionName="Friends Forever"
            eventDate="27 Days"
            totalItems={19856}
            mintPrice={3}
          />

          <CollectionCard
            status="Featured"
            creatorImageAsset={YakucorpCreatorImage}
            imageAsset={YakucorpCollectionImage.src}
            creator="YakuCorp"
            collectionName="YAKU Corp."
            eventDate="11 Days"
            totalItems={4412}
            mintPrice={4.5}
          />

          <CollectionCard
            status="Featured"
            creatorImageAsset={CreatorImage}
            imageAsset={ZzCollecitonImage.src}
            creator="ZzTheArtist"
            collectionName="Zz"
            eventDate="31 Days"
            totalItems={9635}
            mintPrice={2.5}
          />

          <CollectionCard
            status="Featured"
            creatorImageAsset={GenopetsCreatorImage}
            imageAsset={GenopetsCollectionImage.src}
            creator="GenoPets"
            collectionName="Genopets"
            eventDate="5 Days"
            totalItems={5289}
            mintPrice={6.5}
          />
        </GridLayout>

        <div className="flex justify-center mt-8">
          <OutlineLink to={MarketplaceRoute.CollectionListing}>
            View More Collections
          </OutlineLink>
        </div>
      </div>
    </div>
  );
};
