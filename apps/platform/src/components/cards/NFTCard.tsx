import React, { FC } from "react";
import { useLocation } from "wouter";

import { BackgroundImage } from "../BackgroundImage";
import { NFTMetaData } from "../../typed/campaign";
import { VerifiedBadge } from "../badges/VerifiedBadge";
import { VerifiedBadgeType } from "../../typed/enum/verifiedBadgeType";
import { ImageDefaultIcon } from "../icons/ImageDefaultIcon";

interface NFTCardProps {
  nft: NFTMetaData;
}

export const NFTCard: FC<NFTCardProps> = ({ nft }) => {
  const [_location, setLocation] = useLocation();
  // const isLive = getEventStatus(nft.event.rounds).isLive;
  const handleNextLocation = () => setLocation(`/asset/${nft.contract.address}/${nft.tokenId}`);
  return (
    <div className="fundraiser-card text-center h-full">
      <div
        className="bg-white relative w-full h-full inline-block cursor-pointer shadow-normal hover:shadow-xl rounded-xl border border-[#3C3C3C]"
        onClick={handleNextLocation}
      >
        <div className="flex flex-col w-full h-full relative text-center">
          <div className="card-image relative">
            {
              nft.media[0]?.gateway ? (
                <BackgroundImage
                  imageAsset={nft.media[0].gateway}
                  className="rounded-t-xl"
                />
              ) : (
                <div className="flex items-center justify-center w-full aspect-square">
                  <ImageDefaultIcon className="w-20 h-20 text-base-content"/>
                </div>
              )
            }
          </div>
          <div className="card-body flex-col justify-between w-full rounded-b-xl border-t-0 border h-28 relative !justify-start">
            <div className="flex justify-between w-full text-xs sm:text-sm">
              <div className="flex w-full flex-col text-black items-start">
                <span className="font-bold text-base-100">
                  {nft.title ? nft.title : "Unamed"}
                  <VerifiedBadge
                    isVerified={nft.title ? true : false}
                    type={VerifiedBadgeType.Collection}
                    className="ml-1 inline-block"
                  />
                  </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
