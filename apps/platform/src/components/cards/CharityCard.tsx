import React, { FC } from "react";
import { BackgroundAsset } from "../BackgroundAsset";
import { DarkBlend } from "../BoxBlends";
import { FeaturedBadge } from "../badges/FeaturedBadge";
import { useNavigate } from "react-router-dom";
import { Charity } from "../../typed/charity";
import { OutlineLinkSm } from "../OutlineButton";

interface CharityCardProps {
  charity: Charity;
}

export const CharityCard: FC<CharityCardProps> = ({ charity }) => {
  const navigate = useNavigate();

  const handleNextLocation = () => navigate(`/impact-partners/${charity.slug}`);

  return (
    <div className="relative w-full rounded-xl shadow-lg bg-brand-black select-none cursor-pointer overflow-hidden">
      <FeaturedBadge
        className="absolute top-0 right-0 my-2.5 mx-2 z-10"
        text={charity.causes[0]}
      />

      <div className="relative pt-full" onClick={handleNextLocation}>
        <BackgroundAsset asset={charity.media.tileUrl} />
        <DarkBlend bottom small />
      </div>

      <div className="flex flex-col w-full rounded-lg justify-end bg-brand-black">
        <p className="text-center text-white text-lg sm:text-xl">{charity.name}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full p-2 text-white mt-1 z-20">
          <OutlineLinkSm className="text-center" href="#">
            Donate
          </OutlineLinkSm>
          <OutlineLinkSm className="text-center" href="#">
            Fundraiser
          </OutlineLinkSm>
        </div>
      </div>
    </div>
  );
};
