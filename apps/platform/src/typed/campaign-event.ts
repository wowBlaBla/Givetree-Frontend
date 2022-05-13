import { RoundType } from "./enum/eventType";

export interface CampaignEventRound {
  id: string;
  name: string;
  type: RoundType;
  supply: number;
  maxLimit: number;
  mintPrice: number;
  whitelistCondition?: string;
  startDate: Date;
  endDate: Date;
}

export interface CampaignEvent {
  id: string;
  startDate?: Date;
  name: string;
  rounds: CampaignEventRound[];
  contractAddress?: string;
}
