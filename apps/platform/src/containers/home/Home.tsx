import React from "react";
import { useQuery } from "@apollo/client";
import Head from "next/head";

import { GetHomeDataQuery, GET_HOME_DATA } from "./HomeData";
import { PlatformRoute } from "../../configs/routes";
import { CharityCard } from "../../components/cards/CharityCard";
import { SectionContainer } from "../../components/SectionContainer";
import { SectionHeader } from "../../components/SectionHeader";
import { CardGrid } from "../../components/CardGrid";
import { LoadingContainer } from "../../components/LoadingContainer";
import { ErrorContainer } from "../../components/ErrorContainer";
import { CampaignBanner } from "../../components/CampaignBanner";

import { getRoyaltyPercentage } from "../../utils/getRoyaltyPercentage";
import { RoyaltyType } from "../../typed/royalty-details";
import { FundraiserCard } from "../../components/cards/FundraiserCard";

export const HomeContainer = () => {
  const { data, error, loading } = useQuery<GetHomeDataQuery>(GET_HOME_DATA);

  if (loading) {
    return <LoadingContainer message="Loading collections..." />;
  }

  if (error) {
    return <ErrorContainer message="Failed to load collections." />;
  }

  if (!data) {
    return <ErrorContainer message="Failed to load collections." />;
  }

  // console.log("DATAA", data);
  return (
    <div className="w-full mx-auto">
      <Head>
        <title>GiveTree</title>
        <meta name="description" content="This is the GiveTree NFT Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative md:my-16">
        <CampaignBanner
          backgroundAsset={data.homepageCampaign.media.campaignBannerUrl}
          title={data.homepageCampaign.title}
          subtitle={`${getRoyaltyPercentage(
            data.homepageCampaign.royalties,
            RoyaltyType.CharityDonation
          )}% of ${data.homepageCampaign.title} mints go to ${
            data.homepageCampaign.nominatedCharity.name
          } charity.`}
          ctaLink={`/mints/${data.homepageCampaign.slug}`}
          ctaLinkText="View mint"
          artistName={data.homepageCampaign.creators[0].name}
          artistThumbnail={data.homepageCampaign.creators[0].media.previewUrl}
          charityName={data.homepageCampaign.nominatedCharity.name}
          charityThumbnail={data.homepageCampaign.nominatedCharity.media.previewUrl}
          causes={data.homepageCampaign.nominatedCharity.causes}
        />
      </div>

      <SectionContainer className="max-w-xxl">
        <SectionHeader
          mainTitle="NFT Fundraisers"
          linkText="View more"
          link={PlatformRoute.FundraiserDetails}
        />

        <CardGrid>
          {data.campaigns.slice(0, 4).map((campaign, idx) => (
            <FundraiserCard key={idx} campaign={campaign} />
          ))}
        </CardGrid>
      </SectionContainer>

      <SectionContainer className="max-w-xxl">
        <SectionHeader
          mainTitle="Support the causes you love"
          linkText="View more"
          link={PlatformRoute.CharityListing}
        />

        <CardGrid>
          {data.charities.slice(0, 4).map((charity, idx) => (
            <CharityCard key={idx} charity={charity} />
          ))}
        </CardGrid>
      </SectionContainer>
    </div>
  );
};
