import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import axios from "axios";
import { CardGrid } from "../../components/CardGrid";
import { CharityCard } from "../../components/cards/CharityCard";
import { SectionContainer } from "../../components/SectionContainer";

import { Charity } from "../../typed/charity";
import { NFTCardSkeletonBundle } from "../../components/skeleton/SkeletonBundle";
import { ItemEmptyBox } from "../../components/ItemEmptyBox";

export interface GetCharityListingDataQuery {
  charities: Charity[];
}

export const GET_CHARITY_LISTING_DATA = (gql`
  query GetCampaigns {
    charities @client
  }
`);

export const Charities = () => {
  
  const [isLoading, setLoading] = useState(true);
  const [collections, setCollections] = useState<Charity[]>([])

  useEffect(() => {
    async function fetchCharity() {
      setLoading(true);
      await axios.get(
        `${process.env.NEXT_PUBLIC_API}/api/users?type=charity`
      ).then(res => {
        setCollections(res.data);
      }).catch(err => {

      });
      setLoading(false);
    }

    fetchCharity();
  }, [])

  return (
    <div>
      <Head>
        <title>GiveTree - Charities</title>
      </Head>

      <SectionContainer>

        <CardGrid>
          {collections.map(
            (charity, idx) => (
              <CharityCard key={idx} charity={charity} />
            )
          )}
          {
            isLoading ? <NFTCardSkeletonBundle/> : ""
          }
        </CardGrid>
        {
          (!isLoading && !collections.length) && <ItemEmptyBox/>
        }
      </SectionContainer>
    </div>
  );
};
