import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppFooter } from "./components/AppFooter";
import { AppHeader } from "./components/AppHeader";
import { MarketplaceRoute } from "./configs/routes";
import { CollectionListingsContainer } from "./containers/collections/Listings";
import { HomeContainer } from "./containers/home/home";
import { ImpactPartnerListingsContainer } from "./containers/impact-partners/Listings";

const App = () => (
  <BrowserRouter>
    <div className="flex flex-col h-full min-h-screen bg-gray-50">
      <AppHeader />
      <Routes>
        <Route path={MarketplaceRoute.Home} element={<HomeContainer />} />
        <Route
          path={MarketplaceRoute.CollectionsListing}
          element={<CollectionListingsContainer />}
        />
        <Route
          path={MarketplaceRoute.ImpactPartnersListing}
          element={<ImpactPartnerListingsContainer />}
        />
      </Routes>

      <AppFooter />
    </div>
  </BrowserRouter>
);

export default App;
