import axios from "axios";
import { FC, useEffect, useState } from "react";
import { SaleCard } from "../../components/cards/SaleCard";
import { ItemEmptyBox } from "../../components/ItemEmptyBox";
import { NFTCardSkeletonBundle } from "../../components/skeleton/SkeletonBundle";
import { SwitchWallet } from "../../components/SwitchWallet";
import { useWallet } from "../../context/WalletContext";

interface NFT {
  collection: string;
  tokenId: string;
  seller: string;
  network?: string;
}

export const MyListings: FC = () => {

  const { address: account } = useWallet();
  const [listings, setListings] = useState<NFT[]>([]);

  const [isLoading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (account) fetchListings();
    else setListings([]);
  }, [account]);

  const fetchListings = async() => {
    setLoading(true);
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/api/sales/seller?seller=${account}`
    );
    setListings(res.data as NFT[]);
    setLoading(false);
  }

  return (
    <div className="profile">
      <div className="p-8 max-w-layout-xl">
        <h1 className="font-bold text-black text-[24px] mb-2">My listings</h1>
        <div className="profile-section relative !mt-6 text-black">
          <span className="text-[20px] font-bold">Sales</span>
          <SwitchWallet title="Connect your wallet to view your listed NFTs"/>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
              isLoading ? <NFTCardSkeletonBundle/>
              : (
                <>
                  {listings.map((nft, idx) => (
                    <SaleCard key={idx} item={nft}/>
                  ))}
                </>
              )
            }
          </div>
          {
            (!isLoading && !listings.length) && (
              <ItemEmptyBox/>
            )
          }
        </div>
      </div>
    </div>
  );
};
