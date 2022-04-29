import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppFooter } from "./components/AppFooter";
import { AppHeader } from "./components/AppHeader";
import ScrollToTop from "./components/ScrollToTop";
import { MarketplaceRoute } from "./configs/routes";

import { HomeContainer } from "./containers/home/Home";
import { CampaignDetailsContainer } from "./containers/campaigns/Details";
import { CampaignListingContainer } from "./containers/campaigns/Listing";
import { CollectionsListingContainer } from "./containers/collections/Listing";
import { ImpactPartnerListingsContainer } from "./containers/impact-partners/Listings";
import { MintEventContainer } from "./containers/mint-event/MintEvent";

const App = () => (
  <Router>
    <ScrollToTop>
      <div className="flex flex-col h-full min-h-screen bg-gray-50">
        <AppHeader />
        <div className="flex flex-col flex-1 mt-20">
          <Routes>
            <Route path={MarketplaceRoute.Home} element={<HomeContainer />} />
            <Route
              path={MarketplaceRoute.CampaignDetails}
              element={<CampaignDetailsContainer />}
            />
            <Route
              path={MarketplaceRoute.CampaignListing}
              element={<CampaignListingContainer />}
            />
            <Route
              path={MarketplaceRoute.CollectionsListing}
              element={<CollectionsListingContainer />}
            />
            <Route
              path={MarketplaceRoute.ImpactPartnerListing}
              element={<ImpactPartnerListingsContainer />}
            />
            <Route
              path={MarketplaceRoute.MintingEvent}
              element={<MintEventContainer />}
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
