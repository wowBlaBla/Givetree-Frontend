import { EventRoundType } from "./enum/eventType";

export interface CampaignEventRound {
  id: string;
  name: string;
  type: EventRoundType;
  supply: number;
  maxToken: number;
  mintPrice: number;
  whitelistCondition?: string;
  startDate: Date;
  endDate: Date;
  eventNameOverride?: string;
}

export interface CampaignEvent {
  id: string;
  name: string;
  rounds: CampaignEventRound[];
  contractAddress?: string;
}
