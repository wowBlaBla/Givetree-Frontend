import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import { genGenopetsCampaignData } from "../../fixtures/campaign/genopets";
import { genMulgakongzCampaignData } from "../../fixtures/campaign/mulgakongz";
import { genOmgkirbyGenesisCampaignData } from "../../fixtures/campaign/omgkirby-genesis";
import { genTheArtOfSeasonsCampaignData } from "../../fixtures/campaign/the-art-of-seasons";
import { genCarbonClimateChangeSocietyData } from "../../fixtures/charity/carbon-climate-change-society";
import { genTheOceanCleanupData } from "../../fixtures/charity/the-ocean-cleanup";
import { genWorldWildlifeFundData } from "../../fixtures/charity/world-wildlife-fund";
import { genYouturnYouthSupportData } from "../../fixtures/charity/youturn-youth-support";
import { genZambiWildlifeFoundationData } from "../../fixtures/charity/zambi-wildlife-foundation";

export const campaignsVar = makeVar([
  genGenopetsCampaignData(),
  genMulgakongzCampaignData(),
  genTheArtOfSeasonsCampaignData(),
  genOmgkirbyGenesisCampaignData(),
]);

export const charitiesVar = makeVar([
  genYouturnYouthSupportData(),
  genCarbonClimateChangeSocietyData(),
  genWorldWildlifeFundData(),
  genTheOceanCleanupData(),
  genZambiWildlifeFoundationData(),
]);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        campaigns: {
          read() {
            return campaignsVar();
          },
        },
        campaign: {
          read(_, { variables }) {
            return campaignsVar().find((campaign) => campaign.slug === variables?.slug);
          },
        },
        charities: {
          read() {
            return charitiesVar();
          },
        },
        charity: {
          read(_, { variables }) {
            return charitiesVar().find((charity) => charity.slug === variables?.slug);
          },
        },
      },
    },
  },
});

export const client = new ApolloClient({
  cache,
});
