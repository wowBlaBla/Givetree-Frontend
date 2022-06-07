import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdminRoute, PartnerRoute } from "./configs/routes";
import { AppHeader } from "./components/AppHeader";
import { HomeContainer } from "./containers/home/Home";
import { ProtectedAppContainer } from "./containers/protected/ProtectedApp";
import { OnboardingContainer } from "./containers/onboarding/Onboarding";
import { ToastContainer } from "react-toastify";

import "react-loading-skeleton/dist/skeleton.css";
import { AdminProtectedAppContainer } from "./containers/admin-protected/AdminProtectedApp";
import { AdminDashboardContainer } from "./containers/admin-dashboard/AdminDashboard";

export const App = (): JSX.Element => (
  <div className="relative flex flex-col flex-1 h-full min-h-screen bg-gray-50">
    <AppHeader />
    <div className="flex flex-col flex-1">
      <ToastContainer position="top-right" autoClose={5000} closeOnClick />
      <ProtectedAppContainer>
        <Routes>
          <Route path="/admin">
            <Route
              path={AdminRoute.Dashboard}
              element={
                <AdminProtectedAppContainer>
                  <AdminDashboardContainer />
                </AdminProtectedAppContainer>
              }
            />
          </Route>

          <Route path={PartnerRoute.Home} element={<HomeContainer />} />
          <Route path={PartnerRoute.Onboarding} element={<OnboardingContainer />} />

          <Route path="*" element={<HomeContainer />} />
        </Routes>
      </ProtectedAppContainer>
    </div>
  </div>
);
