import axios from "axios";
import { FC, useEffect, useState } from "react";
import { CardGrid } from "../../components/CardGrid";
import { CollectionCard } from "../../components/cards/CollectionCard";
import { ItemEmptyBox } from "../../components/ItemEmptyBox";
import { SectionContainer } from "../../components/SectionContainer";
import { NFTCardSkeletonBundle } from "../../components/skeleton/SkeletonBundle";
import { useExplore } from "../../context/ExploreContext";
import { Collection } from "../../typed/collection";

export const MintPages: FC = () => {
  const { category } = useExplore();
  const [collections, setCollections] = useState<Collection[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchCollections();
  }, [category]);

  const fetchCollections = async() => {
    setLoading(true);
    try {
      let categories:string = '';
      
      if (category[0].checked) {
        categories = "all";
      }

      else {
        for (let i = 1; i < category.length; i ++) {
          if (category[i].checked) {
            categories += categories ? ( ',' + category[i].title) : category[i].title; 
          }
        }
      }
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/api/collections?category=${categories}`
      );
      setCollections(res.data ? res.data : []);
    } catch(err) {

    }

    setLoading(false);
  }

  return (
    <SectionContainer>
      
      <CardGrid>
        {collections.map((campaign, idx) => (
          <CollectionCard key={idx} campaign={campaign} nextLocation={`/mint/${campaign.pattern}`} />
        ))}
        {
          isLoading && <NFTCardSkeletonBundle/>
        }

      </CardGrid>
      {
        (!isLoading && !collections.length) && <ItemEmptyBox/>
      }
    </SectionContainer>
  );
};
