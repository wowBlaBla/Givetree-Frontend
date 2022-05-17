import { RoundType } from "./enum/eventType";

export interface CampaignEventRound {
  id: string;
  name: string;
  type: RoundType;
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
