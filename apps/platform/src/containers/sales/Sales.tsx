import { FC, useEffect, useState } from "react";
import cx from "classnames";
import { CollectionBadge } from "../../components/badges/CollectionBadge";
import { PolygonIcon } from "../../components/icons/cryptos/PolygonIcon";
import MulgaKongz from "../../temp/images/campaigns/mulgakongz-collection.png";
import { CampaignDescription, PriceDescription } from "../../configs/collectionText";
import { Alchemy } from "alchemy-sdk";
import { ALCHEMY_NETWORK, NETWORK_NAME } from "../../configs/constants";
import { useWallet } from "../../context/WalletContext";
import { NFTMetaData } from "../../typed/campaign";
import Skeleton from "react-loading-skeleton";
import { NetworkIcon } from "../../components/icons/cryptos/NetworkIcon";
import axios from "axios";
import { LoadingContainer } from "../../components/LoadingContainer";
import { toast } from "react-toastify";

interface Props {
  network: string;
  collection: string;
  tokenId: string;
}

interface Listed {
  status: boolean;
  type: "fixed" | "auction";
  price: string;
  seller: string;
  quality: number;
}

interface Rate {
  [key: string]: string;
}

export const SalesContainer: FC<Props> = ({ network, collection, tokenId }) => {
  const { web3Instance, contracts, address: account } = useWallet();
  const [metadata, setMetadata] = useState<NFTMetaData>();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [fiatPrice, setFiatPrice] = useState<string>("");
  const [rates, setRates] = useState<Rate>({});
  const [isListed, setListed] = useState<Listed>({
    status: false,
    type: "fixed",
    price: "0",
    seller: "",
    quality: 0,
  });

  useEffect(() => {
    async function getSaleData() {
      if (!web3Instance) return;
      setLoading(true);
      const alchemy = new Alchemy(ALCHEMY_NETWORK[network as NETWORK_NAME]);
      const _metadata = await alchemy.nft.getNftMetadata(collection, tokenId);
      const marketplace = contracts?.marketplace;
      const sale = await marketplace?.methods.getListing(collection, tokenId).call();
      if (Number(sale.seller)) {
        let status = true;
        if (typeof sale.seller == "string") {
          if (sale.seller.toLowerCase() == account?.toLowerCase()) status = false;
        }
        console.log(sale);
        setListed({
          status: status,
          type: sale.listingType == "0" ? "fixed" : "auction",
          price: web3Instance.utils.fromWei(sale.price, "ether"),
          seller: sale.seller,
          quality: +sale.amount,
        });
      }
      setMetadata(_metadata);
      setLoading(false);
    }
    if (web3Instance && contracts) getSaleData();
  }, [web3Instance, contracts]);

  useEffect(() => {
    async function fetchRates() {
      let paymentToken = "ETH";
      switch (network) {
        case "ethereum":
          paymentToken = "ETH";
          break;
        case "polygon":
          paymentToken = "MATIC";
          break;
      }
      const res = await axios.get(
        `https://api.coinbase.com/v2/exchange-rates?currency=${paymentToken}`
      );
      const rates = res.data.data.rates;
      const price = +rates.AUD * +isListed.price;
      setFiatPrice(price.toFixed(2).toString());
    }

    if (network) fetchRates();
  }, [network, isListed]);

  const buy = async () => {
    const marketplace = contracts?.marketplace;
    if (!marketplace) return;
    const price = web3Instance?.utils.toWei(isListed.price, "ether");
    setLoading(true);
    try {
      switch (isListed.type) {
        case "fixed":
          await marketplace.methods.buySingle(collection, tokenId).send({
            from: account,
            value: price,
          });
          break;
        case "auction":
          await marketplace.methods.buySemi(collection, tokenId).send({
            from: account,
            value: Number(price) * isListed.quality,
          });
          break;
      }
      toast.success("Bought NFT successfully");
    } catch (err) {}
    setLoading(false);
  };

  const placeBid = async () => {
    try {
    } catch (err) {}
  };

  return (
    <div className="w-full py-10 px-10">
      <div className="w-full max-w-[1280px] flex flex-wrap lg:flex-nowrap  justify-center mx-auto gap-10">
        <div className="lg:w-[487px] flex flex-col md:w-[508px] w-full aspect-square">
          <div className="preview-art w-inherit border border-base-100/25 rounded-2xl-1 ">
            {isLoading ? (
              <Skeleton
                className="w-full aspect-square !rounded-2xl-1"
                containerClassName="w-full flex !rounded-2xl-1"
              />
            ) : (
              <img
                src={metadata?.media[0].gateway}
                alt="art-work"
                className="w-full border border-base-100/25 rounded-2xl-1"
              />
            )}
          </div>
          <div className="meta-panel mt-5 text-base-100">
            <div className="border border-base-100/25 border-b-0 rounded-t-2xl-1 p-5">
              <span className="text-base">Description</span>
            </div>
            <div className="border border-base-100/25 border-b-0 p-5 min-h-40">
              {isLoading ? (
                <>
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </>
              ) : (
                <span>{metadata?.description}</span>
              )}
            </div>
            <div className="border border-base-100/25 border-b-0 p-5">
              <span className="text-base">Properties</span>
            </div>
            <div className="border border-base-100/25 border-b-0 p-5">
              <span className="text-base">About Artist</span>
            </div>
            <div className="border border-base-100/25 rounded-b-2xl-1 p-5">
              <span className="text-base">About Charity</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full text-base-100">
          <h1 className="text-6xl font-bold">
            {isLoading ? <Skeleton /> : metadata?.title}
          </h1>
          <ul className="list-none text-[18px] my-2">
            <li>
              <span className="uppercase">created by:</span>
              <span className="font-bold ml-1">Mulga the artist</span>
            </li>
            <li>
              <span className="uppercase">supporting:</span>
              <span className="font-bold ml-1">HalfCut</span>
            </li>
            <li>
              <span className="uppercase">donating:</span>
              <span className="font-bold ml-1">75%</span>
            </li>
          </ul>
          <div className="shadow-lg rounded-2xl-1">
            <div className="grid grid-cols-1 gap-1 pl-7 pr-4 pt-2 pb-6 border-[3px] border-base-100/25 rounded-t-2xl-1">
              <div className="text-right">
                {/* <CollectionBadge campaignName={campaignName}/> */}
              </div>
              <div>
                {/* <label className="md:text-xl text-base">{CampaignDescription[campaignName]} date x at time x</label> */}
              </div>
              <div className="">
                <label className="md:text-3xl text-xl">
                  2 days 3 hours 45 min 55 sec
                </label>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 pl-7 p-5 border-t-0 border-[3px] border-base-100/25 rounded-b-2xl-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                <div className="grid grid-cols-1">
                  {/* <label className="text-xl">{PriceDescription[campaignName]}</label> */}
                  <div className="flex items-center mt-2">
                    <NetworkIcon network={network} />
                    <span className="text-3xl ml-2 mr-6">{isListed.price}</span>
                    <span className="text-xl">(${fiatPrice} AUD)</span>
                  </div>
                </div>
                <div
                  className={cx(
                    "grid grid-cols-1"
                    // {"hidden": campaignName == 'mint' ? false : true}
                  )}
                >
                  <label className="text-xl">Supply</label>
                  <div className="flex items-center mt-2">
                    <span className="text-3xl ml-2 mr-6">5/20</span>
                  </div>
                </div>
              </div>
              <div className="mt-7">
                {
                  // campaignName == "mint" ? (
                  //     <button type="button" className="w-39 rounded-2xl-1 text-xl py-6 outline-button text-black">Mint</button>
                  // ) : (
                  // campaignName == "sale" ? (
                  //     <button type="button" className="w-39 rounded-2xl-1 text-xl py-6 primary-button text-white">Buy now</button>
                  // )
                  // : (
                  //     <button type="button" className="w-39 rounded-2xl-1 text-xl py-6 primary-button text-white">Bid</button>
                  // )
                  // )
                }
                {isLoading ? (
                  <Skeleton className="!w-40 h-18 border border-base-content/25 !rounded-2xl-1" />
                ) : (
                  <>
                    {isListed.status &&
                      (isListed.type == "fixed" ? (
                        <button
                          type="button"
                          className="w-39 rounded-2xl-1 text-xl py-6 primary-button text-white"
                          onClick={buy}
                        >
                          Buy now
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="w-39 rounded-2xl-1 text-xl py-6 primary-button text-white"
                          onClick={placeBid}
                        >
                          Place Bid
                        </button>
                      ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        {isLoading ? <LoadingContainer message="Buying down NFT from sale...." /> : ""}
      </div>
      <div className="bid-modal">
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Place a bid</h3>

            <div className="modal-action">
              <label htmlFor="my-modal-6" className="btn w-full">
                Place a bid
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
