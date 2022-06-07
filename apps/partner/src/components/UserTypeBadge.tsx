import React, { FC } from "react";
import cx from "classnames";
import { PartnerType } from "../typed/partnerType";
import { startCase } from "lodash";

interface UserTypeBadgeProps {
  type: PartnerType;
}

export const UserTypeBadge: FC<UserTypeBadgeProps> = ({ type }) => (
  <div
    className={cx("badge", {
      "badge-secondary": type === PartnerType.Charity,
      "badge-primary": type === PartnerType.ContentCreator,
    })}
  >
    {startCase(type)}
  </div>
);
