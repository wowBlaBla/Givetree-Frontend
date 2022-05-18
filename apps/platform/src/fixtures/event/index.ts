import { faker as gen } from "@faker-js/faker";
import { sample } from "lodash";
import { CampaignEvent, CampaignEventRound } from "../../typed/campaign-event";
import { EventRoundType } from "../../typed/enum/eventType";

export const genCampaignEventRound = (
  x?: Partial<CampaignEventRound>
): CampaignEventRound => ({
  id: gen.datatype.uuid(),
  name: "Minting round",
  type: sample(Object.values(EventRoundType)) as EventRoundType,
  supply: gen.datatype.number({ min: 100, max: 10000 }),
  mintPrice: gen.datatype.number({ min: 3, max: 10 }),
  maxToken: gen.datatype.number({ min: 1, max: 3 }),
  whitelistCondition: gen.lorem.sentence(),
  startDate: gen.date.future(),
  endDate: gen.date.future(),
  eventNameOverride: gen.datatype.boolean() ? gen.lorem.sentence(1) : undefined,
  ...x,
});

export const genCampaignEvent = (x?: Partial<CampaignEvent>): CampaignEvent => ({
  id: gen.datatype.uuid(),
  name: gen.lorem.words(3),
  rounds: [genCampaignEventRound(), genCampaignEventRound()],
  contractAddress: gen.datatype.uuid(),
  ...x,
});
