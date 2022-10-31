import React from "react";

import AppContainer from "./Routes";
import { WalletProvider } from "./context/WalletContext";
import { AuthProvider } from "./context/AuthContext";
import { AppContextProvider } from "./context/AppContext";
import { ExploreProvider } from "./context/ExploreContext";

const App = () => {
  return (
    <AppContextProvider>
      <WalletProvider>
        <AuthProvider>
          <ExploreProvider>
            <AppContainer />
          </ExploreProvider>
        </AuthProvider>
      </WalletProvider>
    </AppContextProvider>
  );
};

export default App;
