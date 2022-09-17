import React from "react";
import { ToastContainer } from "react-toastify";
import { Redirect, Route, Router, Switch } from "wouter";
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
import { CreatorCustomerPortal } from "./containers/profile/creator/container";
import { CharityCustomerPortal } from "./containers/profile/charity/container";
import { useSelector } from "react-redux";
import { IStore } from "./store/reducers/auth.reducer";
import { SideNavigation } from "./components/SideNavigation";
import { AboutContainer } from "./containers/about/container";

const App = () => {
  const walletAddress = useSelector<IStore, string>((state) => state.auth.walletAddress);

  return (
    <Router>
      <ScrollToTop>
        <AppHeader />
        <div className="flex h-full min-h-screen bg-gray-50">
          <SideNavigation/>
          <ToastContainer
            className="mt-16"
            position="top-right"
            autoClose={5000}
            closeOnClick
          />

            <Switch>
              <Route path={PlatformRoute.Home}>
                <div className="flex flex-col flex-1 max-h-layout overflow-y-auto dark:bg-light-dark">
                  <HomeContainer />
                  <AppFooter />
                </div>
              </Route>
              <div className="flex flex-col flex-1 max-h-layout overflow-y-auto dark:bg-light-dark">
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
                    {(params) => {
                      return (
                        <>
                          {
                            !walletAddress ? <Redirect to={PlatformRoute.Home}/>
                            : params.role == 'creator' ? <CreatorCustomerPortal/> : <CharityCustomerPortal/>
                          }
                        </>
                      )
                    }}
                </Route>
                
                <Route path={PlatformRoute.About}>
                    <AboutContainer/>
                </Route>

                <Route path="*">
                  <HomeContainer />
                </Route>
              </div>
            </Switch>

        </div>
      </ScrollToTop>
    </Router>
  )
}

export default App;
