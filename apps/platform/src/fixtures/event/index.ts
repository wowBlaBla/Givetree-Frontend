import { faker as gen } from "@faker-js/faker";
import { CampaignEvent, CampaignEventRound } from "../../typed/campaign-event";
import { RoundType } from "../../typed/enum/eventType";

export const genCampaignEventRound = (
  _x?: Partial<CampaignEventRound>
): CampaignEventRound => ({
  id: gen.datatype.uuid(),
  name: "Minting round",
  type: RoundType.WhitelistToken,
  supply: gen.datatype.number({ min: 100, max: 10000 }),
  mintPrice: gen.datatype.number({ min: 3, max: 10 }),
  maxLimit: gen.datatype.number({ min: 1, max: 3 }),
  whitelistCondition: gen.lorem.paragraph(),
  startDate: gen.date.future(2),
  endDate: gen.date.future(3),
});

export const genCampaignEvent = (_x?: Partial<CampaignEvent>): CampaignEvent => ({
  id: gen.datatype.uuid(),
  startDate: gen.date.future(2),
  name: gen.lorem.words(3),
  rounds: [genCampaignEventRound(), genCampaignEventRound()],
  contractAddress: gen.datatype.uuid(),
});
