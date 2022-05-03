import React from "react";
import Head from "next/head";
import Slider from "react-slick";

import { MainBanner } from "../../components/MainBanner";
import { CollectionCard } from "../../components/cards/CollectionCard";
import { GridLayout } from "../../components/GridLayout";
import { SectionHeader } from "../../components/SectionHeader";
import { MarketplaceRoute } from "../../configs/routes";

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

import CyberApeAvatarImage from "./../../assets/images/cyberape-avatar.jpeg";
import CyberApeCollecitonImage from "./../../assets/images/cyberape-collection.png";

export const CampaignListingContainer = (): JSX.Element => {
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
      <Head>
        <title>GiveTree - Expore all mints</title>
      </Head>

      <SectionHeader
        mainTitle="Explore all Mints"
        subtitle="Discover current and upcoming mints for new NFT collections"
      />

      <Slider className="relative mx-auto" {...sliderProps}>
        <MainBanner
          imageAsset={GiveTreeBgImg.src}
          title="The GiveTree NFT Marketplace & Metaverse Game-For-Good"
          subtitle="A % of every single NFT transaction is donated to charity"
          teaser="Learn more about GiveTree"
          teaserLink="#"
          ctaLink1={MarketplaceRoute.CampaignListing}
          ctaLink1Text="Explore"
          ctaLink2="/"
          ctaLink2Text="Start Minting"
          height="h-96"
        />

        <MainBanner
          imageAsset={MulgaBgImg.src}
          title="Mulgakongz by MulgaTheArtist"
          subtitle="4% of every single NFT minted is donated to Kids Learn Art"
          ctaLink1={MarketplaceRoute.CampaignListing}
          ctaLink1Text="Go to launchpad"
          height="h-96"
        />
      </Slider>

      <div className="flex relative flex-col flex-1 w-full max-w-screen-3xl mx-auto mt-12 sm:mt-16 p-5">
        <GridLayout>
          <CollectionCard
            hasStarted
            creatorImageAsset={GenopetsCreatorImage}
            imageAsset={GenopetsCollectionImage.src}
            creator="GenoPets"
            collectionName="Genopets"
            eventDate="3 Days"
            totalItems={5289}
            mintPrice={6.5}
          />

          <CollectionCard
            creatorImageAsset={CreatorImage}
            imageAsset={MulgaKongzCollectionImage.src}
            creator="MulgaTheArtist"
            collectionName="Mulgakongz"
            eventDate="6 days"
            totalItems={4412}
            mintPrice={5}
          />

          <CollectionCard
            creatorImageAsset={CreatorImage}
            imageAsset={ForeverFriendsCollecitonImage.src}
            creator="GoodVibes"
            collectionName="Friends Forever"
            eventDate="27 Days"
            totalItems={19856}
            mintPrice={3}
          />

          <CollectionCard
            creatorImageAsset={YakucorpCreatorImage}
            imageAsset={YakucorpCollectionImage.src}
            creator="YakuCorp"
            collectionName="YAKU Corp."
            eventDate="11 Days"
            totalItems={4412}
            mintPrice={4.5}
          />

          <CollectionCard
            creatorImageAsset={CreatorImage}
            imageAsset={ZzCollecitonImage.src}
            creator="ZzTheArtist"
            collectionName="Zz"
            eventDate="31 Days"
            totalItems={9635}
            mintPrice={2.5}
          />

          <CollectionCard
            creatorImageAsset={YakucorpCreatorImage}
            imageAsset={YakucorpCollectionImage.src}
            creator="YakuCorp"
            collectionName="YAKU Corp."
            eventDate="11 Days"
            totalItems={4412}
            mintPrice={4.5}
          />

          <CollectionCard
            creatorImageAsset={CreatorImage}
            imageAsset={ZzCollecitonImage.src}
            creator="ZzTheArtist"
            collectionName="Zz"
            eventDate="31 Days"
            totalItems={9635}
            mintPrice={2.5}
          />

          <CollectionCard
            creatorImageAsset={CyberApeAvatarImage}
            imageAsset={CyberApeCollecitonImage.src}
            creator="CyberApe"
            collectionName="Cyber Ape Age"
            eventDate="3 days"
            totalItems={3333}
            mintPrice={8}
          />
        </GridLayout>
      </div>
    </div>
  );
};
