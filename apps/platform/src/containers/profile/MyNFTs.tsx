import { FC, useEffect, useState } from "react";
import { Network, Alchemy } from "alchemy-sdk";
import { ETH_ALCHEMY } from "../../configs/constants";
import { NFTCard } from "../../components/cards/NFTCard";
import { ItemEmptyBox } from "../../components/ItemEmptyBox";
import { useWallet } from "../../context/WalletContext";
import InfiniteScroll from "react-infinite-scroll-component";
import { NFTCardSkeletonBundle } from "../../components/skeleton/SkeletonBundle";
import { SwitchWallet } from "../../components/SwitchWallet";

export const MyNFTs: FC = () => {
  const { address, networkName } = useWallet();

  const [nfts, setNFTs] = useState<any[]>([]);
  const [isEnd, setEnd] = useState<boolean>(false);
  const [pageKey, setPageKey] = useState<string>('');

  const fetchNFTs = async () => {
    if (address) {
      const settings = {
        apiKey: ETH_ALCHEMY,
        network: networkName == 'ethereum' ? Network.ETH_GOERLI : Network.MATIC_MUMBAI,
      };
      const alchemy = new Alchemy(settings);
      const res = await alchemy.nft.getNftsForOwner(
        address,
        {
          pageSize: 12,
          pageKey
        }
      );
      if (res.ownedNfts.length < 12) setEnd(true);
      if (res.pageKey) setPageKey(res.pageKey);
      setNFTs([ ...nfts, ...res.ownedNfts]);
    }
  }
  useEffect(() => {
    if (address) {
      setNFTs([]);
      setEnd(false);
      fetchNFTs();
    }
    else {
      setNFTs([]);
      setEnd(true);
    }
  }, [address]);

  return (
    <div className="profile">
      <div className="p-8 max-w-layout-xl">
        <h1 className="font-bold text-black text-[24px] mb-2">My NFTs</h1>
        <div className="profile-section relative !mt-6 text-black">
          <span className="text-[20px] font-bold">NFTs</span>
          <SwitchWallet title="Connect your wallet to view your NFTs"/>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
              isLoading ? (
                <>
                  <NFTCardSkeleton/>
                  <NFTCardSkeleton/>
                  <NFTCardSkeleton/>
                  <NFTCardSkeleton/>
                </>
              ) : (
                <>
                {nfts.map((nft, idx) => (
                  <NFTCard key={idx} nft={nft} />
                ))}
                </>
              )
            }
          </div> */}
          <InfiniteScroll
            dataLength={nfts.length}
            next={fetchNFTs}
            hasMore={!isEnd}
            loader={<NFTCardSkeletonBundle/>}
            className="grid grid-cols-card-layout gap-8 items-center !overflow-hidden pb-2"
            scrollableTarget={"container"}
          >
            {nfts.map((nft, idx) => (
              <NFTCard key={idx} nft={nft} />
            ))}
          </InfiniteScroll>
          { isEnd && !nfts.length && <ItemEmptyBox/> }
        </div>
      </div>
    </div>
  );
};
