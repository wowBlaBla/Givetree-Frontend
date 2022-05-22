import React, { FC } from "react";
import { BackgroundAsset } from "../BackgroundAsset";
import { DarkBlend } from "../BoxBlends";
import { FeaturedBadge } from "../badges/FeaturedBadge";
import { useNavigate } from "react-router-dom";
import { Charity } from "../../typed/charity";

interface CharityCardProps {
  charity: Charity;
}

export const CharityCard: FC<CharityCardProps> = ({ charity }) => {
  const navigate = useNavigate();

  const handleLocationOnClick = () => {
    return navigate(`/impact-partners/${charity.slug}`);
  };

  return (
    <div
      className="relative w-full rounded-xl shadow-lg cursor-pointer overflow-hidden"
      onClick={handleLocationOnClick}
    >
      <div className="relative pt-full sm:min-h-72">
        <FeaturedBadge
          className="absolute top-0 right-0 my-2.5 mx-2 z-10"
          text={charity.causes[0]}
        />
        <BackgroundAsset asset={charity.media.tileUrl} />
      </div>
      <DarkBlend bottom small />s
      <p className="absolute bottom-0 w-full rounded-lg text-center p-1 text-white text-xs sm:text-lg z-10">
        {charity.name}
      </p>
    </div>
  );
};
