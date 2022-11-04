import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { Alchemy, Network, Nft, NftTokenType } from "alchemy-sdk";
import { useLocation } from "wouter";
import cx from "classnames";
import {AbiItem} from 'web3-utils';

import { ImageDefaultIcon } from "../../components/icons/ImageDefaultIcon";
import { MintItemTitle } from "../../components/MintItemTitle";
import { MintArtPreview } from "../../components/MintArt";
import { useWallet } from "../../context/WalletContext";
import { EthereumNetwork, ETH_ALCHEMY } from "../../configs/constants";
import erc721ABI from "../../assets/jsons/abi/erc721.json"
import { toast } from "react-toastify";
import { LoadingContainer } from "../../components/LoadingContainer";

enum SaleType {
  Fixed = "fixed",
  Auction = "auction"
};

interface Rate {
  [key: string]:string;
}

interface Charity {
  address: string;
  percent: string;
}

interface Royalty {
  charity: string;
  charityPercent: string;
  creator: string;
  creatorPercent: string;
}

interface Props {
  networkName: string;
  address: string;
  tokenId: string;
}

interface Duration {
  title: string;
  value: string;
}

interface Errors {
  quality: boolean;
  price: boolean;
  charity: boolean;
}

const defaultError:Errors = {
  quality: false,
  price: false,
  charity: false
}

const defaultCharity:Charity = {
  address: "",
  percent: "0"
}

const defaultRoyalty: Royalty = {
  charity: "",
  charityPercent: "0",
  creator: "",
  creatorPercent: "0",
}

const durations: Duration[] = [
  {
    title: "1 day",
    value: "86400"
  },
  {
    title: "1 week",
    value: "604800"
  },
]

