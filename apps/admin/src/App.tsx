import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { Auth0Provider } from "@auth0/auth0-react";

import { client } from "./pages/api/client";
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from "./configs/constants";
import { AdminRoute } from "./configs/routes";
import { AppHeader } from "./components/AppHeader";
import { HomeContainer } from "./containers/home/Home";
import { ProtectedAppContainer } from "./containers/protected/ProtectedApp";
import { OnboardingContainer } from "./containers/onboarding/Onboarding";

const App = () => (
  <ApolloProvider client={client}>
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      redirectUri={`${window.location.origin}${AdminRoute.Onboarding}`}
    >
      <div className="flex flex-col h-full min-h-screen bg-gray-50">
        <Router>
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
        </Router>
      </div>
    </Auth0Provider>
  </ApolloProvider>
);

export default App;
