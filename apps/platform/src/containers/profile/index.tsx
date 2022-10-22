import { FC } from "react";
import { Route } from "wouter";
import { ProfileSideBar } from "./ProfileSidebar";
import { Fundraisers } from "./Fundraisers";
import { Mint } from "./Mint";
import { ProfileNFTs } from "./Nfts";
import { Appearance } from "./Appearance";
import { Settings } from "./Settings";
import { HomeSettings } from "./HomeSettings";
import { MyWallets } from "./MyWallets";
import { NewCollection } from "./NewCollection";

const ProfilePortal: FC = () => {
  return (
    <div className="profile-container flex">
      <ProfileSideBar />
      <div className="content-wrapper w-full">
        <Route path="/profile/home-appearance">
          <Appearance />
        </Route>
        <Route path="/profile/home-settings">
          <HomeSettings />
        </Route>
        <Route path="/profile/wallets">
          <MyWallets />
        </Route>
        <Route path="/profile/nft">
          <ProfileNFTs />
        </Route>
        <Route path="/profile/mint">
          <Mint />
        </Route>
        <Route path="/profile/fundraisers">
          <Fundraisers />
        </Route>
        <Route path="/profile/newfundraise">
          <Fundraisers />
        </Route>
        <Route path="/profile/newcollection">
          <NewCollection />
        </Route>
        <Route path="/profile/settings">
          <Settings />
        </Route>
      </div>
    </div>
  );
};

export default ProfilePortal;