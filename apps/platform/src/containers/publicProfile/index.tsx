import React, { FC } from "react";
import { useQuery } from "@apollo/client";
import { LoadingContainer } from "../../components/LoadingContainer";
import { ErrorContainer } from "../../components/ErrorContainer";
import { GetCharityDetailsDataQuery, GET_CHARITY_DETAILS_DATA } from "./charities.data";
import Image from "next/image";
import { YoutubeIcon } from "../../components/icons/YoutubeIcon";
import { InstagramIcon } from "../../components/icons/InstagramIcon";
import { FacebookIcon } from "../../components/icons/FacebookIcon";
import { LinkedinIcon } from "../../components/icons/LinkedinIcon";
import { MediumIcon } from "../../components/icons/MediumIcon";
import { BitCoinIcon } from "../../components/icons/BitcoinIcon";
import { EthereumIcon } from "../../components/icons/EthereumIcon";
import { SolanaIcon } from "../../components/icons/SolanaIcon";
import { PolygonIcon } from "../../components/icons/PolygonIcon";
import { FlowIcon } from "../../components/icons/FlowIcon";
import { AlgorandIcon } from "../../components/icons/AlgorandIcon";
import { AvalancheIcon } from "../../components/icons/AvalancheIcon";
import { CardanoIcon } from "../../components/icons/CardanoIcon";
import { Doguecoin } from "../../components/icons/Doguecoin";
import { ChevronRight } from "../../components/icons/ChevronRight";
import { DefaultParams, useRoute } from "wouter";
import { PlatformRoute } from "../../configs/routes";

const Tabs = ["Donations", "NFTs", "Collections", "Mint pages"];

interface ParamProps extends DefaultParams {
  category: string;
  name: string;
}

