import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

// Collections
import { genGenopetsCampaignData } from "../../fixtures/campaign/genopets";
import { genMulgakongzCampaignData } from "../../fixtures/campaign/mulgakongz";
import { genOmgkirbyGenesisCampaignData } from "../../fixtures/campaign/omgkirby-genesis";
import { genTheArtOfSeasonsCampaignData } from "../../fixtures/campaign/the-art-of-seasons";

// Charities
import { genDoctorsWithoutBordersData } from "../../fixtures/charity/doctors-without-borders";
import { genFoundationForNationalParksAndWildlifeData } from "../../fixtures/charity/foundation-for-national-parks-and-wildlife";
import { genGamersOutreachData } from "../../fixtures/charity/gamers-outreach";
import { genHalfCutData } from "../../fixtures/charity/half-cut";
import { gen20TalkData } from "../../fixtures/charity/twenty-talk";
import { genWhiteRibbonData } from "../../fixtures/charity/white-ribbon";

export const campaignsVar = makeVar([
  genGenopetsCampaignData(),
  genMulgakongzCampaignData(),
  genTheArtOfSeasonsCampaignData(),
  genOmgkirbyGenesisCampaignData(),
]);

export const charitiesVar = makeVar([
  genDoctorsWithoutBordersData(),
  genFoundationForNationalParksAndWildlifeData(),
  genHalfCutData(),
  genGamersOutreachData(),
  gen20TalkData(),
  genWhiteRibbonData(),
]);

export const featuredCampaigns = makeVar([
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
        featuredCampaigns: {
          read() {
            return featuredCampaigns();
          },
        },
        homepageCampaign: {
          read() {
            return genMulgakongzCampaignData();
          },
        },
      },
    },
  },
});

export const client = new ApolloClient({
  cache,
});
