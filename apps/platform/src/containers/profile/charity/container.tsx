import { FC } from "react";
import { Route } from "wouter";
import { ProfileSideBar } from "../../../components/ProfileSidebar";
import { Fundraisers } from "./fundraisers";
import { Mint } from "./mint";
import { ProfileNFTs } from "./nfts";
import { Profile } from "./profile";
import { Settings } from "./settings";

export const CharityCustomerPortal:FC = () => {
    return (
        <div className="profile-container flex">
            <ProfileSideBar/>
            <div className="content-wrapper w-full">
                <Route path="/profile/charity/home">
                    <Profile/>
                </Route>
                <Route path="/profile/charity/nft">
                    <ProfileNFTs/>
                </Route>
                <Route path="/profile/charity/mint">
                    <Mint/>
                </Route>
                <Route path="/profile/charity/fundraisers">
                    <Fundraisers/>
                </Route>
                <Route path="/profile/charity/settings">
                    <Settings/>
                </Route>
            </div>
        </div>
    )
}