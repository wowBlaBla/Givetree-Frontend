import React, { FC, useEffect, useState } from "react";
import { useLocation, useRoute } from "wouter";
import { BackgroundImage } from "../BackgroundImage";
import { NFTMetaData } from "../../typed/campaign";
import { VerifiedBadge } from "../badges/VerifiedBadge";
import { VerifiedBadgeType } from "../../typed/enum/verifiedBadgeType";
import { ImageDefaultIcon } from "../icons/ImageDefaultIcon";
import { CloudDownloadIcon, CloudUploadIcon, EyeIcon } from "@heroicons/react/solid";
import { useWallet } from "../../context/WalletContext";
import { toast } from "react-toastify";
import { NetworkIcon } from "../icons/cryptos/NetworkIcon";
import { LoadingContainer } from "../LoadingContainer";
import axios from "axios";
import { IOffer } from "../../typed/collection";
import Skeleton from "react-loading-skeleton";
import { useAuth } from "../../context/AuthContext";

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
  const { logout } = useAuth();
  const [_location, setLocation] = useLocation();
  const [match] = useRoute("/explore/:category");
  const { networkName, contracts, address: account, web3Instance } = useWallet();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isProcessing, setProcessing] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [isListed, setListed] = useState<Listed>({
    status: false,
    type: "fixed",
    price: "0",
    seller: "",
  });
  const [offers, setOffers] = useState<IOffer[]>([]);

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
          type: sale.listingType == "0" ? "fixed" : "auction",
          price: web3Instance.utils.fromWei(sale.price, "ether"),
          seller: sale.seller,
        });
      }
      else {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_API}/api/sales`,
          {
            data: {
              network: networkName,
              collection: nft.contract.address,
              tokenId: nft.tokenId,
            }
          }
        );
      }
      setLoading(false);
    }

    if (nft && contracts?.marketplace && web3Instance) {
      getSaleData();
    }
  }, [nft, contracts, web3Instance, refresh]);

  const listDown = async () => {
    if (!isListed || !contracts?.marketplace) return;
    try {
      setProcessing(true);
      setMessage("Listing down");
      const marketplace = contracts?.marketplace;
      const _isListed = await marketplace.methods.getListing(nft.contract.address, nft.tokenId).call();
      if (!Number(_isListed.seller)) {
        setListed({
          ...isListed,
          status: false
        });
        throw Error("Already listed down");
      }
      if (_isListed.NFTtype == '1') {
        const existingBid = await marketplace.methods.getBidForAuction(nft.contract.address, nft.tokenId).call();
        if (existingBid.length) {
          throw Error(`NFT has ${existingBid.length} offers now`);
        }
      }

      await marketplace.methods.cancelListing(nft.contract.address, nft.tokenId).send({ from: account });
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API}/api/sales`,
        {
          data: {
            collection: nft.contract.address,
            tokenId: nft.tokenId,
            network: networkName
          }
        }
      ).then().catch();
      toast.success("Listed down successfully");
      setListed({
        ...isListed,
        status: false
      });
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API}/api/sales`,
        {
          data: {
            network: networkName,
            collection: nft.contract.address,
            tokenId: nft.tokenId,
            seller: isListed.seller
          }
        }
      ).then(() => {
        setLocation('/profile/nfts');
      }).catch(() => {
        logout();
      });
    } catch (err:any) {
      if (err?.code != 4001) {
        toast.error(err?.message);
      }
    }
    setProcessing(false);
    setRefresh(!refresh);
  };

  const fetchOffers = async() => {
    setOpenModal(true)
    setLoading(true);
    const marketplace = contracts?.marketplace;
    const offers = await marketplace?.methods.getBidForAuction(nft.contract.address, nft.tokenId).call();
    setOffers(offers);
    setLoading(false);
  }

  const finishAuction = async() => {
    try {
      setProcessing(true);
      setMessage("Finishing auction . . .");
      const marketplace = contracts?.marketplace;
      const isListed = await marketplace?.methods.getListing(nft.contract.address, nft.tokenId).call();
      if (!Number(isListed.seller)) throw Error("NFT is not listed");
      const timestamp = Date.now();
      if (+isListed.endAuctionTimestamp * 1000 > +timestamp) throw Error("NFT auction is pending yet");
      await marketplace?.methods.finishAuction(nft.contract.address, nft.tokenId).send({
        from: account
      });
      toast.success("Finished auction successfully");
      setOffers([]);
    } catch(err: any) {
      if (err?.code != 4001) {
        toast.error(err?.message)
      }
    }
    setOpenModal(false);
    setProcessing(false);
    setRefresh(!refresh);
  }

  const handleNextLocation = () =>
    setLocation(
      `/profile/new-listing/${networkName}/${nft.contract.address}/${nft.tokenId}`
    );

  const handleToSale = () =>
    setLocation(`/asset/${networkName}/${nft.contract.address}/${nft.tokenId}`);

  return (
    <div className="fundraiser-card text-center h-full">
      <div
        className="bg-white relative w-full h-full inline-block cursor-pointer shadow-normal hover:shadow-xl rounded-xl border border-[#3C3C3C]"
        onClick={() => (match ? handleToSale() : null)}
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
          {(!isLoading && !match) && (
            <>
              {isListed.status ? (
                <>
                  <span
                    className="text-white absolute z-50 top-4 border rounded-full p-1 bg-black/50 btn-list"
                    onClick={listDown}
                  >
                    <CloudDownloadIcon className="w-6 h-6" />
                  </span>
                  {
                    isListed.type == "auction" ? (
                      <span
                        className="text-white absolute z-50 top-14 border rounded-full p-1 bg-black/50 btn-list"
                        onClick={fetchOffers}
                      >
                        <EyeIcon className="w-6 h-6" />
                      </span>
                    ) : ""
                  }
                </>
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
          { isProcessing && <LoadingContainer message={`${message} . . .`}/> }
          <div className="bid-modal">
            <input type="checkbox" id="my-modal-6" className="modal-toggle" checked={openModal} readOnly />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box bg-white relative">
                <h3 className="font-bold text-lg text-center text-base-100">Finish auction</h3>
                <label
                  htmlFor="my-modal-3"
                  className="text-base-100 absolute right-4 top-4 cursor-pointer"
                  onClick={() => setOpenModal(false)}
                >✕</label>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3 items-center">
                      <div>
                        <img
                          src={nft?.media[0]?.gateway}
                          className="w-24 h-24 rounded-lg"
                          alt="art-work"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-bold text-lg text-base-100 text-left">{nft?.title ? nft?.title : "Untitled"}</label>
                        <label className="text-md">
                          {nft?.contract?.symbol ?? "Untitled"} : {nft?.contract?.name ?? "Untitled"}
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="font-bold text-lg text-base-100">{isListed.price} WETH</label>
                    </div>
                  </div>
                  <div className="offer-box border border-base-content max-h-60 overflow-y-auto">
                    <table className="table table-auto text-base-100 w-full">
                      <thead className="border-b border-base-100">
                        <tr>
                          <th className="font-bold py-2">Price</th>
                          <th className="font-bold py-2">From</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          isLoading ?
                          <>
                            <tr><td><Skeleton/></td><td><Skeleton/></td></tr>
                            <tr><td><Skeleton/></td><td><Skeleton/></td></tr>
                            <tr><td><Skeleton/></td><td><Skeleton/></td></tr>
                          </> :
                          <>
                            {
                              offers.map((item, idx) => (
                                <tr key={idx}>
                                  <td className="font-bold">{web3Instance?.utils.fromWei(item.bidPrice, 'ether')} <span >WETH</span></td>
                                  <td className={`${item.bider.toLowerCase() == account?.toLowerCase() ? "" : "uppercase"} font-bold`}>{ item.bider.toLowerCase() == account?.toLowerCase() ? "you" : item.bider.slice(-8)}</td>
                                </tr>
                              ))
                            }
                            {
                              (!isLoading && !offers.length) && <tr><td colSpan={2} className="text-center text-sm">No items to display</td></tr>
                            }
                          </>
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="modal-action">
                  <label
                    htmlFor="my-modal-6" className="btn btn-info w-full border-base-content bg-white text-base-100 hover:text-white"
                    onClick={finishAuction}
                  >
                    Finish Auction
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
