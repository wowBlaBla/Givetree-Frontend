import React from "react";
import { useQuery } from "@apollo/client";
import Head from "next/head";

import { GetHomeDataQuery, GET_HOME_DATA } from "./HomeData";
import { PlatformRoute } from "../../configs/routes";
import { CharityCard } from "../../components/cards/CharityCard";
import { SectionContainer } from "../../components/SectionContainer";
import { SectionHeader } from "../../components/SectionHeader";
import { CardGrid } from "../../components/CardGrid";
import { CampaignCard } from "../../components/cards/CampaignCard";
import { LoadingContainer } from "../../components/LoadingContainer";
import { ErrorContainer } from "../../components/ErrorContainer";
import { MainBanner } from "../../components/MainBanner";
import { PrimaryLink } from "../../components/PrimaryCta";
import MulgaBannerImage from "./../../temp/images/campaigns/mulgakongz-bg.png";

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

  return (
    <div className="w-full mx-auto">
      <Head>
        <title>GiveTree</title>
        <meta name="description" content="This is the GiveTree NFT Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative">
        <MainBanner
          backgroundAsset={MulgaBannerImage.src}
          title="Mulgakongz by MulgaTheArtist"
          subtitle="4% of every single NFT minted is donated to Kids Learn Art"
          ctaLink1={PlatformRoute.CampaignListing}
          ctaLink1Text="Go to launchpad"
        />
      </div>

      <SectionContainer>
        <SectionHeader
          mainTitle="Upcoming collections"
          linkText="View more"
          link={PlatformRoute.CampaignListing}
        />

        <CardGrid>
          {data.campaigns.slice(0, 4).map((campaign, idx) => (
            <CampaignCard key={idx} campaign={campaign} />
          ))}
        </CardGrid>
      </SectionContainer>

      <SectionContainer>
        <SectionHeader
          mainTitle="Our charity partners"
          linkText="View more"
          link={PlatformRoute.CharityListing}
        />

        <CardGrid>
          {data.charities.slice(0, 4).map((charity, idx) => (
            <CharityCard key={idx} charity={charity} />
          ))}
        </CardGrid>
        <div className="flex sm:hidden justify-center mt-8">
          <PrimaryLink href={PlatformRoute.CharityListing}>View More</PrimaryLink>
        </div>
      </SectionContainer>
    </div>
  );
};
