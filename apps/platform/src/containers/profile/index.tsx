import { FC, useState } from "react";
import { Route, Switch } from "wouter";
import { HomeIcon } from "@heroicons/react/solid";
import { ProfileSideBar } from "./ProfileSidebar";
import { Home } from "./Home";
import { Settings } from "./Settings";
// import { MyWallets } from "./MyWallets";
import { MyNFTs } from "./MyNFTs";
import { MyCollections } from "./MyCollections";
import { MyListings } from "./MyListings";
import { MyDonations } from "./MyDonations";
import { NewNFT } from "./NewNFT";
import { NewCollection } from "./NewCollection";
import { NewListing } from "./NewListing";
import { useAuth } from "../../context/AuthContext";

const ProfilePortal: FC = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const { authUser } = useAuth();
  console.log(authUser);

  return (
    <div className="profile-container flex flex-col lg:flex-row">
      <ProfileSideBar visible={showSideBar} setVisible={setShowSideBar} />
      {/* <div className="absolute lg:hidden justify-end py-2 px-4 bg-[#2F3136]"> */}
      <HomeIcon
        className={`w-7 h-7 cursor-pointer absolute lg:hidden z-20 top-[94px] right-[24px] ${
          showSideBar ? "fill-white" : ""
        }`}
        onClick={() => setShowSideBar(!showSideBar)}
      />
      {/* </div> */}
      <div className="content-wrapper relative w-full">
        {authUser?.user.email && !authUser?.user.isEmailVerified ? (
          <div className="absolute w-full h-[32px] bg-[#BD00FF] top-0 left-0 z-10 flex items-center justify-center text-white">
            <span className="text-sm lg:text-lg">
              Please verify your email (You can find verification link at your email)
            </span>
          </div>
        ) : null}
        <Switch>
          <Route path="/profile/home">
            <Home />
          </Route>
          {/* <Route path="/profile/wallets">
            <MyWallets />
          </Route> */}
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
          <Route path="/profile/new-listing/:networkName/:address/:tokenId">
            {(params) => (
              <NewListing
                networkName={params.networkName}
                address={params.address}
                tokenId={params.tokenId}
              />
            )}
          </Route>
          <Route path="/profile/settings">
            <Settings />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default ProfilePortal;
