import { FC, useCallback, useEffect, useState } from "react";
import { Network, Alchemy } from "alchemy-sdk";
import { ETH_ALCHEMY } from "../../configs/constants";
import { NFTCard } from "../../components/cards/NFTCard";
import { ItemEmptyBox } from "../../components/ItemEmptyBox";
import { useWallet } from "../../context/WalletContext";
import InfiniteScroll from "react-infinite-scroll-component";
import { NFTCardSkeletonBundle } from "../../components/skeleton/SkeletonBundle";

export const MyNFTs: FC = () => {
  const { address, connectWallet, networkName } = useWallet();

  const [nfts, setNFTs] = useState<any[]>([]);
  const [isEnd, setEnd] = useState<boolean>(false);
  const [pageKey, setPageKey] = useState<string>('');

  const fetchNFTs = async () => {
    if (address) {
      const settings = {
        apiKey: ETH_ALCHEMY,
        network: Network.ETH_GOERLI,
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
    else setEnd(true);
  }, [address]);

  return (
    <div className="profile">
      <div className="p-8 max-w-layout-xl">
        <h1 className="font-bold text-black text-[24px] mb-2">My NFTs</h1>
        <div className="profile-section relative !mt-6 text-black">
          <span className="text-[20px] font-bold">NFTs</span>
          <span>Connect your wallet to view your NFTs</span>
          <div className="flex my-6">
            <input
              readOnly
              value={address || ""}
              type="text"
              className="input input-bordered block w-full outline-none bg-white border-[#5B626C] max-w-[400px]"
            />
            <button
              className="btn btn-primary btn-connect ml-2"
              onClick={() => connectWallet("metamask")}
            >Connect</button>
          </div>
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
