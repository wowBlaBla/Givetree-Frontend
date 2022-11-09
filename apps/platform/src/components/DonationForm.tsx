import { useQuery } from "@apollo/client";
import { ArrowLeftIcon, CheckIcon } from "@heroicons/react/solid";
import axios from "axios";
import React, { FC, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import {
  GetCharityListingDataQuery,
  GET_CHARITY_LISTING_DATA,
} from "../containers/explore/Charities";
import { useAuth } from "../context/AuthContext";
import { useWallet } from "../context/WalletContext";
import { Currencies, OneTimePurchase, Tokens } from "../utils/constants";
import { ErrorContainer } from "./ErrorContainer";
import { ChevronRightIcon } from "./icons/ChevronRightIcon";
import { LoadingContainer } from "./LoadingContainer";

const Pages = [
  {
    name: "Select Currency",
    value: "currency",
  },
  {
    name: "Select Crypto",
    value: "crypto",
  },
  {
    name: "Repeat purchase?",
    value: "purchase",
  },
  {
    name: "Pay With",
    value: "paywith",
  },
  {
    name: "Your Details",
    value: "info",
  },
  {
    name: "Tax Details",
    value: "tax",
  },
  {
    name: "Donation Preview",
    value: "preview",
  },
];

interface Currency {
  active: number;
  value: string;
}

interface Donor {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  location: string;
  address1: string;
  address2?: string;
  city: string;
  zipcode: string;
}

interface Rate {
  [key: string]:string;
}

// eslint-disable-next-line @typescript-eslint/ban-types
type DonationFormProps = {
  charityAddress: string;
  charityName: string;
  to: string | number;
};

export const DonationForm: FC<DonationFormProps> = ({ charityAddress, charityName, to }) => {

  const { authUser } = useAuth();
  const { address: account, web3Instance, connectWallet } = useWallet();
  const [page, setPage] = useState<string>();
  const [fiatCur, setFiatCur] = useState<Currency>({ active: 0, value: ""});
  const [crypto, setCrypto] = useState<Currency>({ active: 0, value: ""});
  const [taxEmail, setTaxEmail] = useState<string>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [donor, setDonor] = useState<Donor>({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    location: "",
    address1: "",
    address2: "",
    city: "",
    zipcode: "",
  });

  const [ rates, setRates ] = useState<Rate>({});

  const selectedPageName = useMemo(
    () => Pages.find((p) => p.value === page)?.name,
    [page]
  );

  useEffect(() => {
    async function fetchRates() {
      const paymentToken = Tokens[crypto.active].currency;
      const res = await axios.get(`https://api.coinbase.com/v2/exchange-rates?currency=${paymentToken}`);
      const rates = res.data.data.rates;
      setRates(rates);
    }

    fetchRates();
  }, [crypto.active])

  useEffect(() => {
    if (rates) {
      const rate = rates[Currencies[fiatCur.active].currency];
      const price = !fiatCur.value ? "" :( +fiatCur.value / +rate).toFixed(6);
      setCrypto({ ...crypto, value: (price).toString() })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [fiatCur, rates]);

  const donate = async() => {
    if (!account) {
      toast.warn("Please connect your wallet");
      return;
    }
    if (!charityAddress) {
      toast.warn("This charity has no donation wallet");
      return;
    }
    try {
      setLoading(true);
      const value = web3Instance?.utils.toWei(crypto.value, 'ether');
      const balance = await web3Instance?.eth.getBalance(account);
      if (Number(value) > Number(balance)) throw Error("Insufficient funds");
      
      await web3Instance?.eth.sendTransaction({
        from: account,
        to: charityAddress,
        value: value
      });

      await axios.post(
        `${process.env.NEXT_PUBLIC_API}/api/donations`,
        {
          to,
          fiat: Currencies[fiatCur.active].currency,
          fiatAmount: fiatCur.value,
          crypto: Tokens[crypto.active].currency,
          cryptoAmount: value,
          walletAddress: charityAddress
        },
        {
          headers: {
            Authorization: `Bearer ${authUser?.accessToken}`
          }
        }
      ).then().catch();

      toast.success("Donated successfully!");
    } catch(err) {
      
    }
    setLoading(false);
  }

  const goToPreview = () => {
    if (!account) {
      toast.warn("Please connect your wallet");
      return;
    }
    if (!charityAddress) {
      toast.warn("This charity has no donation wallet");
      return;
    }
    if (+fiatCur.value <= 0) {
      toast.warn("Please correct donation amount");
    }
    setPage('preview');
  }

  const { data, loading, error } = useQuery<GetCharityListingDataQuery>(
    GET_CHARITY_LISTING_DATA
  );

  if (loading) {
    return <LoadingContainer message="Loading charities..." />;
  }

  if (error) {
    return <ErrorContainer message={error.message} />;
  }

  if (!data) {
    return <ErrorContainer message="Could not load charities" />;
  }

  return (
    <div className="donate-container flex flex-col">
      <div className="donate-tab flex h-[60px] mb-6">
        <div
          className={`flex-1`}
        >
          <span className="text-[24px] text-black">Donate</span>
        </div>
      </div>
      <div className="flex flex-col px-6 pb-6 overflow-hidden flex-1">
        {!page ? (
          <>
            {" "}
            <div
              className="flex donate-item text-black items-center mb-4"
            >
              <span className="text-md w-[80px] flex items-center gap-1">
                {Currencies[fiatCur.active].icon({ className: "w-8 h-8 inline-block" })}
                {Currencies[fiatCur.active].currency}
              </span>
              <div className="flex flex-1 justify-between items-center">
                <span className="text-h">
                  <input
                    type="number"
                    className="w-full outline-none text-center"
                    value={fiatCur.value}
                    onChange={(e) => +e.target.value > 0 ? setFiatCur({ ...fiatCur, value: e.target.value }) : null}
                  />
                </span>
                <span
                  onClick={() => setPage("currency")}
                >
                  <ChevronRightIcon className="cursor-pointer h-[10px]" color="black" />
                </span>
              </div>
            </div>
            <div
              className="flex donate-item text-black items-center mb-4"
              onClick={() => setPage("crypto")}
            >
              <span className="text-md w-[80px] flex items-center gap-1">
                {Tokens[crypto.active].icon({ className: "w-8 h-8"})}
                {Tokens[crypto.active].currency}
              </span>
              <div className="flex flex-1 justify-between items-center">
                <span className="text-h text-center w-full">{crypto.value}</span>
                <ChevronRightIcon className="cursor-pointer h-[10px]" color="black" />
              </div>
            </div>
            <div className="flex justify-center" onClick={() => setPage("purchase")}>
              <select className="donate-item w-[75%] text-md text-black mb-4 outline-none !h-[40px]">
                <option>One time purchase</option>
              </select>
            </div>
            <div
              className="flex donate-item text-black items-center mb-4"
              onClick={() => setPage("paywith")}
            >
              <span className="text-md w-[120px]">Pay with</span>
              <div className="flex flex-1 justify-between items-center">
                <span className="text-md">{account ? account?.slice(0,4) + '...' + account?.slice(-4) : "" }</span>
                <ChevronRightIcon className="cursor-pointer h-[10px]" color="black" />
              </div>
            </div>
            <div
              className="flex donate-item text-black items-center mb-4"
              onClick={() => setPage("info")}
            >
              <span className="text-md w-[120px]">Donor info</span>
              <div className="flex flex-1 justify-between items-center">
                <span className="text-md">Name, Age, etc </span>
                <ChevronRightIcon className="cursor-pointer h-[10px]" color="black" />
              </div>
            </div>
            <div
              className="flex donate-item text-black items-center mb-4"
              onClick={() => setPage("tax")}
            >
              <span className="text-md w-[120px]">Tax info</span>
              <div className="flex flex-1 justify-between items-center">
                <span className="text-md">Tax receipt, Email</span>
                <ChevronRightIcon className="cursor-pointer h-[10px]" color="black" />
              </div>
            </div>
            <button
              className="btn w-full bg-[#007A00] rounded-2xl-1 text-white h-[60px] capitalize"
              onClick={goToPreview}
            >
              Preview Donation
            </button>
          </>
        ) : (
          <>
            <div
              className="flex justify-center relative cursor-pointer text-[#595959]"
              onClick={() => setPage(undefined)}
            >
              <div className="absolute w-full h-full flex items-center justify-start">
                <ArrowLeftIcon width={30} />
              </div>
              <span className="text-[24px] font-bold">{selectedPageName || ""}</span>
            </div>
            <div className="flex-1 mt-4 overflow-y-auto">
              {page === "currency" ? (
                <>
                  {Currencies.map((currency, index) => (
                    <div
                      className="flex items-center px-2 py-4 cursor-pointer rounded-md hover:bg-[#F0F0F0]"
                      key={`donation-crypto-${index}`}
                      onClick={() => {
                        setFiatCur({ active: index, value: ""});
                        setPage(undefined);
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <currency.icon />
                      <div className="ml-2 flex flex-col text-black">
                        <span className="text-sm">{currency.name}</span>
                        <span className="text-sm">{currency.currency}</span>
                      </div>
                    </div>
                  ))}
                </>
              ) : page === "crypto" ? (
                <>
                  {Tokens.map((token, index) => (
                    <div
                      className="flex items-center px-2 py-4 cursor-pointer rounded-md hover:bg-[#F0F0F0]"
                      key={`donation-crypto-${index}`}
                      onClick={() => {
                        setPage(undefined);
                        setCrypto({ active: index, value: "" });
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <token.icon />
                      <div className="ml-2 flex flex-col text-black">
                        <span className="text-sm">{token.crypto}</span>
                        <span className="text-sm">{token.currency}</span>
                      </div>
                    </div>
                  ))}
                </>
              ) : page === "purchase" ? (
                <>
                  {OneTimePurchase.map((item, index) => (
                    <div
                      className="flex items-center justify-between px-2 py-4 cursor-pointer rounded-md hover:bg-[#F0F0F0]"
                      key={`donation-crypto-${index}`}
                    >
                      <div className="ml-2 flex flex-col text-black">
                        <span className="text-sm">{item.name}</span>
                        <span className="text-sm">{item.description}</span>
                      </div>
                      <CheckIcon width={20} color={"#0021F5"}  />
                    </div>
                  ))}
                </>
              ) : page === "paywith" ? (
                <div className="flex flex-col h-full pt-2">
                  <div className="flex-1 pb-2 mb-2 border-b border-[#686868] cursor-pointer">
                    
                    {
                      account ? (
                        <div className="bg-[#EEEBEB] rounded-[5px] p-2">
                          <span className="font-bold text-black">
                            Wallet 1: <span className="text-[#00B412]">Connected</span>
                          </span>
                          <div className="flex justify-between mt-2">
                            <span className="w-[200px] break-all text-black">
                              {account}
                            </span>
                            <CheckIcon width={20} color={"#0021F5"} />
                          </div>
                        </div>
                      ) : <span className="btn btn-info" onClick={() => connectWallet("metamask", "switch")}>Please connect your wallet</span>
                    }
                  </div>
                  <button className="btn bg-[#EEEBEB] border border-[#D9D9D9] text-black capitalize font-bold text-md">
                    Add payment method
                  </button>
                </div>
              ) : page === "info" ? (
                <>
                  <div className="form-control px-4">
                    <label className="label cursor-pointer justify-start">
                      <input
                        type="radio"
                        name="donateAnon"
                        className="donation-radio-box radio radio-accent"
                        checked
                      />
                      <span className="ml-2">Donate anonymously</span>
                    </label>
                    <label className="label cursor-pointer justify-start">
                      <input
                        type="radio"
                        name="donateBehalf"
                        className="donation-radio-box radio radio-accent"
                      />
                      <span className="ml-2">Donate on behalf of a business</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name*"
                      className="input outline-none bg-transparent border border-black rounded-none text-black h-[37px] mt-2"
                      value={donor?.firstName}
                      onChange={(e) => setDonor({ ...donor, firstName: e.target.value })}
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name*"
                      className="input outline-none bg-transparent border border-black rounded-none text-black h-[37px] mt-2"
                      value={donor?.lastName}
                      onChange={(e) => setDonor({ ...donor, lastName: e.target.value })}/>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      className="input outline-none bg-transparent border border-black rounded-none text-black h-[37px] mt-2"
                      value={donor?.email}
                      onChange={(e) => setDonor({ ...donor, email: e.target.value })}/>
                    <input
                      type="text"
                      name="country"
                      placeholder="Country*"
                      className="input outline-none bg-transparent border border-black rounded-none text-black h-[37px] mt-2"
                      value={donor?.country}
                      onChange={(e) => setDonor({ ...donor, country: e.target.value })}
                    />
                    <input
                      type="text"
                      name="location"
                      placeholder="State / Province / Region"
                      className="input outline-none bg-transparent border border-black rounded-none text-black h-[37px] mt-2"
                      value={donor?.location}
                      onChange={(e) => setDonor({ ...donor, location: e.target.value })}
                    />
                    <input
                      type="text"
                      name="address1"
                      placeholder="Address 1*"
                      className="input outline-none bg-transparent border border-black rounded-none text-black h-[37px] mt-2"
                      value={donor?.address1}
                      onChange={(e) => setDonor({ ...donor, address1: e.target.value })}
                    />
                    <input
                      type="text"
                      name="address2"
                      placeholder="Address 2*"
                      className="input outline-none bg-transparent border border-black rounded-none text-black h-[37px] mt-2"
                      value={donor?.address2}
                      onChange={(e) => setDonor({ ...donor, address2: e.target.value })}
                    />
                    <input
                      type="text"
                      name="city"
                      placeholder="City*"
                      className="input outline-none bg-transparent border border-black rounded-none text-black h-[37px] mt-2"
                      value={donor?.city}
                      onChange={(e) => setDonor({ ...donor, city: e.target.value })}
                    />
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="Zip/Postal Code*"
                      className="input outline-none bg-transparent border border-black rounded-none text-black h-[37px] mt-2"
                      value={donor?.zipcode}
                      onChange={(e) => setDonor({ ...donor, zipcode: e.target.value })}
                    />
                  </div>
                </>
              ) : page === "tax" ? (
                <div className="flex flex-col items-center text-black">
                  <span className="text-md text-center font-bold mb-4">
                    Want a Tax Receipt?
                  </span>
                  <span className="text-center">
                    If you would like to receive a tax receipt while remaining anonymous,
                    enter your email below. This email will only be used for the purpuses
                    of issuing a tax receipt.{" "}
                  </span>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter email for tax receipt"
                    className="input outline-none bg-transparent border border-black rounded-none text-black mt-4 w-full"
                    value={taxEmail}
                    onChange={(e) => setTaxEmail(e.target.value)}
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center text-black">
                  <span className="text-[30px] text-[#2151F5] text-center mb-4">
                    {crypto.value} {Tokens[crypto.active].currency}
                  </span>
                  <div className="flex w-full">
                    <span className="flex-1">Pay with</span>
                    <span className="w-[250px] break-all">
                      {account}
                    </span>
                  </div>
                  <div className="flex w-full mt-6">
                    <span className="flex-1">Recurring</span>
                    <span className="w-[250px] break-all">No</span>
                  </div>
                  <div className="flex w-full mt-6">
                    <span className="flex-1">Price</span>
                    <span className="w-[250px] break-all">{Currencies[fiatCur.active].currency} ${Number(rates[Currencies[fiatCur.active].currency]).toFixed(3)} / {Tokens[crypto.active].currency}</span>
                  </div>
                  <div className="flex w-full mt-6">
                    <span className="flex-1">Purchase</span>
                    <span className="w-[250px] break-all">{Currencies[fiatCur.active].currency} ${fiatCur.value}</span>
                  </div>
                  <div className="flex w-full mt-6">
                    <span className="flex-1">GiveTree fee</span>
                    <span className="w-[250px] break-all">{Currencies[fiatCur.active].currency} $0.00</span>
                  </div>
                  <div className="flex w-full mt-6">
                    <span className="flex-1">Total</span>
                    <span className="w-[250px] break-all">{Currencies[fiatCur.active].currency} ${fiatCur.value}</span>
                  </div>
                  <button
                    className="btn bg-[#2151F5] text-white w-full border-none rounded-2xl-1 mt-8"
                    onClick={donate}
                  >
                    Donate Now
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
      { isLoading ? <LoadingContainer message={"Donating to " + charityName + ". . ."}/> : ""}
    </div>
  );
};
