import React from "react";
import { ToastContainer } from "react-toastify";
import { Redirect, Route, Router, Switch } from "wouter";

import ExplorePortal from "./containers/explore";
import ProfilePortal from "./containers/profile";
import PublicProfileContainer from "./containers/publicProfile";
import AboutPortal from "./containers/about";

import { AppHeader } from "./components/AppHeader";
import ScrollToTop from "./components/ScrollToTop";

import { CampaignDetailsContainer } from "./containers/campaigns/detail/Details";
import { CampaignListingContainer } from "./containers/campaigns/listing/Listing";
import { MarketplaceListingContainer } from "./containers/marketplace/MarketplaceListing";
import { SalesContainer } from "./containers/sales/Sales";

import { CollectionContainer } from "./containers/collection/collection";

import { SideNavigation } from "./components/SideNavigation";

import { PlatformRoute } from "./configs/routes";
import { SignIn } from "./containers/auth/SignIn";
import { SignUp } from "./containers/auth/SignUp";
import { useAuth } from "./context/AuthContext";
import { PublicMintContainer } from "./containers/publicMint";

const Routes = () => {
  const { isAuth, initialized } = useAuth();

  if (!initialized) return null;

  return (
    <Router>
      <ScrollToTop>
        <AppHeader />
        <div className="app-container flex w-screen bg-gray-50">
          <SideNavigation />
          <ToastContainer
            className="mt-16"
            position="top-right"
            autoClose={5000}
            closeOnClick
          />
          <div
            className="flex flex-col flex-1 overflow-y-auto bg-light-gray"
            id="container"
          >
            <Switch>
              <Route path={"/login"}>
                <SignIn />
              </Route>
              <Route path={"/register"}>
                <SignUp />
              </Route>
              <Route path={PlatformRoute.CampaignDetails}>
                {(params) => (
                  <CampaignDetailsContainer campaignName={params.campaignName} />
                )}
              </Route>
              <Route path={PlatformRoute.CampaignListing}>
                <CampaignListingContainer />
              </Route>
              <Route path={PlatformRoute.PublicProfileDetails}>
                <PublicProfileContainer />
              </Route>
              <Route path={PlatformRoute.MarketplaceListing}>
                <MarketplaceListingContainer />
              </Route>
              <Route path={PlatformRoute.ExploreDetails}>
                <ExplorePortal />
              </Route>
              <Route path={PlatformRoute.CollectionDetails}>
                {(params) => (
                  <CollectionContainer collectionName={params.collectionName} />
                )}
              </Route>
              {/* <Route path={PlatformRoute.ItemDetails}>
                {(params) => <SalesContainer campaignName={params.campaignName} />}
              </Route> */}
              <Route path={PlatformRoute.ProfileDetails}>
                {() => {
                  return (
                    <>{!isAuth ? <Redirect to={"/explore/home"} /> : <ProfilePortal />}</>
                  );
                }}
              </Route>
              <Route path={PlatformRoute.About}>
                <AboutPortal />
              </Route>
              
              <Route path={PlatformRoute.AssetDetails}>
                {(params) => <SalesContainer network={params.network} collection={params.collection} tokenId={params.tokenId} />}
              </Route>
              
              <Route path={PlatformRoute.Mint}>
                <PublicMintContainer/>
              </Route>

              <Redirect to={"/explore/home"} />
            </Switch>
          </div>
        </div>
      </ScrollToTop>
    </Router>
  );
};

export default Routes;
