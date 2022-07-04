import React, { FC, PropsWithChildren, useLayoutEffect, useRef } from "react";
import cx from "classnames";

export type WalletCollapseProps = PropsWithChildren<{
  expanded: boolean;
  id: string;
}>;

export const WalletCollapse: FC<WalletCollapseProps> = ({ id, children, expanded }) => {
  const ref = useRef<HTMLDivElement>(null);
  const instantRef = useRef(true);
  const transition = "height 250ms ease-out";

  const openCollapse = () => {
    const node = ref.current;
    if (!node) return;

    requestAnimationFrame(() => {
      node.style.height = node.scrollHeight + "px";
    });
  };

  const closeCollapse = () => {
    const node = ref.current;
    if (!node) return;

    requestAnimationFrame(() => {
      node.style.height = node.offsetHeight + "px";
      node.style.overflow = "hidden";
      requestAnimationFrame(() => {
        node.style.height = "0";
      });
    });
  };

  useLayoutEffect(() => {
    if (expanded) {
      openCollapse();
    } else {
      closeCollapse();
    }
  }, [expanded]);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    function handleComplete() {
      if (!node) return;

      node.style.overflow = expanded ? "auto" : "hidden";
      if (expanded) {
        node.style.height = "auto";
      }
    }

    function handleTransitionEnd(event: TransitionEvent) {
      if (node && event.target === node && event.propertyName === "height") {
        handleComplete();
      }
    }

    if (instantRef.current) {
      handleComplete();
      instantRef.current = false;
    }

    node.addEventListener("transitionend", handleTransitionEnd);
    return () => node.removeEventListener("transitionend", handleTransitionEnd);
  }, [expanded]);

  return (
    <div
      className={cx("w-full", {
        "-mt-3": expanded,
      })}
      id={id}
      ref={ref}
      role="region"
      style={{ height: 0, transition: instantRef.current ? undefined : transition }}
    >
      {children}
    </div>
  );
};
