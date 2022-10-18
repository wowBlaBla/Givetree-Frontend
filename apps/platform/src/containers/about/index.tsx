import { FC } from "react";
import { Route } from "wouter";
import { Welcome } from "./welcome";
import { AboutSideBar } from "./AboutSidebar";

const AboutPortal: FC = () => {
  return (
    <div className="flex">
      <AboutSideBar />
      <Route path="/about/welcome">
        <Welcome />
      </Route>
    </div>
  );
};

export default AboutPortal;
