import { FC } from "react";
import { Route } from "wouter";
import { ProfileSideBar } from "../../../components/ProfileSidebar";
import { Fundraisers } from "./fundraisers";
import { Mint } from "./mint";
import { ProfileNFTs } from "./nfts";
import { Profile } from "./profile";
import { Settings } from "./settings";

export const ProfileContainer:FC = () => {
    return (
        <div className="profile-container flex">
            <ProfileSideBar/>
            <div className="content-wrapper w-full">
                <Route path="/profile/creator/home">
                    <Profile/>
                </Route>
                <Route path="/profile/creator/nft">
                    <ProfileNFTs/>
                </Route>
                <Route path="/profile/creator/mint">
                    <Mint/>
                </Route>
                <Route path="/profile/creator/fundraisers">
                    <Fundraisers/>
                </Route>
                <Route path="/profile/creator/settings">
                    <Settings/>
                </Route>
            </div>
        </div>
    )
}