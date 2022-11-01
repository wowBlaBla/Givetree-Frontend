import { FC } from "react";
import { Route } from "wouter";
import { ExploreSideBar } from "./ExploreSidebar";
import HomeContainer from "./Home";
import { Charities } from "./Charities";
import { Creators } from "./Creators";
import { NFTs } from "./NFTs";
import { Collections } from "./Collections";
import { Causes } from "./Causes";
import { Leaderboards } from "./Leaderboards";
import { MintPages } from "./MintPages";
import { AppFooter } from "../../components/AppFooter";

const ExplorePortal: FC = () => {
  return (
    <div className="profile-container flex flex-1">
      <ExploreSideBar />
      <div className="content-wrapper w-full">
        <Route path="/explore/home">
          <HomeContainer isHome />
          <AppFooter />
        </Route>
        <Route path="/explore/nfts">
          <NFTs />
        </Route>
        <Route path="/explore/collections">
          <Collections />
        </Route>
        <Route path="/explore/charities">
          <Charities />
        </Route>
        <Route path="/explore/creators">
          <Creators />
        </Route>
        <Route path="/explore/causes">
          <Causes />
        </Route>
        <Route path="/explore/leader-borders">
          <Leaderboards />
        </Route>
        <Route path="/explore/mint-pages">
          <MintPages />
        </Route>
      </div>
    </div>
  );
};

export default ExplorePortal;
