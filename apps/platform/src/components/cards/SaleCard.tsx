import { Alchemy, Network, Nft } from "alchemy-sdk";
import { FC, useEffect, useState } from "react"
import { ETH_ALCHEMY } from "../../configs/constants";
import { NFTMetaData } from "../../typed/campaign";
import { NFTCardSkeleton } from "../skeleton/NFTCardSkeleton";
import { NFTCard } from "./NFTCard";

interface NFT {
    item : {
        collection: string;
        tokenId: string;
        network?: string;
    }
}

export const SaleCard:FC<NFT> = ({ item }) => {
    
    const [isLoading, setLoading] = useState<boolean>(true);
    const [metadata, setMetadata] = useState<Nft>();

    useEffect(() => {
        async function getMetadata () {
            setLoading(true);
            const settings = {
              apiKey: ETH_ALCHEMY,
              network: Network.ETH_GOERLI
            };
            
            const { collection, tokenId } = item;
            const alchemy = new Alchemy(settings);
            const res = await alchemy.nft.getContractMetadata(item.collection);
            const metadata = await alchemy.nft.getNftMetadata(collection, tokenId, res.tokenType);
            setMetadata(metadata);
            setLoading(false);
        }
        if (item) getMetadata();
    }, [item]);

    return (
        <>
            {
                isLoading ? (
                    <NFTCardSkeleton/>
                ) : (
                    <NFTCard nft={metadata as NFTMetaData}/>
                )
            }
        </>
    )
}