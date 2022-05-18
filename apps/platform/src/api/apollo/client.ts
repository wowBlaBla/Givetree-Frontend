import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import { genGenopetsCampaignData } from "../../fixtures/campaign/genopets";
import { genMulgakongzCampaignData } from "../../fixtures/campaign/mulgakongz";

export const campaignsVar = makeVar([
  genMulgakongzCampaignData(),
  genGenopetsCampaignData(),
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
      },
    },
  },
});

export const client = new ApolloClient({
  cache,
});
