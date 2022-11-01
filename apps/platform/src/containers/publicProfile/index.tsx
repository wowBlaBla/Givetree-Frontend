import React, { FC, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LoadingContainer } from "../../components/LoadingContainer";
import { ErrorContainer } from "../../components/ErrorContainer";
import { GetCharityDetailsDataQuery, GET_CHARITY_DETAILS_DATA } from "./charities.data";
import { DefaultParams, useLocation, useRoute } from "wouter";
import { PlatformRoute } from "../../configs/routes";
import { DonationForm } from "../../components/DonationForm";
import axios from "axios";
import { Charity } from "../../typed/charity";
import DefaultCharityIcon from "../../assets/images/default-charity-icon.jpg";
import Skeleton from "react-loading-skeleton";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { ItemEmptyBox } from "../../components/ItemEmptyBox";

const StandardTabs = ["About", "Donations", "NFTs", "Collections", "Mint pages"];
const CharityTabs = [
  "About",
  "Donations",
  "Fundraisers",
  "NFTs",
  "Collections",
  "Mint pages",
];

interface ParamProps extends DefaultParams {
  category: string;
  name: string;
}

const PublicProfileContainer: FC = () => {
  const [, setLocation] = useLocation();
  const [type, setType] = React.useState("charity");
  const [tabs, setTabs] = React.useState(StandardTabs);
  const [currentTab, setCurrentTab] = React.useState<string>();
  const [_, params] = useRoute<ParamProps, string>(PlatformRoute.PublicProfileDetails);
  const [profile, setProfile] = useState<Charity>();
  const [isLoading, setLoading] = useState<boolean>(true);

  React.useEffect(() => {
    if (type === "charity") {
      setTabs(CharityTabs);
      setCurrentTab(CharityTabs[0]);
    } else {
      setTabs(StandardTabs);
      setCurrentTab(StandardTabs[0]);
    }
  }, [type]);

  useEffect(() => {
    // if (params?.category == 'charity' || params?.category == 'standard') {
      fetchProfile();
    // }
  }, []);

  const fetchProfile = async() => {
    setLoading(true);
    try {
      await axios.get(
        `${process.env.NEXT_PUBLIC_API}/api/users?type=${params?.category}&username=${params?.name}&relations=walletAddresses`
      ).then(res => {
        if (res.data.length) setProfile(res.data[0]);
        else setLocation('/');
      }).catch(err => {
        setLocation('/');
      })
    } catch(err) {
      setLocation('/');
    }
    setLoading(false);
  }

  // if (isLoading) return <LoadingContainer message={"Welcome to charity"}/>

  return (
    <div className="public-profile">
      <div className="profile-banner">
        <div className="flex flex-col items-center max-w-layout-xl mx-auto md:flex-row">
          <div className="profile-avatar-container">
            <div className="relative w-full h-full z-50">
              {
                isLoading ? <Skeleton className="w-full aspect-square"/>
                : (
                  <img
                    src={profile?.profileImage || DefaultCharityIcon.src}
                    alt="charity"
                  />
                )
              }
            </div>
          </div>
        </div>
      </div>
      <div className="profile-info">
        <div className="max-w-layout-xl mx-auto flex flex-col">
          <span className="text-h text-black font-bold max-w-[680px] mb-2">
            {
              isLoading ? <Skeleton/> : profile?.title
            }
          </span>
          <span className="text-black max-w-[680px] mb-1">
            The Mulga The Artist is a funky cool artist from Sydney Australia who has a
            unique style of art which is known all around the world and is very popular.
          </span>
          <span>
            <LocationMarkerIcon className="w-4 h-4 inline-block"/>
            {
              isLoading ? <Skeleton/> : profile?.location ? profile.location : "World wide"
            }
          </span>
          <div className="flex py-4">
            <button className="btn text-white w-[120px] h-[30px] min-h-0 bg-[#0075FF] border-0 rounded-2xl-1 mr-4">
              Donate
            </button>
            {/* <button className="btn text-white w-[120px] h-[30px] min-h-0 bg-[white] border border-[#0075FF] text-[#0075FF] rounded-2xl-1">
              Fundraise
            </button> */}
          </div>
          <div className="profile-tab">
            <div className="tabs">
              {tabs.map((tab, index) => (
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
            <div className="flex-3">
              {currentTab === "About" ? (
                <div className="flex flex-col bg-white rounded-2xl-1 border border-[#717171] text-black p-8 min-h-[20rem]">
                  <span className="text-lg font-bold">Bio</span>
                  <span>
                    {
                      isLoading ? (
                        <>
                          <Skeleton/>
                          <Skeleton/>
                          <Skeleton/>
                        </>
                      ) : profile?.bio
                    }
                  </span>
                </div>
              ) : currentTab === "Donations" ? (
                <div className="bg-white rounded-t-2xl-1 border border-[#717171] text-black">
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
              ) : currentTab === "NFTs" ? (
                <></>
              ) : currentTab === "Collections" ? (
                <></>
              ) : (
                <></>
              )}
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
            <div className="flex-2 md:ml-6">
              <DonationForm
                charityAddress={profile?.walletAddresses ? profile.walletAddresses[0].address : ""}
                charityName={profile?.title ? profile.title : ""}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicProfileContainer;
