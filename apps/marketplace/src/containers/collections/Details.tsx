import React, { FC } from "react";
// import cx from "classnames";

import MulgaBgImg from "./../../assets/images/mulga-bg-image.png";
import { DarkBlendTop } from "../../components/BoxBlends";
import { BackgroundImage } from "../../components/BackgroundImage";

export const CollectionDetailsContainer: FC = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className="relative min-w-full min-h-full min-h-96 xl:h-128 overflow-hidden">
        <BackgroundImage imageAsset={MulgaBgImg.src} />
        <DarkBlendTop large />
      </div>

      <div>Hello</div>
    </div>
  );
};
