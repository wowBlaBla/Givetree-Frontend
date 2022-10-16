import { FC } from "react";
import { Route } from "wouter";
import { ExploreSideBar } from "../../components/ExploreSidebar";
import { Charities } from "./Charities";
import { Creators } from "./Creators";
import { Fundraisers } from "./Fundraisers";

const ExplorePortal: FC = () => {
  return (
    <div className="profile-container flex flex-1">
      <ExploreSideBar />
      <div className="content-wrapper w-full">
        <Route path="/explore/fundraisers">
          <Fundraisers />
        </Route>
        <Route path="/explore/creators">
          <Creators />
        </Route>
        <Route path="/explore/charities">
          <Charities />
        </Route>
      </div>
    </div>
  );
};

export default ExplorePortal;