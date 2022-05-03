export interface CampaignEventRound {
  id: string;
  name: string;
  supply: number;
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