export const NewListing: FC<Props> = ({ networkName, address, tokenId }) => {
  const { contracts, web3Instance, address:account } = useWallet();
  const [location, setLocation] = useLocation();

  const [avatar, setAvatar] = React.useState<File>();
  const [saleType, setSaleType] = useState<SaleType>(SaleType.Fixed);
  const [metadata, setMetadata] = useState<Nft>();
  const [tokenType, setTokenType] = useState<NftTokenType>(NftTokenType.UNKNOWN);
  const [duration, setDuration] = useState<string>(durations[0].value);
  const [quality, setQuality] = useState<string>('');

  const [paymentToken, setPaymentToken] = useState<string>('ETH');
  const [conversionCur, setConversionCur] = useState<string>('AUD');
  const [paymentTokenPrice, setPaymentTokenPrice] = useState<string>('');
  const [conversionCurPrice, setConversionCurPrice] = useState<string>('');

  const [rates, setRates] = useState<Rate>({});
  const [charities, setCharities] = useState<string[]>([]);
  const [charity, setCharity] = useState<Charity>(defaultCharity);
  const [royalty, setRoyalty] = useState<Royalty>(defaultRoyalty);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [errors, setErrors] = useState<Errors>(defaultError);
  const [balance, setBalance] = useState<string>();

  useEffect(() => {
    async function getMetadata () {
      setLoading(true);
      const settings = {
        apiKey: ETH_ALCHEMY,
        network: Network.ETH_GOERLI
      };
  
      const alchemy = new Alchemy(settings);
      const res = await alchemy.nft.getContractMetadata(address);
      const metadata = await alchemy.nft.getNftMetadata(address, tokenId, res.tokenType);
      setTokenType(res.tokenType as NftTokenType);
      setMetadata(metadata);
      setLoading(false);
    }
    if (networkName && address && tokenId) getMetadata();
  }, [networkName, address, tokenId]);

  useEffect(() => {
    async function getBalance() {
      if (!web3Instance) return;
      const contract = new web3Instance.eth.Contract(erc721ABI as AbiItem[], address);
      const _balance = await contract.methods.balanceOf(account, tokenId).call();
      setBalance(_balance);
    }

    if (web3Instance && tokenId && tokenType == NftTokenType.ERC1155) getBalance();
  }, [web3Instance, tokenId, tokenType]);

  useEffect(() => {
    async function getRoyalty() {
      switch(tokenType) {
        case NftTokenType.ERC1155:
          if (address.toLocaleLowerCase() == EthereumNetwork.address.singleNFT.toLocaleLowerCase()) {
            const _royalty = await contracts?.singleNFT.methods.getRoyalty(tokenId).call();
            setRoyalty({
              ...royalty,
              creatorPercent: _royalty.creatorPercent,
              charityPercent: _royalty.charityPercent
            });
        }
      }
    }

    if (contracts?.singleNFT && (tokenType == NftTokenType.ERC1155 || tokenType == NftTokenType.ERC721)) {
      getRoyalty();
    }
  }, [tokenType, contracts])

  useEffect(() => {
    getExchageRate();
  }, [paymentToken])

  useEffect(() => {
    if (!Object.keys(rates).length || !paymentTokenPrice) {
      setConversionCurPrice('');
      return;
    }
    const rate = rates[conversionCur];
    const price = Number(rate) * Number(paymentTokenPrice);
    setConversionCurPrice(price.toString());
  }, [rates, conversionCur, paymentTokenPrice]);

  useEffect(() => {
    async function fetchCharity() {
      if (contracts?.marketplace) {
        const contract = contracts?.marketplace;
        const charities = await contract.methods.getCharityList().call();
        setCharities(charities);
      }
    }

    if (contracts?.marketplace) fetchCharity();
  }, [contracts?.marketplace]);

  const getExchageRate = async() => {
    const res = await axios.get(`https://api.coinbase.com/v2/exchange-rates?currency=${paymentToken}`);
    setRates(res.data.data.rates);
  }

  const controlCharityPercent = (val: string) => {
    let percent = Math.floor(parseInt(val));
    if (percent >= 10) percent = 10;
    setCharity({ ...charity, percent: !percent ? "" : percent.toString() });
  };

  const controlQuality = (val: string) => {
    if (!val || Number(val) < 1) val = '1';
    const _quality = Math.floor(+val);
    setQuality(_quality.toString());
  }

  const valiateForm = async() => {
    if (!web3Instance) return;
    let _errors = { ...errors };
    _errors.price = +paymentTokenPrice <= 0 ? true : false; 
    _errors.charity = (!charity.address || !+charity.percent || +charity.percent > 10) ? true : false;
    if (tokenType == NftTokenType.ERC1155) {
      const contract = new web3Instance.eth.Contract(erc721ABI as AbiItem[], address);
      const _balance = await contract.methods.balanceOf(account, tokenId).call();
      _errors.quality = +_balance < +quality ? true : false;
      setBalance(_balance);
    }
    setErrors(_errors);
    return JSON.stringify(defaultError) == JSON.stringify(_errors);
  }

  const list = async() => {
    try {
      if (!web3Instance) return;
      const isValid = await valiateForm();
      if (!isValid) return;
      setLoading(true);
      const marketplace = contracts?.marketplace;
      const isListed = await marketplace?.methods.getListing(address, tokenId).call();
      if (Number(isListed.seller)) {
        throw Error("Already listed");
      }
      const price = web3Instance?.utils.toWei(paymentTokenPrice, 'ether');
      const contract = new web3Instance.eth.Contract(erc721ABI as AbiItem[], address);
      const approved = await contract.methods.isApprovedForAll(account, EthereumNetwork.address.marketplace).call();
      if (!approved) {
        await contract.methods.setApprovalForAll(EthereumNetwork.address.marketplace, true).send({ from: account });
      }

      const now = Date.now();
      const _duration = +duration + Math.floor(now / 1000);
      switch(tokenType) {
        case NftTokenType.ERC721:
          switch(saleType) {
            case SaleType.Fixed:
              await marketplace?.methods.listForFixedSingle(
                address,
                tokenId,
                price,
                charity.address,
                charity.percent
              ).send({ from: account });
              break;
            case SaleType.Auction:
              await marketplace?.methods.listForAuctionSingle(
                address,
                tokenId,
                price,
                _duration,
                charity.address,
                charity.percent
              ).send({ from: account });
            break;
          }
        break;
        case NftTokenType.ERC1155:
          switch(saleType) {
            case SaleType.Fixed:
              await marketplace?.methods.listForFixedSemi(
                address,
                tokenId,
                quality,
                price,
                charity.address,
                charity.percent
              ).send({ from: account });
              break;
            case SaleType.Auction:
              await marketplace?.methods.listForAuctionSemi(
                address,
                tokenId,
                quality,
                price,
                _duration,
                charity.address,
                charity.percent
              ).send({ from: account });
          };
        break;
      };

      await axios.post(
        `${process.env.NEXT_PUBLIC_API}/api/sales`,
        {
          collection: address,
          tokenId,
          seller: account
        }
      ).then(res => {

      }).catch(err => {

      });
      toast.success('You have listed NFT to auction successfully');
    } catch(err:any) {
      if (err?.code != 4001) {
        toast.error(err?.LoadingContainer);
      }
    }
    setLoading(false);
  }

  return (
    <div className="profile">
      <div className="p-8 max-w-layout-xl">
        <h1 className="font-bold text-black text-[24px] mb-2">Create a listing</h1>
        <div className="flex items-center mb-[48px]">
          <span className="text-sm text-black">
            You can create a sale or an auction based NFT fundraiser for NFTs you already
            own
          </span>
        </div>

        <div>
          <div className="flex flex-col mb-4 text-black">
            <label
              className={cx(
                "!border-dashed border-base-content border-4 w-[300px] h-[300px] flex justify-center items-center mt-4 rounded-lg bg-white overflow-hidden"
              )}
            >
              {
                isLoading ? (
                  <Skeleton
                    className="w-full aspect-square"
                    containerClassName="w-full flex"
                  />
                ) : (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    {metadata?.media[0]?.gateway ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <MintArtPreview src={metadata?.media[0]?.gateway} type="image" />
                    ) : (
                      <ImageDefaultIcon />
                    )}
                  </>
                )
              }
            </label>
          </div>
        </div>
        
        <div>
          <MintItemTitle title="Type" required />
          <div className="mt-4 mb-8 flex border border-[#696969] rounded-lg h-[80px] max-w-[300px] divide-x profile-box text-black">
            <div
              className={cx(
                "flex flex-col flex-1 justify-center items-center cursor-pointer",
                {
                  "bg-base-content rounded-l-lg text-white font-bold": saleType == SaleType.Fixed
                }
              )}
              onClick={() => setSaleType(SaleType.Fixed)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C4.4775 0 0 4.4775 0 10C0 15.5225 4.4775 20 10 20C15.5225 20 20 15.5225 20 10C20 4.4775 15.5225 0 10 0ZM10.8333 14.8808V16.6667H9.16667V14.8858C7.39167 14.6492 6.27417 13.6167 6.21167 12.0867H8.1125C8.20333 12.8483 8.97167 13.3367 10.0783 13.3367C11.1008 13.3367 11.8233 12.8417 11.8233 12.1325C11.8233 11.5333 11.355 11.1883 10.2025 10.9408L8.97833 10.6808C7.26583 10.3225 6.42667 9.43083 6.42667 7.99833C6.42667 6.47333 7.48833 5.40167 9.16667 5.1325V3.33333H10.8333V5.13C12.4633 5.39417 13.5633 6.45 13.6142 7.89417H11.765C11.6742 7.15167 10.9833 6.6575 10.0333 6.6575C9.05 6.6575 8.39917 7.11333 8.39917 7.82917C8.39917 8.40833 8.84833 8.74083 9.94833 8.975L11.0808 9.21583C12.9692 9.61333 13.7825 10.4267 13.7825 11.885C13.7833 13.5367 12.6783 14.6283 10.8333 14.8808Z"
                  fill="#727272"
                />
              </svg>
              <span className="text-sm">Fixed price</span>
            </div>
            <div
              className={cx(
                "flex flex-col flex-1 justify-center items-center cursor-pointer border-[#696969]",
                {
                  "bg-base-content rounded-r-lg text-white font-bold": saleType == SaleType.Auction
                }
              )}
              onClick={() => setSaleType(SaleType.Auction)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C4.4775 0 0 4.4775 0 10C0 15.5225 4.4775 20 10 20C15.5225 20 20 15.5225 20 10C20 4.4775 15.5225 0 10 0ZM10.8333 10.8333H4.1625C3.70417 10.8333 3.33333 10.4625 3.33333 10.0042V9.995C3.33333 9.5375 3.70417 9.16667 4.1625 9.16667H9.16667V2.49583C9.16667 2.0375 9.5375 1.66667 9.99583 1.66667H10.005C10.4625 1.66667 10.8333 2.0375 10.8333 2.49583V10.8333Z"
                  fill="#727272"
                />
              </svg>
              <span className="text-sm">Timed Auction</span>
            </div>
          </div>
        </div>

        {
          tokenType == NftTokenType.ERC1155 && (
            <div>
              <MintItemTitle
                title="Quality"
                subTitle={`Your curreunt balance is ${balance} .`}
                required
              />
              <div className="flex mt-4">
                <input
                  readOnly={isLoading}
                  type="number"
                  className={cx(
                    "input input-bordered profile-item block border-base-content outline-none !w-2/3",
                    {
                      "border-red-500": errors.quality
                    }
                  )}
                  placeholder="E.g. 9"
                  value={quality}
                  onChange={(e) => controlQuality(e.target.value)}
                />
              </div>
            </div>
          )
        }

        <div className="mt-8">
          <MintItemTitle title="Price" required />
          <div className="flex mt-4">
            <select
              className="select profile-item outline-none block border-base-content !w-1/3"
              value={paymentToken}
              onChange={(e) => setPaymentToken(e.target.value)}
            >
              <option value="eth">Ethereum</option>
              <option value="sol">Solana</option>
            </select>
            <input
              readOnly={isLoading}
              type="text"
              className={cx(
                "input input-bordered border-base-content profile-item block outline-none !w-2/3 ml-2",
                {
                  "border-red-500": errors.price
                }
              )}
              value={paymentTokenPrice}
              onChange={(e) => {
                setPaymentTokenPrice(+e.target.value >= 0 ? e.target.value : paymentTokenPrice);
              }}
            />
          </div>
          <div className="flex mb-8">
            <select
              className="select profile-item outline-none border-base-content block !w-1/3"
              value={conversionCur}
              onChange={(e) => setConversionCur(e.target.value)}
            >
              <option value="AUD">Australia Dollar</option>
              <option value="USD">US Dollar</option>
            </select>
            <input
              readOnly={isLoading}
              type="number"
              className="input input-bordered profile-item block border-base-content outline-none !w-2/3 ml-2"
              value={conversionCurPrice}
            />
          </div>
        </div>

        {
          saleType == SaleType.Auction && (
            <div>
              <MintItemTitle title="Duration" required />
              <select
                className="select profile-item outline-none block mt-4 border-base-content !mb-8"
                onChange={(e) => setDuration(e.target.value)}
              >
                {
                  durations.map((item: Duration, idx) => (
                    <option value={item.value} key={idx}>{item.title}</option>
                  ))
                }
              </select>
            </div>
          )
        }

        <div>
          <MintItemTitle title="Charity donation" subTitle="A minimum of 1% of your minting fee/price for each NFT is a required charity donation." required />
          <select
            className="select profile-item outline-none border-base-content block mt-4"
            onChange={(e) => setCharity({ ...charity, address: e.target.value })}
          >
            <option value="">Select charity</option>
            {
              charities.map((item, idx) => (
                <option value={item} key={idx}>{item}</option>
              ))
            }
          </select>
          <div className="flex">
            <input
              type="text"
              className={cx(
                "input input-bordered border-base-content profile-item block outline-none !w-2/3 mr-2",
                {
                  "border-red-500": errors.charity
                }
              )}
              value={charity.address}
              readOnly
            />
            <input
              readOnly={isLoading}
              type="text"
              className={cx(
                "input input-bordered border-base-content profile-item block outline-none !w-1/3",
                {
                  "border-red-500": errors.charity
                }
              )}
              value={charity.percent}
              onChange={(e) => controlCharityPercent(e.target.value)}
            />
          </div>
          <div className="flex justify-start mb-8">
            <label className="text-sm text-[#0075FF]">Default minimum 1%. Maximum 10%.</label>
          </div>
        </div>
        
        <div>
          <MintItemTitle title="Fees" required />
          <div className="max-w-[300px] mt-4 mb-8 text-black">
            <div className="flex w-full justify-between mb-2">
              <span className="text-sm">Service fees</span>
              <span className="text-sm">0%</span>
            </div>
            <div className="flex w-full justify-between mb-2">
              <span className="text-sm">Creator fees</span>
              <span className="text-sm">{royalty.creatorPercent}%</span>
            </div>
            <div className="flex w-full justify-between mb-2">
              <span className="text-sm">Charity fees</span>
              <span className="text-sm">{royalty.charityPercent}%</span>
            </div>
            <div className="flex w-full justify-between">
              <span className="text-sm">Charity donation</span>
              <span className="text-sm">{charity.percent}%</span>
            </div>
          </div>
        </div>
        
        <button
          className="btn bg-[#0075FF] text-white border-none h-[40px] min-h-0"
          onClick={list}
        >
          COMPLETE LISTING
        </button>
        {
          isLoading ? <LoadingContainer message={"Listing NFT....."}/> : ""
        }
      </div>
    </div>
  );
};
