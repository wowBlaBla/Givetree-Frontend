import React, { FC } from "react";
import { useQuery } from "@apollo/client";
import Head from "next/head";

import { GetHomeDataQuery, GET_HOME_DATA } from "../home/home.data";
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
import Image from "next/image";
import backgroundImage from "../../assets/images/background.png";

type HomContainerProps = {
  isHome?: boolean;
};
const HomeContainer: FC<HomContainerProps> = ({ isHome = false }) => {
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
    <div className="w-full">
      <Head>
        <title>GiveTree</title>
        <meta name="description" content="This is the GiveTree NFT Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="relative h-[800px]"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex items-center w-full h-full">
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
      </div>

      <SectionContainer className="max-w-layout-l mx-auto">
        <SectionHeader
          mainTitle="Trusted by charity"
          linkText="View more"
          link={PlatformRoute.ExploreNFTFundraisers}
        />

        <div className="inline-grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
          {Array(18)
            .fill(0)
            .map((_, idx) => (
              <div
                key={`trusted-charity-card-${idx}`}
                className="flex w-[140px] h-[140px] rounded-xl bg-white px-8 cursor-pointer shadow-normal"
              >
                <Image
                  src={require(`../../temp/images/trusted/${idx + 1}.png`)}
                  alt=""
                  objectFit="contain"
                />
              </div>
            ))}
        </div>
      </SectionContainer>

      <SectionContainer className="max-w-layout-l mx-auto">
        <SectionHeader
          mainTitle="NFT Fundraisers"
          linkText="View more"
          link={PlatformRoute.ExploreNFTFundraisers}
        />

        <CardGrid>
          {data.campaigns.slice(0, 4).map((campaign, idx) => (
            <FundraiserCard key={idx} campaign={campaign} />
          ))}
        </CardGrid>
      </SectionContainer>

      <SectionContainer className="max-w-layout-l mx-auto">
        <SectionHeader
          mainTitle="Causes"
          linkText="View more"
          link={PlatformRoute.ExploreNFTFundraisers}
        />

        <div className="inline-grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
          {Array(18)
            .fill(0)
            .map((_, idx) => (
              <div
                key={`cause-card-${idx}`}
                className="flex w-[140px] h-[140px] cursor-pointer"
              >
                <Image
                  src={require(`../../temp/images/causes/${idx + 1}.png`)}
                  alt=""
                  objectFit="contain"
                />
              </div>
            ))}
        </div>
      </SectionContainer>

      <SectionContainer className="max-w-layout-l mx-auto">
        <SectionHeader
          mainTitle="Charities"
          linkText="View more"
          link={PlatformRoute.ExploreCharities}
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

export default HomeContainer;
