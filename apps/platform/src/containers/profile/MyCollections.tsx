import { FC, useCallback, useEffect, useState } from "react";
import { CollectionCard } from "../../components/cards/CollectionCard";
import axios from "axios";
import { ETH_ALCHEMY } from "../../configs/constants";
import { ItemEmptyBox } from "../../components/ItemEmptyBox";
import { NFTCardSkeleton } from "../../components/skeleton/NFTCardSkeleton";
import { useWallet } from "../../context/WalletContext";
import { SwitchWallet } from "../../components/SwitchWallet";

export const MyCollections: FC = () => {
  const { address, contracts } = useWallet();

  const [collections, setCollections] = useState<any[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const fetchCollections = useCallback(async () => {
    if (!contracts || !contracts.factory || !address) return;

    setLoading(true);
    const collectionList = await contracts.factory.methods.getCollectionList().call();
    const res =
      await axios.get(`https://eth-goerli.g.alchemy.com/nft/v2/${ETH_ALCHEMY}/getContractsForOwner?owner=${address}
    `);
    let list = res.data.contracts;
    list = list.filter((item: any) => {
      const exist = collectionList.filter((_item: any) => item == _item.address);
      return exist.length ? true : false;
    });
    setCollections(list);
    setLoading(false);
  }, [address, contracts]);

  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  return (
    <div className="profile">
      <div className="p-8 max-w-layout-xl">
        <h1 className="font-bold text-black text-[24px] mb-2">My collections</h1>
        <div className="profile-section relative !mt-6 text-black">
          <span className="text-[20px] font-bold">Collections</span>
          <SwitchWallet title="Connect your wallet to view your NFT collections"/>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
              !isLoading ? (
                <>
                  {collections.map((campaign, idx) => (
                    <CollectionCard key={idx} campaign={campaign} />
                  ))}
                </>
              ) : (
                <>
                  <NFTCardSkeleton/>
                  <NFTCardSkeleton/>
                  <NFTCardSkeleton/>
                  <NFTCardSkeleton/>
                </>
              )
            }
          </div>
          { !isLoading && !collections.length && <ItemEmptyBox/> }
        </div>
      </div>
    </div>
  );
};
