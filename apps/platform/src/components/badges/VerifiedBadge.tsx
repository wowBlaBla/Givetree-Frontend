import React, { FC } from "react";
import cx from "classnames";
import { VerifiedBadgeType } from "../../typed/enum/verifiedBadgeType";

const getTooltipText = (type: VerifiedBadgeType) => {
  switch (type) {
    case VerifiedBadgeType.Collection:
      return "This collection belongs to a verified account";
    case VerifiedBadgeType.Account:
      return "This is a verified account";
    case VerifiedBadgeType.Charity:
      return "This is a verified charity";
    case VerifiedBadgeType.Unknown:
      return "This is unverified";
    default:
      return "This is unverified";
  }
};

interface VerifiedBadgeProps {
  className?: string;
  type: VerifiedBadgeType;
}

export const VerifiedBadge: FC<VerifiedBadgeProps> = ({ className, type }) => {
  const tooltipText = getTooltipText(type);

  return (
    <div className="tooltip tooltip-top z-30" data-tip={tooltipText}>
      <svg
        className={cx("w-4 h-4 text-white fill-current", className)}
        width="20"
        height="20"
        viewBox="0 0 18 20"
        fill="#f95C32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.4879 3.88467L10.5121 0.408239C9.57639 -0.13608 8.4236 -0.13608 7.48794 0.408239L1.51206 3.88467C0.576395 4.42899 0 5.43493 0 6.52357V13.4764C0 14.5651 0.576394 15.571 1.51206 16.1153L7.48794 19.5918C8.4236 20.1361 9.57639 20.1361 10.5121 19.5918L16.4879 16.1153C17.4236 15.571 18 14.5651 18 13.4764V6.52357C18 5.43493 17.4236 4.42899 16.4879 3.88467ZM8.49598 2.16751C8.80787 1.98607 9.19213 1.98607 9.50402 2.16751L15.4799 5.64394C15.7918 5.82538 15.9839 6.16069 15.9839 6.52357V13.4764C15.9839 13.8393 15.7918 14.1746 15.4799 14.3561L9.50402 17.8325C9.19213 18.0139 8.80787 18.0139 8.49598 17.8325L2.5201 14.3561C2.20821 14.1746 2.01608 13.8393 2.01608 13.4764V6.52357C2.01608 6.16069 2.20821 5.82538 2.5201 5.64394L8.49598 2.16751ZM12.3346 8.567C12.6626 8.11374 12.5639 7.47837 12.114 7.14787C11.6642 6.81737 11.0336 6.91688 10.7056 7.37014L8.54699 10.353L7.77427 9.36954C7.42871 8.92972 6.79472 8.85544 6.35822 9.20363C5.92172 9.55183 5.848 10.1906 6.19357 10.6305L7.78963 12.6619C7.98518 12.9108 8.28496 13.0532 8.59994 13.0469C8.91492 13.0407 9.20887 12.8863 9.39449 12.6299L12.3346 8.567Z"
          fill="#f95C32"
        />
      </svg>
    </div>
  );
};
