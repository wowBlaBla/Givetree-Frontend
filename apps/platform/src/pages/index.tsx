import React from "react";
import dynamic from "next/dynamic";

const NoSSRComponent = dynamic(() => import("../App"), {
  ssr: false,
});

const App = () => <NoSSRComponent />;

export default App;
