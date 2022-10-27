import { useQuery } from "@apollo/client";
import { ArrowLeftIcon, CheckIcon } from "@heroicons/react/solid";
import React, { FC } from "react";
import {
  GetCharityListingDataQuery,
  GET_CHARITY_LISTING_DATA,
} from "../containers/explore/Charities";
import { Currencies, OneTimePurchase, Tokens } from "../utils/constants";
import { ErrorContainer } from "./ErrorContainer";
import { ChevronRight } from "./icons/ChevronRight";
import { LoadingContainer } from "./LoadingContainer";

const Pages = [
  {
    name: "Select Charity",
    value: "charity",
  },
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

// eslint-disable-next-line @typescript-eslint/ban-types
type DonationFormProps = {};

export const DonationForm: FC<DonationFormProps> = ({}) => {
  const [currentDonateTab, setCurrentDonateTab] = React.useState("Donate");
  const [page, setPage] = React.useState<string>();

  const selectedPageName = React.useMemo(
    () => Pages.find((p) => p.value === page)?.name,
    [page]
  );

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
          className={`${
            currentDonateTab === "Donate" ? "active-tab" : "border-b-[1px]"
          } flex-1 border-r-[1px] border-black`}
          onClick={() => setCurrentDonateTab("Donate")}
        >
          <span className="text-[24px] text-black">Donate</span>
        </div>
        <div
          className={`${
            currentDonateTab === "Fundraise" ? "active-tab" : "border-b-[1px]"
          } flex-1 border-black`}
          onClick={() => setCurrentDonateTab("Fundraise")}
        >
          <span className="text-[24px] text-black">Fundraise</span>
        </div>
      </div>
      <div className="flex flex-col px-6 pb-6 overflow-hidden flex-1">
        {!page ? (
          <>
            {" "}
            <div
              className="flex donate-item text-black items-center mb-4"
              onClick={() => setPage("charity")}
            >
              <span className="text-md w-[120px]">Charity</span>
              <div className="flex flex-1 justify-between items-center">
                <span className="text-md">Foundation of nat...</span>
                <ChevronRight className="cursor-pointer h-[10px]" color="black" />
              </div>
            </div>
            <div
              className="flex donate-item text-black items-center mb-4"
              onClick={() => setPage("currency")}
            >
              <span className="text-md w-[120px]">AUD</span>
              <div className="flex flex-1 justify-between items-center">
                <span className="text-h">100</span>
                <ChevronRight className="cursor-pointer h-[10px]" color="black" />
              </div>
            </div>
            <div
              className="flex donate-item text-black items-center mb-4"
              onClick={() => setPage("crypto")}
            >
              <span className="text-md w-[120px]">BTC</span>
              <div className="flex flex-1 justify-between items-center">
                <span className="text-h">0.000033</span>
                <ChevronRight className="cursor-pointer h-[10px]" color="black" />
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
                <span className="text-md">Ox028928</span>
                <ChevronRight className="cursor-pointer h-[10px]" color="black" />
              </div>
            </div>
            <div
              className="flex donate-item text-black items-center mb-4"
              onClick={() => setPage("info")}
            >
              <span className="text-md w-[120px]">Donor info</span>
              <div className="flex flex-1 justify-between items-center">
                <span className="text-md">Name, Age, etc </span>
                <ChevronRight className="cursor-pointer h-[10px]" color="black" />
              </div>
            </div>
            <div
              className="flex donate-item text-black items-center mb-4"
              onClick={() => setPage("tax")}
            >
              <span className="text-md w-[120px]">Tax info</span>
              <div className="flex flex-1 justify-between items-center">
                <span className="text-md">Tax receipt, Email</span>
                <ChevronRight className="cursor-pointer h-[10px]" color="black" />
              </div>
            </div>
            <button
              className="btn w-full bg-[#007A00] rounded-2xl-1 text-white h-[60px] capitalize"
              onClick={() => setPage("preview")}
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
              {page === "charity" ? (
                <>
                  {data.charities.map((charity, index) => (
                    <div
                      className="flex items-center px-2 py-4 cursor-pointer rounded-md hover:bg-[#F0F0F0]"
                      key={`donation-charity-${index}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="w-[40px]"
                        src={charity.media.previewUrl}
                        alt={charity.slug}
                      />
                      <div className="ml-2 flex flex-col text-black">
                        <span className="text-sm">{charity.name}</span>
                        <span className="text-sm">Australia</span>
                      </div>
                    </div>
                  ))}
                </>
              ) : page === "currency" ? (
                <>
                  {Currencies.map((currency, index) => (
                    <div
                      className="flex items-center px-2 py-4 cursor-pointer rounded-md hover:bg-[#F0F0F0]"
                      key={`donation-crypto-${index}`}
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
                    <div className="bg-[#EEEBEB] rounded-[5px] p-2">
                      <span className="font-bold text-black">
                        Wallet 1: <span className="text-[#00B412]">Connected</span>
                      </span>
                      <div className="flex justify-between mt-2">
                        <span className="w-[200px] break-all text-black">
                          0xE418f0844E42F2D652B218d9c0052a9Cb39146c8
                        </span>
                        <CheckIcon width={20} color={"#0021F5"} />
                      </div>
                    </div>
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
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name*"
                      className="input outline-none bg-transparent border border-black rounded-none text-black h-[37px] mt-2"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      className="input outline-none bg-transparent border border-black rounded-none text-black h-[37px] mt-2"
                    />
                    <input
                      type="text"
                      name="country"
                      placeholder="Country*"
                      className="input outline-none bg-transparent border border-black rounded-none text-black h-[37px] mt-2"
                    />
                    <input
                      type="text"
                      name="location"
                      placeholder="State / Province / Region"
                      className="input outline-none bg-transparent border border-black rounded-none text-black h-[37px] mt-2"
                    />
                    <input
                      type="text"
                      name="address1"
                      placeholder="Address 1*"
                      className="input outline-none bg-transparent border border-black rounded-none text-black h-[37px] mt-2"
                    />
                    <input
                      type="text"
                      name="address2"
                      placeholder="Address 2*"
                      className="input outline-none bg-transparent border border-black rounded-none text-black h-[37px] mt-2"
                    />
                    <input
                      type="text"
                      name="city"
                      placeholder="City*"
                      className="input outline-none bg-transparent border border-black rounded-none text-black h-[37px] mt-2"
                    />
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="Zip/Postal Code*"
                      className="input outline-none bg-transparent border border-black rounded-none text-black h-[37px] mt-2"
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
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center text-black">
                  <span className="text-[30px] text-[#2151F5] text-center mb-4">
                    0.000033 BTC
                  </span>
                  <div className="flex w-full">
                    <span className="flex-1">Pay with</span>
                    <span className="w-[250px] break-all">
                      0xE418f0844E42F2D652B218d9c0052a9Cb39146c8
                    </span>
                  </div>
                  <div className="flex w-full mt-6">
                    <span className="flex-1">Recurring</span>
                    <span className="w-[250px] break-all">No</span>
                  </div>
                  <div className="flex w-full mt-6">
                    <span className="flex-1">Price</span>
                    <span className="w-[250px] break-all">A$29,999 / BTC</span>
                  </div>
                  <div className="flex w-full mt-6">
                    <span className="flex-1">Purchase</span>
                    <span className="w-[250px] break-all">A$100</span>
                  </div>
                  <div className="flex w-full mt-6">
                    <span className="flex-1">GiveTree fee</span>
                    <span className="w-[250px] break-all">A$0.00</span>
                  </div>
                  <div className="flex w-full mt-6">
                    <span className="flex-1">Total</span>
                    <span className="w-[250px] break-all">A$100</span>
                  </div>
                  <button className="btn bg-[#2151F5] text-white w-full border-none rounded-2xl-1 mt-8">
                    Donate Now
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
