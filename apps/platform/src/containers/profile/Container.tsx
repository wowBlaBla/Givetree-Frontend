import { FC } from "react";
import { Route } from "wouter";
import { ProfileSideBar } from "../../components/ProfileSidebar";
import { Fundraisers } from "./Fundraisers";
import { Mint } from "./Mint";
import { ProfileNFTs } from "./Nfts";
import { Profile } from "./Profile";
import { Settings } from "./Settings";

export const CreatorCustomerPortal: FC = () => {
  return (
    <div className="profile-container flex">
      <ProfileSideBar />
      <div className="content-wrapper w-full">
        <Route path="/profile/creator/home">
          <Profile />
        </Route>
        <Route path="/profile/creator/nft">
          <ProfileNFTs />
        </Route>
        <Route path="/profile/creator/mint">
          <Mint />
        </Route>
        <Route path="/profile/creator/fundraisers">
          <Fundraisers />
        </Route>
        <Route path="/profile/creator/newfundraise">
          <Fundraisers />
        </Route>
        <Route path="/profile/creator/settings">
          <Settings />
        </Route>
      </div>
    </div>
  );
};
