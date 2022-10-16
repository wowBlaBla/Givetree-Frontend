import React from "react";
import { ToastContainer } from "react-toastify";
import { Redirect, Route, Router, Switch } from "wouter";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import HomeContainer from "./containers/home";
import ProfilePortal from "./containers/profile";
import ExplorePortal from "./containers/explore";
import CharityProfileContainer from "./containers/publicProfile";

import { AppFooter } from "./components/AppFooter";
import { AppHeader } from "./components/AppHeader";
import ScrollToTop from "./components/ScrollToTop";

import { CampaignDetailsContainer } from "./containers/campaigns/detail/Details";
import { CampaignListingContainer } from "./containers/campaigns/listing/Listing";
import { MarketplaceListingContainer } from "./containers/marketplace/MarketplaceListing";
import { SalesContainer } from "./containers/sales/Sales";

import { CollectionContainer } from "./containers/collection/collection";

import { AUTH_USER, IStore } from "./store/reducers/auth.reducer";
import { SideNavigation } from "./components/SideNavigation";
import { AboutContainer } from "./containers/about/container";
import { updateAuthed } from "./store/actions/auth.action";

import { PlatformRoute } from "./configs/routes";

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

              <Route path={PlatformRoute.ItemDetails}>
                {(params) => <SalesContainer campaignName={params.campaignName} />}
              </Route>

              <Route path={PlatformRoute.ProfileDetails}>
                {() => {
                  return (
                    <>
                      {!authedUser ? (
                        <Redirect to={PlatformRoute.Home} />
                      ) : (
                        <ProfilePortal />
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
