import React, { FC, useEffect, useState } from "react";
import { useLocation, useRoute } from "wouter";
import { BackgroundImage } from "../BackgroundImage";
import { NFTMetaData } from "../../typed/campaign";
import { VerifiedBadge } from "../badges/VerifiedBadge";
import { VerifiedBadgeType } from "../../typed/enum/verifiedBadgeType";
import { ImageDefaultIcon } from "../icons/ImageDefaultIcon";
import { CloudDownloadIcon, CloudUploadIcon } from "@heroicons/react/solid";
import { useWallet } from "../../context/WalletContext";
import { toast } from "react-toastify";
import { NetworkIcon } from "../icons/cryptos/NetworkIcon";

interface NFTCardProps {
  nft: NFTMetaData;
}

interface Listed {
  status: boolean;
  type: "fixed" | "auction";
  price: string;
  seller: string;
}

export const NFTCard: FC<NFTCardProps> = ({ nft }) => {
  const [_location, setLocation] = useLocation();
  const [match] = useRoute("/explore/:category");
  const { networkName, contracts, address: account, web3Instance } = useWallet();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isListed, setListed] = useState<Listed>({
    status: false,
    type: "fixed",
    price: "0",
    seller: "",
  });

  useEffect(() => {
    async function getSaleData() {
      if (!web3Instance) return;
      setLoading(true);
      const marketplace = contracts?.marketplace;
      const sale = await marketplace?.methods
        .getListing(nft.contract.address, nft.tokenId)
        .call();
      if (Number(sale.seller)) {
        setListed({
          status: true,
          type: sale.type == "0" ? "fixed" : "auction",
          price: web3Instance.utils.fromWei(sale.price, "ether"),
          seller: sale.seller,
        });
      }
      setLoading(false);
    }

    if (nft && contracts?.marketplace && web3Instance) {
      getSaleData();
    }
  }, [nft, contracts, web3Instance]);

  const listDown = async () => {
    if (!isListed || !contracts?.marketplace) return;
    try {
      setLoading(true);
      const marketplace = contracts?.marketplace;
      const params = {
        pending: "Listing down NFT from sale.....",
        success: "Listed Down successfully",
        error: "Failed listing down",
      };
      toast.promise(async () => {
        await marketplace.methods
          .cancelListing(nft.contract.address, nft.tokenId)
          .send({ from: account });
        // await axios.delete(
        //   `${process.env.NEXT_PUBLIC_API}/api/sales`
        // );
      }, params);
    } catch (err) {}
    setLoading(false);
  };

  const handleNextLocation = () =>
    setLocation(
      `/profile/new-listing/${networkName}/${nft.contract.address}/${nft.tokenId}`
    );

  const handleToSale = () =>
    setLocation(`/asset/${networkName}/${nft.contract.address}/${nft.tokenId}`);

  const handleAcution = () => setLocation(`/auction/111111111`);

  return (
    <div className="fundraiser-card text-center h-full">
      <div
        className="bg-white relative w-full h-full inline-block cursor-pointer shadow-normal hover:shadow-xl rounded-xl border border-[#3C3C3C]"
        onClick={() => (match ? handleToSale() : handleAcution())}
      >
        <div className="flex flex-col w-full h-full relative text-center nft-item">
          <div className="card-image relative">
            {
              <span className="rounded-full bg-base-content/80 absolute top-4 left-4">
                <NetworkIcon network={networkName} />
              </span>
            }
            {nft?.media[0]?.gateway ? (
              <BackgroundImage
                imageAsset={nft.media[0].gateway}
                className="rounded-t-xl"
              />
            ) : (
              <div className="flex items-center justify-center w-full aspect-square">
                <ImageDefaultIcon className="w-20 h-20 text-base-content" />
              </div>
            )}
          </div>
          <div className="card-body flex-col justify-between w-full rounded-b-xl border-t-0 border h-28 relative !justify-start">
            <div className="flex justify-between w-full text-xs sm:text-sm">
              <div className="flex w-full flex-col text-black items-start">
                <span className="font-bold text-base">
                  {nft.title ? nft.title : "Unamed"}
                  <VerifiedBadge
                    isVerified={nft.title ? true : false}
                    type={VerifiedBadgeType.Collection}
                    className="ml-1 inline-block"
                  />
                </span>
                {isListed.status ? (
                  <span className="font-bold text-sm">{isListed.price} ETH</span>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          {!isLoading && (
            <>
              {isListed.status ? (
                <span
                  className="text-white absolute z-50 top-4 border rounded-full p-1 bg-black/50 btn-list"
                  onClick={listDown}
                >
                  <CloudDownloadIcon className="w-6 h-6" />
                </span>
              ) : (
                <span
                  className="text-white absolute z-50 top-4 border rounded-full p-1 bg-black/50 btn-list"
                  onClick={handleNextLocation}
                >
                  <CloudUploadIcon className="w-6 h-6" />
                </span>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
