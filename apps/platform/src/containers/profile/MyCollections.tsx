import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CollectionCard } from "../../components/cards/CollectionCard";
import {Contract} from 'web3-eth-contract';
import { IStore } from "../../store/reducers/auth.reducer";
import { IStore as IStoreMVP } from "../../store/reducers/mvp.reducer";
import axios from "axios";
import { ETH_ALCHEMY } from "../../configs/constants";
import { ItemEmptyBox } from "../../components/ItemEmptyBox";

export const MyCollections: FC = () => {

  const waleltAddress = useSelector<IStore, string>((state) => state.auth.walletAddress);
  const factoryContract = useSelector<IStoreMVP, Contract | undefined>((state) => state.mvp.contracts.factoryContract)
  const [collections, setCollections] = useState<any[]>([]);
  const [connectedAddress, /*setConnectedAddress*/] = useState<string>(waleltAddress);
  const [/*isLoading*/, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (connectedAddress) fetchCollections();
  }, [connectedAddress]);

  const fetchCollections = async() => {
    if (!factoryContract) return;
    setLoading(true);
    const collectionList = await factoryContract.methods.getCollectionList().call();
    const res = await axios.get(`https://eth-goerli.g.alchemy.com/nft/v2/${ETH_ALCHEMY}/getContractsForOwner?owner=${connectedAddress}
    `);
    let list = res.data.contracts;
    list = list.filter((item:any) => {
      const exist = collectionList.filter((_item:any) => item == _item.address);
      return exist.length ? true : false;
    });
    setCollections(list);
    setLoading(false);
  }

  return (
    <div className="profile">
      <div className="p-8 max-w-layout-xl">
        <h1 className="font-bold text-black text-[24px] mb-2">My collections</h1>
        <div className="profile-section relative !mt-6 text-black">
          <span className="text-[20px] font-bold">Collections</span>
          <span>Connect your wallet to view your NFT collections</span>
          <div className="flex my-6">
            <input
              readOnly
              type="text"
              value={connectedAddress}
              className="input input-bordered block w-full outline-none bg-white border-[#5B626C] max-w-[400px]"
            />
            <button className="btn btn-primary btn-connect ml-2">Connect</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {collections.map((campaign, idx) => (
              <CollectionCard key={idx} campaign={campaign} />
            ))}
          </div>
          { !collections.length && <ItemEmptyBox/> }
        </div>
      </div>
    </div>
  );
};
