import React from "react";

import AppContainer from "./Routes";
import { WalletProvider } from "./context/WalletContext";
import { AuthProvider } from "./context/AuthContext";
import { AppContextProvider } from "./context/AppContext";
import { ExploreProvider } from "./context/ExploreContext";

const App = () => {
  return (
    <AppContextProvider>
      <AuthProvider>
        <WalletProvider>
          <ExploreProvider>
            <AppContainer />
          </ExploreProvider>
          </WalletProvider>
      </AuthProvider>
    </AppContextProvider>
  );
};

export default App;
