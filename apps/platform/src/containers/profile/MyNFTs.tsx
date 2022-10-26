import { FC, useEffect, useState } from "react";
import { Network, Alchemy } from 'alchemy-sdk';
import { useSelector } from "react-redux";
import { ETH_ALCHEMY } from "../../configs/constants";
import { IStore } from "../../store/reducers/auth.reducer";
import { NFTCard } from "../../components/cards/NFTCard";
import { ItemEmptyBox } from "../../components/ItemEmptyBox";
import { NFTCardSkeleton } from "../../components/skeleton/NFTCardSkeleton";

export const MyNFTs: FC = () => {

  const waleltAddress = useSelector<IStore, string>((state) => state.auth.walletAddress);
  const [connectedAddress, /*setConnectedAddress*/] = useState<string>(waleltAddress);
  const [nfts, setNFTs] = useState<any[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (connectedAddress) fetchNFTs();
  }, [connectedAddress]);

  const fetchNFTs = async() => {
    setLoading(true);
    const settings = {
      apiKey: ETH_ALCHEMY,
      network: Network.ETH_GOERLI
    };
    const alchemy = new Alchemy(settings);
    const res = await alchemy.nft.getNftsForOwner(connectedAddress);
    setNFTs(res.ownedNfts);
    setLoading(false);
  }

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
              value={connectedAddress}
              type="text"
              className="input input-bordered block w-full outline-none bg-white border-[#5B626C] max-w-[400px]"
            />
            <button className="btn btn-primary btn-connect ml-2">Connect</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
              !isLoading ? (
                <>
                  {nfts.map((nft, idx) => (
                    <NFTCard key={idx} nft={nft} />
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
          { !isLoading && !nfts.length && <ItemEmptyBox/> }
        </div>
      </div>
    </div>
  );
};
