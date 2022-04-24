import React, { FC, ReactNode, useEffect } from "react";
import { useLocation } from "react-router";

interface ScrollToTopProps {
  children?: ReactNode;
}

const ScrollToTop: FC<ScrollToTopProps> = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <div>{props.children}</div>;
};

export default ScrollToTop;
