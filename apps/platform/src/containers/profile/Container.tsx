import { FC } from "react";
import { Route } from "wouter";
import { ProfileSideBar } from "../../components/ProfileSidebar";
import { Fundraisers } from "./Fundraisers";
import { Mint } from "./Mint";
import { ProfileNFTs } from "./Nfts";
import { Profile } from "./Profile";
import { Settings } from "./Settings";

export const ProfilePortal: FC = () => {
  return (
    <div className="profile-container flex">
      <ProfileSideBar />
      <div className="content-wrapper w-full">
        <Route path="/profile/home">
          <Profile />
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
        <Route path="/profile/settings">
          <Settings />
        </Route>
      </div>
    </div>
  );
};
