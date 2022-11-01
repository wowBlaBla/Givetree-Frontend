import { FC } from "react";
import { EthereumIcon } from "./EthereumIcon";
import { PolygonIcon } from "./PolygonIcon";

interface IconProps {
  network?: string;
}
  
export const NetworkIcon:FC<IconProps> = ({ network }) => {
    return (
      <>
        {
          network == "ethereum" ? <EthereumIcon className="w-8 h-8"/>
          : (
            network == "polygon" ? <PolygonIcon className="w-8 h-8"/> : ""
          )
        }
      </>
    )
}