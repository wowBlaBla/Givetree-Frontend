import { Causes } from "./enum/causes";

export interface ImpactPartner {
  id: string;
  name: string;
  avatarUrl: string;
  causes: Causes[];
  distributionPercentage: string;
}
