import { startCase } from "lodash";
import { LegalEntityType } from "../../typed/legalEntityType";
import { PartnerType } from "../../typed/partnerType";

export const USER_TYPE_OPTIONS = [
  {
    id: PartnerType.ContentCreator,
    value: "Content Creator",
  },
  {
    id: PartnerType.Charity,
    value: "Charity",
  },
];

export const CHARITY_RADIO_OPTIONS = [
  {
    label: "Yes",
    value: "true",
  },
  {
    label: "No",
    value: "false",
  },
];

export const LEGAL_ENTITY_TYPE_OPTIONS = Object.entries(LegalEntityType).map(
  (legalEntity) => ({
    id: legalEntity[1],
    value: startCase(legalEntity[0]),
  })
);
