import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppFooter } from "./components/AppFooter";
import { AppHeader } from "./components/AppHeader";
import ScrollToTop from "./components/ScrollToTop";
import { PlatformRoute } from "./configs/routes";

import { HomeContainer } from "./containers/home/Home";
import { CampaignDetailsContainer } from "./containers/campaigns/detail/Details";
import { CampaignListingContainer } from "./containers/campaigns/listing/Listing";
import { CharityListingContainer } from "./containers/charities/listing/Listing";
import { MintEventContainer } from "./containers/mint-event/MintEvent";
import { CharityDetailsContainer } from "./containers/charities/detail/Details";
import { MarketplaceListingContainer } from "./containers/marketplace/MarketplaceListing";

const App = () => (
  <Router>
    <ScrollToTop>
      <div className="flex flex-col h-full min-h-screen bg-gray-50">
        <AppHeader />

        <div className="flex flex-col flex-1 mt-12 sm:mt-16">
          <Routes>
            <Route path={PlatformRoute.Home} element={<HomeContainer />} />

            <Route
              path={PlatformRoute.CampaignDetails}
              element={<CampaignDetailsContainer />}
            />

            <Route
              path={PlatformRoute.CampaignListing}
              element={<CampaignListingContainer />}
            />

            <Route path={PlatformRoute.MintingEvent} element={<MintEventContainer />} />

            <Route
              path={PlatformRoute.MarketplaceListing}
              element={<MarketplaceListingContainer />}
            />

            <Route
              path={PlatformRoute.CharityDetails}
              element={<CharityDetailsContainer />}
            />

            <Route
              path={PlatformRoute.CharityListing}
              element={<CharityListingContainer />}
            />

            <Route path="*" element={<HomeContainer />} />
          </Routes>
        </div>

        <AppFooter />
      </div>
    </ScrollToTop>
  </Router>
);

export default App;
