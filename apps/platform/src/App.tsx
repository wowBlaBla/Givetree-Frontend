import React from "react";
import { ToastContainer } from "react-toastify";
import { Route, Router, Switch } from "wouter";
import { AppFooter } from "./components/AppFooter";
import { AppHeader } from "./components/AppHeader";
import ScrollToTop from "./components/ScrollToTop";
import { PlatformRoute } from "./configs/routes";

import { HomeContainer } from "./containers/home/Home";
import { CampaignDetailsContainer } from "./containers/campaigns/detail/Details";
import { CampaignListingContainer } from "./containers/campaigns/listing/Listing";
import { CharityListingContainer } from "./containers/charities/listing/Listing";
import { MarketplaceListingContainer } from "./containers/marketplace/MarketplaceListing";
import { SalesContainer } from "./containers/sales/Sales";
import { FundraisersContainer } from "./containers/fundraisers/fundraisers";
import { CreatorsContainer } from "./containers/creators/Listing/creators";
import { CreatorProfile } from "./containers/creators/Details/creators";
import { CharityProfileContainer } from "./containers/charities/CharityProfile";
import { CollectionContainer } from "./containers/collection/collection";
import { ProfileContainer } from "./containers/profile/creator/container";

const App = () => (
  <Router>
    <ScrollToTop>
      <div className="flex flex-col h-full min-h-screen bg-gray-50">
        <AppHeader />

        <div className="flex flex-col flex-1 mt-12 sm:mt-16">
          <ToastContainer
            className="mt-16"
            position="top-right"
            autoClose={5000}
            closeOnClick
          />

          <Switch>
            <Route path={PlatformRoute.Home}>
              <HomeContainer />
            </Route>

            <Route path={PlatformRoute.CampaignDetails}>
              {(params) => (
                <CampaignDetailsContainer campaignName={params.campaignName} />
              )}
            </Route>

            <Route path={PlatformRoute.CampaignListing}>
              <CampaignListingContainer />
            </Route>

            <Route path={PlatformRoute.CharityDetails}>
              {(params) => <CharityProfileContainer charityName={params.charityName} />}
            </Route>

            <Route path={PlatformRoute.CharityListing}>
              <CharityListingContainer />
            </Route>

            <Route path={PlatformRoute.MarketplaceListing}>
              <MarketplaceListingContainer />
            </Route>
            
            <Route path={PlatformRoute.FundraiserDetails}>
              <FundraisersContainer/>
            </Route>

            <Route path={PlatformRoute.CreatorListing}>
              <CreatorsContainer/>
            </Route>

            <Route path={PlatformRoute.CreatorDetails}>
              {(params) => (
                <CreatorProfile creatorName={params.creatorName}/>
              )}
            </Route>

            <Route path={PlatformRoute.CollectionDetails}>
              {(params) => (
                <CollectionContainer collectionName={params.collectionName}/>
              )}
            </Route>

            <Route path={PlatformRoute.ItemDetails}>
              {(params) => (
                <SalesContainer campaignName={params.campaignName}/>
              )}
            </Route>

            <Route path={PlatformRoute.ProfileDetails}>
                {(params) => (
                  <ProfileContainer/>
                )}
            </Route>

            <Route path="*">
              <HomeContainer />
            </Route>
          </Switch>
        </div>

        <AppFooter />
      </div>
    </ScrollToTop>
  </Router>
);

export default App;
