import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppFooter } from "./components/AppFooter";
import { AppHeader } from "./components/AppHeader";
import ScrollToTop from "./components/ScrollToTop";
import { MarketplaceRoute } from "./configs/routes";
import { CollectionDetailsContainer } from "./containers/collections/Details";
import { CollectionListingsContainer } from "./containers/collections/Listings";
import { HomeContainer } from "./containers/home/Home";
import { ImpactPartnerListingsContainer } from "./containers/impact-partners/Listings";

const App = () => (
  <Router>
    <ScrollToTop>
      <div className="flex flex-col h-full min-h-screen bg-gray-50">
        <AppHeader />
        <div className="mt-16">
          <div className="mt-3">
            <Routes>
              <Route path={MarketplaceRoute.Home} element={<HomeContainer />} />
              <Route
                path={MarketplaceRoute.CollectionDetails}
                element={<CollectionDetailsContainer />}
              />
              <Route
                path={MarketplaceRoute.CollectionListing}
                element={<CollectionListingsContainer />}
              />
              <Route
                path={MarketplaceRoute.ImpactPartnerListing}
                element={<ImpactPartnerListingsContainer />}
              />

              <Route path="*" element={<HomeContainer />} />
            </Routes>
          </div>
        </div>

        <AppFooter />
      </div>
    </ScrollToTop>
  </Router>
);

export default App;
