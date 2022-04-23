import React from "react";
import Head from "next/head";
import ForeverFriendsCollecitonImage from "../../assets/images/ff-collection.png";
import { SectionTitle } from "../../components/SectionTitle";
import { ImpactPartnerCard } from "../../components/cards/ImpactPartnerCard";
import { PrimaryButton } from "../../components/PrimaryButton";

export const ImpactPartnerListingsContainer = () => {
  return (
    <div className="w-full mx-auto">
      <Head>
        <title>GiveTree - Impact partners</title>
      </Head>

      <div className="flex relative flex-col flex-1 w-full max-w-screen-3xl mx-auto mt-6 sm:mt-12 p-5">
        <SectionTitle>Impact Partners</SectionTitle>

        <div className="flex justify-center mt-5">
          <PrimaryButton className="w-auto">Register now</PrimaryButton>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6 sm:mt-10">
          <ImpactPartnerCard
            imageAsset={ForeverFriendsCollecitonImage.src}
            partnerName="Three Wise Monkeys"
            category="Wildlife preservation"
          />
          <ImpactPartnerCard
            imageAsset={ForeverFriendsCollecitonImage.src}
            partnerName="Three Wise Monkeys"
            category="Wildlife preservation"
          />
          <ImpactPartnerCard
            imageAsset={ForeverFriendsCollecitonImage.src}
            partnerName="Three Wise Monkeys"
            category="Wildlife preservation"
          />
          <ImpactPartnerCard
            imageAsset={ForeverFriendsCollecitonImage.src}
            partnerName="Three Wise Monkeys"
            category="Wildlife preservation"
          />
          <ImpactPartnerCard
            imageAsset={ForeverFriendsCollecitonImage.src}
            partnerName="Three Wise Monkeys"
            category="Wildlife preservation"
          />
          <ImpactPartnerCard
            imageAsset={ForeverFriendsCollecitonImage.src}
            partnerName="Three Wise Monkeys"
            category="Wildlife preservation"
          />
          <ImpactPartnerCard
            imageAsset={ForeverFriendsCollecitonImage.src}
            partnerName="Three Wise Monkeys"
            category="Wildlife preservation"
          />
          <ImpactPartnerCard
            imageAsset={ForeverFriendsCollecitonImage.src}
            partnerName="Three Wise Monkeys"
            category="Wildlife preservation"
          />
          <ImpactPartnerCard
            imageAsset={ForeverFriendsCollecitonImage.src}
            partnerName="Three Wise Monkeys"
            category="Wildlife preservation"
          />
          <ImpactPartnerCard
            imageAsset={ForeverFriendsCollecitonImage.src}
            partnerName="Three Wise Monkeys"
            category="Wildlife preservation"
          />
          <ImpactPartnerCard
            imageAsset={ForeverFriendsCollecitonImage.src}
            partnerName="Three Wise Monkeys"
            category="Wildlife preservation"
          />
          <ImpactPartnerCard
            imageAsset={ForeverFriendsCollecitonImage.src}
            partnerName="Three Wise Monkeys"
            category="Wildlife preservation"
          />
        </div>
      </div>
    </div>
  );
};
