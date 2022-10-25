import { FC } from "react";
import { Route } from "wouter";
import { ProfileSideBar } from "./ProfileSidebar";
import { Fundraisers } from "./Fundraisers";
import { Mint } from "./Mint";
import { Settings } from "./Settings";
import { MyWallets } from "./MyWallets";
import { NewCollection } from "./NewCollection";
import { MyNFTs } from "./MyNFTs";
import { MyCollections } from "./MyCollections";
import { MyListings } from "./MyListings";
import { MyDonations } from "./MyDonations";
import { Home } from "./Home";

const ProfilePortal: FC = () => {
  return (
    <div className="profile-container flex">
      <ProfileSideBar />
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
