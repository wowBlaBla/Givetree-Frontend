import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeContainer } from "./containers/home/home";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeContainer />} />
    </Routes>
  </BrowserRouter>
);

export default App;
