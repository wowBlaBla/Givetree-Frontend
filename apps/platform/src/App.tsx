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
import { CharityDetailsContainer } from "./containers/charities/detail/Details";
import { MarketplaceListingContainer } from "./containers/marketplace/MarketplaceListing";

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
              {(params) => <CharityDetailsContainer charityName={params.charityName} />}
            </Route>

            <Route path={PlatformRoute.CharityListing}>
              <CharityListingContainer />
            </Route>

            <Route path={PlatformRoute.MarketplaceListing}>
              <MarketplaceListingContainer />
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
