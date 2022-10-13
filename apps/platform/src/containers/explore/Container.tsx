import { FC } from "react";
import { Route } from "wouter";
import { ExploreSideBar } from "../../components/ExploreSidebar";
import { Charities } from "./Charities";
import { Creators } from "./Creators";
import { Fundraisers } from "./Fundraisers";

export const ExplorePortal: FC = () => {
  return (
    <div className="profile-container flex">
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
