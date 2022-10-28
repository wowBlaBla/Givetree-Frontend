import React from "react";
import { useQuery } from "@apollo/client";
import Head from "next/head";

import { GetCampaignListingDataQuery, GET_CAMPAIGN_LISTING_DATA } from "./ListingData";

import { PlatformRoute } from "../../../configs/routes";
import { CampaignCard } from "../../../components/cards/CampaignCard";
import { CardGrid } from "../../../components/CardGrid";
import { Carousel } from "../../../components/Carousel";
import { SectionHeader } from "../../../components/SectionHeader";

import MulgaBannerImage from "../../../temp/images/campaigns/mulgakongz-bg.png";
import { SectionContainer } from "../../../components/SectionContainer";
import { CampaignBanner } from "../../../components/CampaignBanner";
import { getRoyaltyPercentage } from "../../../utils/getRoyaltyPercentage";
import { RoyaltyType } from "../../../typed/royalty-details";
import { LoadingContainer } from "../../../components/LoadingContainer";
import { ErrorContainer } from "../../../components/ErrorContainer";

export const CampaignListingContainer = (): JSX.Element => {
  const { data, loading, error } = useQuery<GetCampaignListingDataQuery>(
    GET_CAMPAIGN_LISTING_DATA
  );

  if (loading) {
    return <LoadingContainer message="Loading mints..." />;
  }

  if (error) {
    return <ErrorContainer message="Could not load mints." />;
  }

  if (!data) {
    return <ErrorContainer message="Could not load mints." />;
  }

  return (
    <div>
      <Head>
        <title>GiveTree - Expore all mints</title>
      </Head>

      <SectionHeader
        className="my-6 sm:my-8"
        mainTitle="Explore all Mints"
        subtitle="Discover current and upcoming mints for new NFT collections"
        textCenter
      />

      <Carousel>
        {data.featuredCampaigns.map((campaign, idx) => (
          <CampaignBanner
            key={idx}
            backgroundAsset={campaign.media.campaignBannerUrl}
            title={campaign.title}
            subtitle={`${getRoyaltyPercentage(
              campaign.royalties,
              RoyaltyType.CharityDonation
            )}% of ${campaign.title} mints go to ${
              campaign.nominatedCharity.name
            } charity.`}
            ctaLink={`/mints/${campaign.slug}`}
            ctaLinkText="View mint"
            artistName={campaign.creators[0].name}
            artistThumbnail={campaign.creators[0].media.previewUrl}
            charityName={campaign.nominatedCharity.name}
            charityThumbnail={campaign.nominatedCharity.media.previewUrl}
            causes={campaign.nominatedCharity.causes}
          />
        ))}
      </Carousel>

      <SectionContainer className="max-w-layout-l mx-auto mt-12">
        <CardGrid>
          {data.campaigns.map((campaign, idx) => (
            <CampaignCard key={idx} campaign={campaign} />
          ))}
        </CardGrid>
      </SectionContainer>
    </div>
  );
};
