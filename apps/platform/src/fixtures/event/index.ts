import { CampaignEvent, CampaignEventRound } from "../../typed/campaign-event";
import { faker as gen } from "@faker-js/faker";

export const genCampaignEventRound = (
  x?: Partial<CampaignEventRound>
): CampaignEventRound => ({
  id: gen.datatype.uuid(),
  name: "Minting round",
  supply: gen.datatype.number({ min: 100, max: 10000 }),
  mintPrice: gen.datatype.number({ max: 10 }),
  whitelistCondition: gen.lorem.paragraphs(2),
  startDate: gen.date.future(2),
  endDate: gen.date.future(3),
});

export const genCampaignEvent = (x?: Partial<CampaignEvent>): CampaignEvent => ({
  id: gen.datatype.uuid(),
  startDate: gen.date.future(2),
  name: gen.lorem.words(3),
  rounds: [genCampaignEventRound(), genCampaignEventRound()],
  contractAddress: gen.datatype.uuid(),
});
