import { FC, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ArrowDownIcon, ArrowLeftIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { Alchemy } from "alchemy-sdk";
import cx from "classnames";
import { Link, useLocation, useRoute } from "wouter";
import { NetworkIcon } from "../../components/icons/cryptos/NetworkIcon";
import { LoadingContainer } from "../../components/LoadingContainer";
import { RingSkeleton } from "../../components/skeleton/RingSkeleton";
import { ALCHEMY_NETWORK, EthereumNetwork, NETWORK_NAME } from "../../configs/constants";
import { PlatformRoute } from "../../configs/routes";
import { useAuth } from "../../context/AuthContext";
import { useWallet } from "../../context/WalletContext";
import { NFTMetaData } from "../../typed/campaign";
import moment from "moment";
import { IOffer, IOfferError } from "../../typed/collection";

interface Listed {
  status: boolean;
  type: "sale" | "auction";
  NFTtype: "ERC721" | "ERC1155",
  price: string;
  seller: string;
  quality: number;
  percent: number | string;
  endAuctionTimestamp: string | number
}

interface Rate {
  [key: string]: string;
}

export const SalesContainer: FC = () => {

  const [, params] = useRoute(PlatformRoute.AssetDetails);
  const [, setLocation] = useLocation();
  const { web3Instance, contracts, address: account } = useWallet();
  const { isAuth } = useAuth();
  const [metadata, setMetadata] = useState<NFTMetaData>();
  const [isAuctionEnd, setAuctionEnd] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isProcessing, setProcessing] = useState<boolean>(false);
  const [fiatPrice, setFiatPrice] = useState<string>("");
  const [bidPrice, setBidPrice] = useState<string>("");
  const [quality, setQuality] = useState<string>("");
  const [offers, setOffers] = useState<IOffer[]>([]);
  const [existedOffer, setExistedOffer] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [refresh, setRefresh] = useState<boolean>(false);
  const [isListed, setListed] = useState<Listed>({
    status: false,
    type: "sale",
    NFTtype: "ERC721",
    price: "0",
    seller: "",
    quality: 0,
    percent: 0,
    endAuctionTimestamp: 0
  });
  const [bidError, setBidError] = useState<IOfferError>({
    price: false, quality: false
  });

  useEffect(() => {
    async function getSaleData() {
      if (!web3Instance || !params) return;
      setLoading(true);
      const alchemy = new Alchemy(ALCHEMY_NETWORK[params?.network as NETWORK_NAME]);
      const _metadata = await alchemy.nft.getNftMetadata(params.collection, params.tokenId);
      const marketplace = contracts?.marketplace;
      const sale = await marketplace?.methods.getListing(params.collection, params.tokenId).call();
      if (Number(sale.seller)) {
        let status = true;
        if (typeof sale.seller == "string") {
          if (sale.seller.toLowerCase() == account?.toLowerCase()) status = false;
        }
        const timestamp = Date.now();
        if (timestamp > +sale.endAuctionTimestamp * 1000) setAuctionEnd(true);
        setListed({
          status: status,
          type: sale.listingType == "0" ? "sale" : "auction",
          NFTtype: sale.NFTtype == "0" ? "ERC721" : "ERC1155",
          price: web3Instance.utils.fromWei(sale.price, "ether"),
          seller: sale.seller,
          quality: +sale.amount,
          percent: sale.percent,
          endAuctionTimestamp: +sale.endAuctionTimestamp * 1000
        });
      }
      await fetchOffers();
      setMetadata(_metadata as NFTMetaData);
      setLoading(false);
    }
    if (web3Instance && contracts) getSaleData();
  }, [web3Instance, contracts, refresh]);

  useEffect(() => {
    async function fetchRates() {
      let paymentToken = "ETH";
      switch (params?.network) {
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

    if (params?.network) fetchRates();
  }, [params?.network, isListed, params]);

  const fetchOffers = async() => {
    if (!params) return;
    const marketplace = contracts?.marketplace;
    const offers = await marketplace?.methods.getBidForAuction(params.collection, params.tokenId).call();
    const existingOffer = offers.filter((item: IOffer) => item.bider.toLowerCase() == account?.toLowerCase());
    if (existingOffer.length) setExistedOffer(true);
    else setExistedOffer(false);
    setOffers(offers);
  }

  const buy = async () => {
    const marketplace = contracts?.marketplace;
    if (!marketplace || !params || !web3Instance) return;
    const price = web3Instance.utils.toWei(isListed.price, "ether");
    if (!isAuth || !account) setLocation('/login');

    try {
      setProcessing(true);
      setMessage("Purchasing NFT");
      const offers = await marketplace?.methods.getBidForAuction(params.collection, params.tokenId).call();
      const existingOffer = offers.filter((item: IOffer) => item.bider.toLowerCase() == account?.toLowerCase());
      if (existingOffer.length) throw Error("Already made offer");
      const balance = account ? await web3Instance.eth.getBalance(account) : "0";
      if (Number(balance) < Number(price)) throw Error("Insufficcient balance");
      switch (isListed.NFTtype) {
        case "ERC721":
          await marketplace.methods.buySingle(params.collection, params.tokenId).send({
            from: account,
            value: price,
          });
          break;
        case "ERC1155":
          await marketplace.methods.buySemi(params.collection, params.tokenId).send({
            from: account,
            value: Number(price) * isListed.quality,
          });
          break;
      }
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API}/api/sales`,
        {
          data: {
            network: params.network,
            collection: params.collection,
            tokenId: params.tokenId,
            seller: isListed.seller
          }
        }
      ).then(res => {
        setLocation('/profile/nfts');
      }).catch(err => {

      });
      toast.success("Bought NFT successfully");
    } catch (err) {}
    setProcessing(false);
    setRefresh(!refresh);
  };

  const placeBid = async () => {
    const marketplace = contracts?.marketplace;
    const paymentToken = contracts?.paymentToken;
    if (!marketplace || !params || !web3Instance || !paymentToken) return;
    if (!isAuth || !account) setLocation('/login');
    
    switch(isListed.NFTtype) {
      case "ERC721":
        if (+bidPrice < +isListed.price) {
          setBidError({
            ...bidError,
            price: true
          });
          return;
        } else {
          setBidError({
            ...bidError,
            price: false
          });
        }
        break;
      case "ERC1155":
        if (+quality > +isListed.quality) {
          setBidError({
            ...bidError,
            quality: true
          });  
          return;
        }  else {
          setBidError({
            ...bidError,
            quality: false
          });
        }
        break;
    }

    try {
      setProcessing(true);
      setMessage("Placing a bid");
      let _bidPrice: string;
      let allowance: string;
      let balance: string;
      const marketplaceAddr: string = EthereumNetwork.address.marketplace;
      switch (isListed.NFTtype) {
        case "ERC721":
          _bidPrice = web3Instance.utils.toWei(bidPrice, "ether");
          allowance = await paymentToken.methods.allowance(account, marketplaceAddr).call();
          balance = await paymentToken.methods.balanceOf(account).call();
          if (+balance < +_bidPrice) throw Error("Insufficcient balance");
          if (+allowance < +_bidPrice) {
            await paymentToken.methods.approve(marketplaceAddr, _bidPrice).send({
              from: account
            });
          }
          await marketplace.methods.bidForAuctionSingle(
            params.collection,
            params.tokenId,
            _bidPrice
          ).send({
            from: account
          });
          break;

        case "ERC1155":
          _bidPrice = web3Instance.utils.toWei((+bidPrice * +quality).toString(), "ether");
          allowance = await paymentToken.methods.allowance(account, marketplaceAddr).call();
          balance = await paymentToken.methods.balanceOf(account).call();
          if (+balance < +_bidPrice) throw Error("Insufficcient balance");
          if (+allowance < +_bidPrice) {
            await paymentToken.methods.approve(marketplaceAddr, _bidPrice).send({
              from: account
            });
          }
          await marketplace.methods.bidForAuctionSemi(
            params.collection,
            params.tokenId,
            quality,
            _bidPrice
          ).send({
            from: account
          });
          break;
      }

      toast.success("Placed bid successfully!");
    } catch (err:any) {
      if (err?.code != 4001) {
        toast.error(err?.message);
      }
    }
    setOpenModal(false);
    setProcessing(false);
    setRefresh(!refresh);
  };

  const cancelBid = async() => {
    try {
      if (!params) return;
      setProcessing(true);
      setMessage("Canceling bid");
      const marketplace = contracts?.marketplace;
      const offers = await marketplace?.methods.getBidForAuction(params.collection, params.tokenId).call();
      const existingOffer = offers.filter((item: IOffer) => item.bider.toLowerCase() == account?.toLowerCase());
      if (existingOffer.length) {
        await marketplace?.methods.cancelBidding(params.collection, params.tokenId).send({
          from: account
        });
        toast.success("Canceled bid successfully");
      }
      else throw new Error("Your offer is not existing");
    } catch(err: any) {
      if (err?.code != 4001) {
        toast.error(err?.message);
      }
    }
    setProcessing(false);
    setRefresh(!refresh);
  }

  return (
    <div className="w-full">
      <div className="w-full h-[5rem] bg-deep-dark border-b border-base-content border-opacity-25 shadow-sm">
        <div className="flex items-center max-w-layout-xl mx-auto flex items-center h-full">
          <div className="flex items-center cursor-pointer text-white">
            <ArrowLeftIcon className="w-4 mr-2" />
            <span>Back to collection</span>
          </div>
        </div>
      </div>
      {
        isLoading ? <RingSkeleton/>
        :
        (
          <div className="max-w-layout-xl mx-auto text-black py-8">
            <Link href="/">
              <span className="text-[#0085FF]">Fish in the sea</span>
            </Link>
            <h1 className="text-[40px] font-bold">{metadata?.title}</h1>
            <div>
              <span className="mr-1">By</span>
              <span className="text-[#0085FF] mr-2">Mulga</span>
              <span className="mr-1">Owned by</span>
              <span className="text-[#0085FF] mr-2">9273923</span>
              <span className="mr-2">5 favorites</span>
              <span className="mr-2">108 views</span>
            </div>
            <div className="divider" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div>
                <img
                  src={metadata?.media[0].gateway}
                  alt="art-work"
                  className="w-full border border-base-100/25 rounded-xl"
                />
                <div className="border border-black rounded-xl mt-3 bg-white">
                  <div className="px-8 py-4 border-b border-black">Description</div>
                  <div className="px-8 py-4 border-b border-black h-48 overflow-y-auto">
                    {metadata?.description}
                  </div>
                  <div className="px-8 py-4 border-b border-black">Properties</div>
                  <div className="px-8 py-4 border-b border-black">Stats</div>
                  <div className="px-8 py-4 border-b border-black">Levels</div>
                  <div className="px-8 py-4 border-b border-black">Boosts</div>
                  <div className="px-8 py-4 border-b border-black">Dates</div>
                  <div className="px-8 py-4">About charity</div>
                </div>
              </div>
              <div>
                <div className="border border-black rounded-t-xl p-8 bg-white">
                  <h1 className="text-center font-bold text-[40px] capitalize">{isListed.type}</h1>
                  {
                    (!isAuctionEnd && isListed.status && isListed.type == "auction") && (
                      <div className="flex items-center justify-center">
                        <svg
                          width="31"
                          height="31"
                          viewBox="0 0 31 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M26.246 25.3353C31.8419 19.2372 31.4339 9.73752 25.3357 4.14165C19.2376 -1.45422 9.73791 -1.04619 4.14204 5.05196C-1.45383 11.1501 -1.0458 20.6498 5.05236 26.2456C11.1505 31.8415 20.6501 31.4335 26.246 25.3353ZM25.285 24.4534C20.1657 30.0322 11.513 30.4038 5.93424 25.2846C0.355475 20.1653 -0.0161768 11.5126 5.10309 5.93385C10.2224 0.355079 18.8751 -0.016572 24.4538 5.10269C30.0326 10.222 30.4042 18.8747 25.285 24.4534ZM23.8569 23.1291C23.9717 23 24.0306 22.8306 24.0206 22.6582C24.0107 22.4857 23.9327 22.3242 23.8038 22.2091L16.993 15.9593C17.1515 15.5873 17.1907 15.1753 17.1055 14.7801C17.0202 14.3848 16.8146 14.0257 16.5169 13.7521C16.3017 13.5554 16.0453 13.4094 15.7665 13.3245L15.5289 7.79394C15.5269 7.7072 15.5077 7.62171 15.4723 7.54249C15.4369 7.46328 15.386 7.39192 15.3227 7.33261C15.2594 7.27329 15.1848 7.22721 15.1035 7.19706C15.0221 7.16691 14.9355 7.1533 14.8488 7.15703C14.7622 7.16075 14.6771 7.18173 14.5986 7.21875C14.5201 7.25576 14.4498 7.30807 14.3918 7.37259C14.3338 7.43712 14.2892 7.51257 14.2607 7.59453C14.2323 7.67649 14.2204 7.76332 14.2259 7.84991L14.4634 13.3805C14.1929 13.4889 13.95 13.6565 13.7525 13.8708C13.4016 14.2531 13.217 14.7592 13.2393 15.2776C13.2616 15.796 13.4889 16.2844 13.8712 16.6352C14.1694 16.908 14.5447 17.0818 14.9456 17.1327C15.3465 17.1836 15.7533 17.1091 16.1102 16.9195L22.922 23.1702C22.9854 23.2301 23.0603 23.2766 23.1421 23.307C23.2239 23.3374 23.3109 23.3511 23.3981 23.3473C23.4853 23.3435 23.5708 23.3222 23.6496 23.2847C23.7284 23.2472 23.7989 23.1943 23.8569 23.1291Z"
                            fill="#434343"
                          />
                        </svg>
                        
                        <span className="ml-2">
                          Sale ends {moment(isListed.endAuctionTimestamp).format('LLLL')}
                        </span>
                      </div>
                    )}
                  <div className="flex items-center justify-between border-b border-black py-6">
                    <span className="text-[20px] font-bold">Price</span>
                    <div className="flex items-center">
                      <NetworkIcon network={params?.network} />
                      <div className="flex items-end ml-2">
                        <span className="text-[40px] leading-[40px] mr-2">{isListed.price}</span>
                        <span>${fiatPrice}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b border-black py-6">
                    <span className="text-[20px] font-bold">Donating</span>
                    <div className="flex items-center">
                      <div className="flex items-end ml-2">
                        <span className="text-[40px] leading-[40px] mr-2">{isListed.percent}%</span>
                        <span>${(Number(fiatPrice) / 100).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-6">
                    <span className="text-[20px] font-bold">Supporting</span>
                    <span className="text-[20px] font-bold">Charity name</span>
                  </div>
                  {
                    (isListed.status && !existedOffer) ?
                    <>
                      {
                        isListed.type == "auction" ? (
                          <button
                            className="btn w-full h-[65px] bg-transparent text-[20px] capitalize text-[#407FDB] font-bold mt-4"
                            onClick={() => setOpenModal(true)}
                          >
                            Make an offer
                          </button>
                        ) : (
                          <button
                            className="btn w-full h-[65px] bg-transparent text-[20px] capitalize text-[#407FDB] font-bold mt-4"
                            onClick={buy}
                          >
                            Buy Now
                          </button>
                        )
                      }
                    </> : ""
                  }
                  {
                    (isAuctionEnd && isListed.status && isListed.type == "auction") && (
                      <span
                        className="btn w-full h-[65px] bg-transparent text-[20px] capitalize text-[#407FDB] font-bold mt-4"
                      >Auction Ended</span>
                    )
                  }
                  {/* <button className="btn w-full h-[65px] bg-[#407FDB] text-[20px] capitalize text-white font-bold mt-4">
                    Add to cart{" "}
                  </button> */}
                </div>
                <div className="bg-white mt-3">
                  <div className="px-8 py-4 border-b border border-black rounded-t-xl">
                    Price history
                  </div>
                  <div className="bg-[#F3F3F3] border border-[#767373] h-[80px]"></div>
                </div>
                <div className="px-8 py-4 rounded-xl bg-white border border-black mt-3">
                  <span>Listings</span>
                </div>
                <div className="collapse">
                  <input type="checkbox" className="peer" /> 
                  <div className="collapse-title px-8 py-4 rounded-xl bg-white border border-black mt-3 peer-checked:rounded-b-none flex items-center justify-between">
                    <span>Offers</span>
                    <span>
                      <ChevronDownIcon className="w-8 h-8"/>
                    </span>
                  </div>
                  <div className="hidden peer-checked:block border border-t-0 border-base-100 bg-white max-h-60 overflow-y-auto !p-0 rounded-b-xl">
                    <table className="table table-auto text-base-100 w-full">
                      <thead className="border-b border-base-100">
                        <tr>
                          <th className="font-bold py-2">Price</th>
                          <th className="font-bold py-2">From</th>
                          <th className="font-bold py-2" />
                        </tr>
                      </thead>
                      <tbody>
                        {
                          offers.map((item, idx) => (
                            <tr key={idx}>
                              <td className="font-bold">{web3Instance?.utils.fromWei(item.bidPrice, 'ether')} <span >WETH</span></td>
                              <td className={`${item.bider.toLowerCase() == account?.toLowerCase() ? "" : "uppercase"} font-bold`}>{ item.bider.toLowerCase() == account?.toLowerCase() ? "you" : item.bider.slice(-8)}</td>
                              <td>
                                {
                                  item.bider.toLowerCase() == account?.toLowerCase() ? (
                                  <button
                                    className="btn btn-info text-white h-8"
                                    onClick={cancelBid}
                                  >Cancel</button>
                                  ) : ""
                                }
                              </td>
                            </tr>
                          ))
                        }
                        {
                          !offers.length && <tr><td colSpan={3} className="text-center">No items to display</td></tr>
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-8 py-4 rounded-xl bg-white border border-black mt-8">
              <span>Item activity</span>
            </div>
          </div>
        )
      }
      {
        isProcessing ? <LoadingContainer message={`${message} . . .`}/> : ""
      }
      <div className="bid-modal">
        <input type="checkbox" id="my-modal-6" className="modal-toggle" checked={openModal} readOnly />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-white relative">
            <h3 className="font-bold text-lg text-center text-base-100">Place a bid</h3>
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
                      src={metadata?.media[0].gateway}
                      className="w-24 h-24 rounded-lg"
                      alt="art-work"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-bold text-lg text-base-100">{metadata?.title ? metadata?.title : "Untitled"}</label>
                    <label className="text-md">
                      {metadata?.contract?.symbol ?? "Untitled"} : {metadata?.contract?.name ?? "Untitled"}
                    </label>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="font-bold text-lg text-base-100">{isListed.price} WETH</label>
                  <label className="text-right">${fiatPrice}</label>
                </div>
              </div>
              <div className="form-control">
                <label className="input-group flex">
                  <input
                    type="number"
                    placeholder="Price"
                    className={cx(
                      "input input-bordered block border-base-content outline-none bg-white w-full",
                      {
                        "border-red-500": bidError.price
                      }
                    )}
                    value={bidPrice}
                    onChange={(e) => {
                      if (+e.target.value >= 0) {
                        setBidPrice(e.target.value);
                      }
                    }}
                  />
                  <span className="bg-base-content text-white">WETH</span>
                </label>
                <span className="text-[11px] text-base-100">Minium bid price is {isListed.price}</span>
              </div>
              {
                isListed.NFTtype == "ERC1155" ? 
                <div className="form-control">
                  <input
                    type="number"
                    placeholder="Quality"
                    className={cx(
                      "input input-bordered block border-base-content outline-none bg-white w-full",
                      {
                        "border-red-500": bidError.quality
                      }
                    )}
                    value={quality}
                    onChange={(e) => {
                      if (+e.target.value >= 0) {
                        setQuality((Math.floor(+e.target.value)).toString());
                      }
                    }}
                  />
                  <span className="text-[11px] text-base-100">Quality is availabe until {isListed.quality} at maximum.</span>
                </div>
                : ""
              }
            </div>
            <div className="modal-action">
              <label
                htmlFor="my-modal-6" className="btn btn-info w-full border-base-content bg-white text-base-100 hover:text-white"
                onClick={placeBid}
              >
                Place a bid
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
