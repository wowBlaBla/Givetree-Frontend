import { FC, useState } from "react";
import { Route } from "wouter";
import { HomeIcon } from "@heroicons/react/solid";
import { ProfileSideBar } from "./ProfileSidebar";
import { Home } from "./Home";
import { Settings } from "./Settings";
import { MyWallets } from "./MyWallets";
import { MyNFTs } from "./MyNFTs";
import { MyCollections } from "./MyCollections";
import { MyListings } from "./MyListings";
import { MyDonations } from "./MyDonations";
import { NewNFT } from "./NewNFT";
import { NewCollection } from "./NewCollection";
import { NewListing } from "./NewListing";

const ProfilePortal: FC = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div className="profile-container flex flex-col lg:flex-row">
      <ProfileSideBar visible={showSideBar} setVisible={setShowSideBar} />
      {/* <div className="absolute lg:hidden justify-end py-2 px-4 bg-[#2F3136]"> */}
      <HomeIcon
        className={`w-7 h-7 cursor-pointer absolute lg:hidden z-10 top-[94px] right-[24px] ${
          showSideBar ? "fill-white" : ""
        }`}
        onClick={() => setShowSideBar(!showSideBar)}
      />
      {/* </div> */}
      <div className="content-wrapper w-full">
        <Route path="/profile/home">
          <Home />
        </Route>
        {/* <Route path="/profile/home-appearance">
          <Appearance />
        </Route>
        <Route path="/profile/home-settings">
          <HomeSettings />
        </Route> */}
        <Route path="/profile/wallets">
          <MyWallets />
        </Route>
        <Route path="/profile/nfts">
          <MyNFTs />
        </Route>
        <Route path="/profile/collections">
          <MyCollections />
        </Route>
        <Route path="/profile/listings">
          <MyListings />
        </Route>
        <Route path="/profile/donations">
          <MyDonations />
        </Route>
        <Route path="/profile/new-nft">
          <NewNFT />
        </Route>
        <Route path="/profile/new-collection">
          <NewCollection />
        </Route>
        <Route path="/profile/new-listing">
          <NewListing />
        </Route>
        <Route path="/profile/settings">
          <Settings />
        </Route>
      </div>
    </div>
  );
};

export default ProfilePortal;
