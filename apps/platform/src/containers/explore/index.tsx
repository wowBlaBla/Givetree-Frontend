import { FC } from "react";
import { Redirect, Route } from "wouter";
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
import { WelcomePage } from "./about/Welcome";
import { FAQsPage } from "./about/FAQs";
import { SocialsPage } from "./about/Socials";
import { ContactUsPage } from "./about/ContactUs";
import { TermsOfUsePage } from "./about/TermsOfUse";
import { PrivacyPolicyPage } from "./about/PrivacyPolicy";

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
        <Route path="/explore/about-welcome">
          <WelcomePage />
        </Route>
        <Route path="/explore/about-faqs">
          <FAQsPage />
        </Route>
        <Route path="/explore/about-socials">
          <SocialsPage />
        </Route>
        <Route path="/explore/about-contact-us">
          <ContactUsPage />
        </Route>
        <Route path="/explore/about-terms-of-us">
          <TermsOfUsePage />
        </Route>
        <Route path="/explore/about-privacy-policy">
          <PrivacyPolicyPage />
        </Route>
      </div>
    </div>
  );
};

export default ExplorePortal;
