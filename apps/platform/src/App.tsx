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
import { CreatorCustomerPortal } from "./containers/profile/creator/Container";
import { CharityCustomerPortal } from "./containers/profile/charity/container";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_USER, IStore } from "./store/reducers/auth.reducer";
import { SideNavigation } from "./components/SideNavigation";
import { AboutContainer } from "./containers/about/container";
import axios from "axios";
import { updateAuthed } from "./store/actions/auth.action";

const App = () => {
  const authedUser = useSelector<IStore, AUTH_USER | undefined>(
    (state) => state.auth.authedUser
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    const refreshToken = localStorage.getItem("refresh_token");
    if (refreshToken) {
      axios
        .post(`${process.env.NEXT_PUBLIC_API}/api/auth/refresh`, { refreshToken })
        .then((res) => {
          localStorage.setItem("access_token", res.data.accessToken);
          dispatch(
            updateAuthed({
              ...res.data,
              refreshToken: refreshToken,
            })
          );
        })
        .catch((err) => {
          console.log(err);
          dispatch(updateAuthed(undefined));
          localStorage.clear();
        });
    } else {
      dispatch(updateAuthed(undefined));
      localStorage.clear();
    }
  }, [dispatch]);

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
          <div className="flex flex-col flex-1 overflow-y-auto dark:bg-light-dark">
            <Switch>
              <Route path={PlatformRoute.Home}>
                <HomeContainer />
                <AppFooter />
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
                <FundraisersContainer />
              </Route>

              <Route path={PlatformRoute.CreatorListing}>
                <CreatorsContainer />
              </Route>

              <Route path={PlatformRoute.CreatorDetails}>
                {(params) => <CreatorProfile creatorName={params.creatorName} />}
              </Route>

              <Route path={PlatformRoute.CollectionDetails}>
                {(params) => (
                  <CollectionContainer collectionName={params.collectionName} />
                )}
              </Route>

              <Route path={PlatformRoute.ItemDetails}>
                {(params) => <SalesContainer campaignName={params.campaignName} />}
              </Route>

              <Route path={PlatformRoute.ProfileDetails}>
                {(params) => {
                  return (
                    <>
                      {!authedUser ? (
                        <Redirect to={PlatformRoute.Home} />
                      ) : params.role == "creator" ? (
                        <CreatorCustomerPortal />
                      ) : (
                        <CharityCustomerPortal />
                      )}
                    </>
                  );
                }}
              </Route>

              <Route path={PlatformRoute.About}>
                <AboutContainer />
              </Route>

              <Route path="*">
                <HomeContainer />
              </Route>
            </Switch>
          </div>
        </div>
      </ScrollToTop>
    </Router>
  );
};

export default App;
