import { FC, useCallback, useEffect, useState } from "react";
import { Network, Alchemy } from "alchemy-sdk";
import { ETH_ALCHEMY } from "../../configs/constants";
import { NFTCard } from "../../components/cards/NFTCard";
import { ItemEmptyBox } from "../../components/ItemEmptyBox";
import { useWallet } from "../../context/WalletContext";

export const MyNFTs: FC = () => {
  const { address } = useWallet();

  const [nfts, setNFTs] = useState<any[]>([]);
  const [, /*isLoading*/ setLoading] = useState<boolean>(false);

  const fetchNFTs = useCallback(async () => {
    if (address) {
      setLoading(true);
      const settings = {
        apiKey: ETH_ALCHEMY,
        network: Network.ETH_GOERLI,
      };
      const alchemy = new Alchemy(settings);
      const res = await alchemy.nft.getNftsForOwner(address);
      setNFTs(res.ownedNfts);
      setLoading(false);
    }
  }, [address]);

  useEffect(() => {
    if (address) fetchNFTs();
  }, [address, fetchNFTs]);

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
            <button className="btn btn-primary btn-connect ml-2">Connect</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {nfts.map((nft, idx) => (
              <NFTCard key={idx} nft={nft} />
            ))}
          </div>
          {!nfts.length && <ItemEmptyBox />}
        </div>
      </div>
    </div>
  );
};
