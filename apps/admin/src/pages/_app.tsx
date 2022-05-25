import React, { FC } from "react";
import type { AppProps } from "next/app";

import "../assets/styles/global.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <div className="flex flex-col flex-1 w-full mx-auto" suppressHydrationWarning>
    <Component {...pageProps} />
  </div>
);

export default MyApp;
