import React from "react";

import AppContainer from "./Routes";
import { WalletProvider } from "./context/WalletContext";
import { AuthProvider } from "./context/AuthContext";
import { AppContextProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppContextProvider>
      <WalletProvider>
        <AuthProvider>
          <AppContainer />
        </AuthProvider>
      </WalletProvider>
    </AppContextProvider>
  );
};

export default App;