const PublicProfileContainer: FC = () => {
  const [currentTab, setCurrentTab] = React.useState(Tabs[0]);
  const [currentDonateTab, setCurrentDonateTab] = React.useState("Donate");
  const [_, params] = useRoute<ParamProps, string>(PlatformRoute.PublicProfileDetails);

  const { data, loading, error } = useQuery<GetCharityDetailsDataQuery>(
    GET_CHARITY_DETAILS_DATA,
    {
      variables: { slug: "doctors-without-borders" },
    }
  );

  if (loading) {
    return <LoadingContainer message="Loading charity details..." />;
  }

  if (error) {
    return <ErrorContainer message="Could not load charity details." />;
  }

  if (!data) {
    return <ErrorContainer message="Could not load charity details." />;
  }

  return (
    <div className="public-profile">
      <div className="profile-banner">
        <div className="flex flex-col items-center max-w-layout-xl mx-auto md:flex-row">
          <div className="profile-avatar-container">
            <div className="relative w-full h-full">
              <Image
                src={data.charity.media.previewUrl}
                layout="fill"
                objectFit="contain"
                alt="charity"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="profile-info">
        <div className="max-w-layout-xl mx-auto flex flex-col">
          <span className="text-h text-black font-bold max-w-[680px] mb-2">
            Foundation of National Parks & Wildlife
          </span>
          <span className="text-black max-w-[680px] mb-1">
            The Mulga The Artist is a funky cool artist from Sydney Australia who has a
            unique style of art which is known all around the world and is very popular.
          </span>
          <span>Australia. #digitalart #painting</span>
          <div className="flex py-4">
            <button className="btn text-white w-[120px] h-[30px] min-h-0 bg-[#0075FF] border-0 rounded-[20px] mr-4">
              Donate
            </button>
            <button className="btn text-white w-[120px] h-[30px] min-h-0 bg-[white] border border-[#0075FF] text-[#0075FF] rounded-[20px]">
              Fundraise
            </button>
          </div>
          <div className="profile-tab">
            <div className="tabs">
              {Tabs.map((tab, index) => (
                <div
                  key={`public-profile-tab-${index}`}
                  className={`tab ${currentTab === tab ? "tab-active" : ""}`}
                  onClick={() => setCurrentTab(tab)}
                >
                  {tab}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mb-[80px]">
        <div className="max-w-layout-xl mx-auto pt-8">
          <div className="flex flex-col md:flex-row">
            <div className="flex-3 bg-white rounded-t-[20px] border border-[#717171] text-black">
              <div className="donation-item flex items-center">
                <span className="text-lg font-bold">Donations</span>
              </div>
              <div className="donation-item flex items-center justify-between">
                <span className="text-sm">Search</span>
                <span className="text-sm">Filter</span>
              </div>
              <div className="donation-item flex items-center">
                <span className="text-sm mr-4">#</span>
                <span className="text-sm mr-4">Crypto</span>
                <span className="text-sm mr-4">Amount</span>
                <span className="text-sm mr-4">Currency</span>
                <span className="text-sm mr-4">Amount</span>
                <span className="text-sm mr-4">Date</span>
                <span className="text-sm">Wallet</span>
              </div>
              <div className="donation-item"></div>
              <div className="donation-item"></div>
              <div className="donation-item"></div>
              <div className="donation-item"></div>
              <div className="donation-item"></div>
              <div className="donation-item"></div>
              <div className="donation-item"></div>
              <div className="donation-item"></div>
            </div>
            {/* <div className="flex-3 about-main text-white mb-6 md:mb-0">
              <div className="flex border-b-[1px] border-black px-6 py-2 h-[60px] items-center">
                <span className="font-bold">About</span>
              </div>
              <div className="flex flex-col px-6 py-4">
                <span className="font-bold mb-2">Biography</span>
                <span className="mb-6">
                  Médecins Sans Frontières, or Doctors Without Borders in English, is an
                  international humanitarian medical non-governmental organisation of
                  French origin best known for its projects in conflict zones and in
                  countries affected by endemic diseases.
                </span>
                {params?.category === "charities" ? (
                  <>
                    <span className="font-bold mb-2">Founded:</span>
                    <span className="mb-6">22 December 1971, Paris, France</span>
                    <span className="font-bold mb-2">Headquarters:</span>
                    <span className="mb-6">Geneva, Switzerland</span>
                    <span className="font-bold mb-2">Number of employees</span>
                    <span className="mb-6">45,260</span>
                    <span className="font-bold mb-2">Founders:</span>
                    <span className="mb-6">
                      Bernard Kouchner, Gérard Illiouz, Jean-Michel Wild
                    </span>
                    <span className="font-bold mb-2">ABN:</span>
                    <span className="mb-6">18 000 000 000 </span>
                  </>
                ) : null}
                <span className="font-bold mb-2">Location:</span>
                <span className="mb-6">Australia</span>
                <span className="font-bold mb-2">Website & Socials:</span>
                <div className="grid grid-cols-5 mb-6">
                  <div className="flex">
                    <div className="flex flex-col items-center cursor-pointer">
                      <div className="w-[24px] h-[24px] flex items-center items-center mb-1">
                        <YoutubeIcon />
                      </div>
                      <span className="text-xs">YouTube</span>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-col items-center cursor-pointer">
                      <div className="w-[24px] h-[24px] flex items-center items-center mb-1">
                        <LinkedinIcon />
                      </div>
                      <span className="text-xs">LinkedIn</span>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-col items-center cursor-pointer">
                      <div className="w-[24px] h-[24px] flex items-center items-center mb-1">
                        <FacebookIcon />
                      </div>
                      <span className="text-xs">Facebook</span>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-col items-center cursor-pointer">
                      <div className="w-[24px] h-[24px] flex items-center items-center mb-1">
                        <InstagramIcon />
                      </div>
                      <span className="text-xs">Instagram</span>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-col items-center cursor-pointer">
                      <div className="w-[24px] h-[24px] flex items-center items-center mb-1">
                        <MediumIcon />
                      </div>
                      <span className="text-xs">Medium</span>
                    </div>
                  </div>
                </div>
                <span className="font-bold mb-2">Cryptocurrency we accept</span>
                <div className="grid grid-cols-3 mb-6">
                  <div className="flex mb-4">
                    <div className="flex flex items-center cursor-pointer">
                      <div className="w-[40px] h-[40px] flex items-center justify-center">
                        <BitCoinIcon />
                      </div>
                      <div className="flex flex-col ml-2">
                        <span className="text-xs">Bitcoin</span>
                        <span className="text-sm">BTC</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="flex flex items-center cursor-pointer">
                      <div className="w-[40px] h-[40px] flex items-center justify-center">
                        <EthereumIcon />
                      </div>
                      <div className="flex flex-col ml-2">
                        <span className="text-xs">Ethereum</span>
                        <span className="text-sm">ETH</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="flex flex items-center cursor-pointer">
                      <div className="w-[40px] h-[40px] flex items-center justify-center">
                        <SolanaIcon />
                      </div>
                      <div className="flex flex-col ml-2">
                        <span className="text-xs">Solana</span>
                        <span className="text-sm">SOL</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="flex flex items-center cursor-pointer">
                      <div className="w-[40px] h-[40px] flex items-center justify-center">
                        <PolygonIcon />
                      </div>
                      <div className="flex flex-col ml-2">
                        <span className="text-xs">Polygon</span>
                        <span className="text-sm">MATIC</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="flex flex items-center cursor-pointer">
                      <div className="w-[40px] h-[40px] flex items-center justify-center">
                        <FlowIcon />
                      </div>
                      <div className="flex flex-col ml-2">
                        <span className="text-xs">Flow</span>
                        <span className="text-sm">FLOW</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="flex flex items-center cursor-pointer">
                      <div className="w-[40px] h-[40px] flex items-center justify-center">
                        <AlgorandIcon />
                      </div>
                      <div className="flex flex-col ml-2">
                        <span className="text-xs">Algorand</span>
                        <span className="text-sm">ALGO</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="flex flex items-center cursor-pointer">
                      <div className="w-[40px] h-[40px] flex items-center justify-center">
                        <AvalancheIcon />
                      </div>
                      <div className="flex flex-col ml-2">
                        <span className="text-xs">Avalanche</span>
                        <span className="text-sm">AVAX</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="flex flex items-center cursor-pointer">
                      <div className="w-[40px] h-[40px] flex items-center justify-center">
                        <CardanoIcon />
                      </div>
                      <div className="flex flex-col ml-2">
                        <span className="text-xs">Cardano</span>
                        <span className="text-sm">ADA</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="flex flex items-center cursor-pointer">
                      <div className="w-[40px] h-[40px] flex items-center justify-center">
                        <Doguecoin />
                      </div>
                      <div className="flex flex-col ml-2">
                        <span className="text-xs">Doguecoin</span>
                        <span className="text-sm">Dogue</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="flex-2 donate-container md:ml-6">
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
              <div className="px-6 pb-6">
                <div className="flex donate-item text-black items-center mb-4">
                  <span className="text-md w-[120px]">Charity</span>
                  <div className="flex flex-1 justify-between items-center">
                    <span className="text-md">Foundation of nat...</span>
                    <ChevronRight className="cursor-pointer h-[10px]" color="black" />
                  </div>
                </div>
                <div className="flex donate-item text-black items-center mb-4">
                  <span className="text-md w-[120px]">AUD</span>
                  <div className="flex flex-1 justify-between items-center">
                    <span className="text-h">100</span>
                    <ChevronRight className="cursor-pointer h-[10px]" color="black" />
                  </div>
                </div>
                <div className="flex donate-item text-black items-center mb-4">
                  <span className="text-md w-[120px]">BTC</span>
                  <div className="flex flex-1 justify-between items-center">
                    <span className="text-h">0.000033</span>
                    <ChevronRight className="cursor-pointer h-[10px]" color="black" />
                  </div>
                </div>
                <div className="flex justify-center">
                  <select className="donate-item w-[75%] text-md text-black mb-4 outline-none !h-[40px]">
                    <option>One time purchase</option>
                  </select>
                </div>
                <div className="flex donate-item text-black items-center mb-4">
                  <span className="text-md w-[120px]">Pay with</span>
                  <div className="flex flex-1 justify-between items-center">
                    <span className="text-md">Ox028928</span>
                    <ChevronRight className="cursor-pointer h-[10px]" color="black" />
                  </div>
                </div>
                <div className="flex donate-item text-black items-center mb-4">
                  <span className="text-md w-[120px]">Donor info</span>
                  <div className="flex flex-1 justify-between items-center">
                    <span className="text-md">Name, Age, etc </span>
                    <ChevronRight className="cursor-pointer h-[10px]" color="black" />
                  </div>
                </div>
                <div className="flex donate-item text-black items-center mb-4">
                  <span className="text-md w-[120px]">Tax info</span>
                  <div className="flex flex-1 justify-between items-center">
                    <span className="text-md">Tax receipt, Email</span>
                    <ChevronRight className="cursor-pointer h-[10px]" color="black" />
                  </div>
                </div>
                <button className="btn w-full bg-[#007A00] rounded-[20px] text-white h-[60px] capitalize">
                  Preview Donation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicProfileContainer;
