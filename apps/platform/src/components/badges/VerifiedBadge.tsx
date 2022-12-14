import React, { FC } from "react";
import cx from "classnames";
import { VerifiedBadgeType } from "../../typed/enum/verifiedBadgeType";

const getTooltipText = (type: VerifiedBadgeType) => {
  switch (type) {
    case VerifiedBadgeType.Collection:
      return "This collection belongs to a verified creator.";
    case VerifiedBadgeType.ContentCreator:
      return "This is a verified creator.";
    case VerifiedBadgeType.Charity:
      return "This is a verified charity.";
    case VerifiedBadgeType.Unknown:
      return "This is NOT verified.";
    default:
      return "This is NOT verified.";
  }
};

interface VerifiedBadgeProps {
  className?: string;
  isVerified: boolean;
  large?: boolean;
  type: VerifiedBadgeType;
}

export const VerifiedBadge: FC<VerifiedBadgeProps> = ({
  className,
  isVerified,
  large,
  type,
}) => {
  const tooltipText = getTooltipText(type);

  return (
    <>
      {isVerified && (
        <div className="z-30 tooltip tooltip-top" data-tip={tooltipText}>
          <svg
            className={cx("w-5 h-5 text-white fill-current", className, {
              "w-3.5 h-3.5 mb-1": !large,
              "w-6 h-6 mb-1.5": large,
            })}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.28125C12 6.70078 11.8992 7.08984 11.6977 7.44609C11.4961 7.80234 11.2266 8.08125 10.8867 8.27578C10.8961 8.33906 10.9008 8.4375 10.9008 8.57109C10.9008 9.20625 10.6875 9.74531 10.2656 10.1906C9.84141 10.6383 9.33047 10.8609 8.73281 10.8609C8.46562 10.8609 8.21016 10.8117 7.96875 10.7133C7.78125 11.0977 7.51172 11.407 7.15781 11.6437C6.80625 11.8828 6.41953 12 6 12C5.57109 12 5.18203 11.8852 4.83516 11.6508C4.48594 11.4187 4.21875 11.107 4.03125 10.7133C3.78984 10.8117 3.53672 10.8609 3.26719 10.8609C2.66953 10.8609 2.15625 10.6383 1.72734 10.1906C1.29844 9.74531 1.08516 9.20391 1.08516 8.57109C1.08516 8.50078 1.09453 8.40234 1.11094 8.27578C0.771094 8.07891 0.501563 7.80234 0.3 7.44609C0.100781 7.08984 0 6.70078 0 6.28125C0 5.83594 0.1125 5.42578 0.335156 5.05547C0.557813 4.68516 0.857812 4.41094 1.23281 4.23281C1.13437 3.96563 1.08516 3.69609 1.08516 3.42891C1.08516 2.79609 1.29844 2.25469 1.72734 1.80937C2.15625 1.36406 2.66953 1.13906 3.26719 1.13906C3.53437 1.13906 3.78984 1.18828 4.03125 1.28672C4.21875 0.902344 4.48828 0.592969 4.84219 0.35625C5.19375 0.119531 5.58047 0 6 0C6.41953 0 6.80625 0.119531 7.15781 0.353906C7.50937 0.590625 7.78125 0.9 7.96875 1.28437C8.21016 1.18594 8.46328 1.13672 8.73281 1.13672C9.33047 1.13672 9.84141 1.35938 10.2656 1.80703C10.6898 2.25469 10.9008 2.79375 10.9008 3.42656C10.9008 3.72187 10.8562 3.98906 10.7672 4.23047C11.1422 4.40859 11.4422 4.68281 11.6648 5.05313C11.8875 5.42578 12 5.83594 12 6.28125ZM5.74453 8.08828L8.22187 4.37813C8.28516 4.27969 8.30391 4.17188 8.28281 4.05703C8.25937 3.94219 8.20078 3.85078 8.10234 3.78984C8.00391 3.72656 7.89609 3.70547 7.78125 3.72188C7.66406 3.74063 7.57031 3.79688 7.5 3.89531L5.31797 7.17656L4.3125 6.17344C4.22344 6.08437 4.12031 6.04219 4.00547 6.04688C3.88828 6.05156 3.7875 6.09375 3.69844 6.17344C3.61875 6.25312 3.57891 6.35391 3.57891 6.47578C3.57891 6.59531 3.61875 6.69609 3.69844 6.77813L5.07891 8.15859L5.14688 8.2125C5.22656 8.26641 5.30859 8.29219 5.38828 8.29219C5.54531 8.28984 5.66484 8.22422 5.74453 8.08828Z"
              fill="#3897F0"
            />
          </svg>
        </div>
      )}
    </>
  );
};
