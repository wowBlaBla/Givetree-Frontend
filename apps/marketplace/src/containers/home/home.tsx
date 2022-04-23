import React from "react";
import Head from "next/head";
import Slider from "react-slick";
import { CollectionCard } from "../../components/cards/CollectionCard";
import { Banner } from "../../components/Banner";
import { OutlineLink } from "../../components/OutlineButton";
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
import { SectionTitle } from "../../components/SectionTitle";
import { MarketplaceRoute } from "../../configs/routes";

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
          <Banner
            height="h-96 xl:h-128"
            imageAsset={GiveTreeBgImg.src}
            title="The GiveTree NFT Marketplace & Metaverse Game-For-Good"
            subtitle="A % of every single NFT transaction is donated to charity"
            teaser="Lern more about GiveTree"
            teaserLink="#"
            ctaLink1={MarketplaceRoute.CollectionsListing}
            ctaLink1Text="Explore"
            ctaLink2="/"
            ctaLink2Text="Start Minting"
          />
          <Banner
            height="h-96 xl:h-128"
            imageAsset={MulgaBgImg.src}
            title="Mulgakongz by MulgaTheArtist"
            subtitle="4% of every single NFT minted is donated to Kids Learn Art"
            ctaLink1="/"
            ctaLink1Text="Go to launchpad"
          />
        </Slider>
      </div>

      <div className="flex relative flex-col flex-1 w-full max-w-screen-3xl mx-auto mt-6 sm:mt-16 p-5">
        <SectionTitle>Upcoming Collections</SectionTitle>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-6 sm:mt-10">
          <CollectionCard
            status="Featured"
            creatorImageAsset={CreatorImage}
            imageAsset={MulgaKongzCollectionImage}
            creator="MulgaTheArtist"
            title="Mulgakongz"
            eventDate="3 days"
            totalItems={4412}
            mintPrice={5}
          />
          <CollectionCard
            status="Featured"
            creatorImageAsset={GenopetsCreatorImage}
            imageAsset={GenopetsCollectionImage}
            creator="GenoPets"
            title="Genopets"
            eventDate="5 Days"
            totalItems={5289}
            mintPrice={6.5}
          />
          <CollectionCard
            status="Featured"
            creatorImageAsset={CreatorImage}
            imageAsset={ForeverFriendsCollecitonImage}
            creator="GoodVibes"
            title="Friends Forever"
            eventDate="27 Days"
            totalItems={19856}
            mintPrice={3}
          />
          <CollectionCard
            status="Featured"
            creatorImageAsset={YakucorpCreatorImage}
            imageAsset={YakucorpCollectionImage}
            creator="YakuCorp"
            title="YAKU Corp."
            eventDate="11 Days"
            totalItems={4412}
            mintPrice={4.5}
          />
          <CollectionCard
            status="Featured"
            creatorImageAsset={CreatorImage}
            imageAsset={ZzCollecitonImage}
            creator="ZzTheArtist"
            title="Zz"
            eventDate="31 Days"
            totalItems={9635}
            mintPrice={2.5}
          />

          <CollectionCard
            status="Featured"
            creatorImageAsset={CreatorImage}
            imageAsset={ZzCollecitonImage}
            creator="ZzTheArtist"
            title="Zz"
            eventDate="31 Days"
            totalItems={9635}
            mintPrice={2.5}
          />
          <CollectionCard
            status="Featured"
            creatorImageAsset={YakucorpCreatorImage}
            imageAsset={YakucorpCollectionImage}
            creator="YakuCorp"
            title="YAKU Corp."
            eventDate="11 Days"
            totalItems={4412}
            mintPrice={4.5}
          />

          <CollectionCard
            status="Featured"
            creatorImageAsset={CreatorImage}
            imageAsset={MulgaKongzCollectionImage}
            creator="MulgaTheArtist"
            title="Mulgakongz"
            eventDate="3 days"
            totalItems={4412}
            mintPrice={5}
          />
          <CollectionCard
            status="Featured"
            creatorImageAsset={GenopetsCreatorImage}
            imageAsset={GenopetsCollectionImage}
            creator="GenoPets"
            title="Genopets"
            eventDate="5 Days"
            totalItems={5289}
            mintPrice={6.5}
          />
          <CollectionCard
            status="Featured"
            creatorImageAsset={CreatorImage}
            imageAsset={ForeverFriendsCollecitonImage}
            creator="GoodVibes"
            title="Friends Forever"
            eventDate="27 Days"
            totalItems={19856}
            mintPrice={3}
          />
        </div>

        <div className="flex justify-center mt-8">
          <OutlineLink to={MarketplaceRoute.CollectionsListing}>
            View More Collections
          </OutlineLink>
        </div>
      </div>
    </div>
  );
};
