import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdminRoute } from "./configs/routes";
import { AppHeader } from "./components/AppHeader";
import { HomeContainer } from "./containers/home/Home";
import { ProtectedAppContainer } from "./containers/protected/ProtectedApp";
import { OnboardingContainer } from "./containers/onboarding/Onboarding";

export const App = (): JSX.Element => {
  return (
    <div className="flex flex-col h-full min-h-screen bg-gray-50">
      <ProtectedAppContainer>
        <AppHeader />

        <div className="flex flex-1 flex-col mt-14 sm:mt-16">
          <Routes>
            <Route path={AdminRoute.Home} element={<HomeContainer />} />
            <Route path={AdminRoute.Onboarding} element={<OnboardingContainer />} />
            <Route path="*" element={<HomeContainer />} />
          </Routes>
        </div>
      </ProtectedAppContainer>
    </div>
  );
};
