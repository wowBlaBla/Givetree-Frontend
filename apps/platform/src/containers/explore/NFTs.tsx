import { Alchemy } from "alchemy-sdk";
import axios from "axios";
import { FC, useEffect, useState } from "react"
import InfiniteScroll from 'react-infinite-scroll-component'
import { SaleCard } from "../../components/cards/SaleCard";
import { SectionContainer } from "../../components/SectionContainer";
import { NFTCardSkeletonBundle } from "../../components/skeleton/SkeletonBundle";
import { ALCHEMY_NETWORK, NETWORK_NAME } from "../../configs/constants";

interface NFT {
    collection: string;
    tokenId: string;
    seller?: string;
    network?: string;
}

interface Collection {
    address: string;
    name: string;
    logo: string;
    network: string;
    category: string;
}

export const NFTs:FC = () => {
    const [start, setStart] = useState<string>('1');
    const [collections, setCollections] = useState<Collection[]>([]);
    const [saleList, setSaleList] = useState<NFT[]>([]);
    const [activeCollection, setActiveCollection] = useState<number>(0);
    
    const [isLoadedSales, setLoadedSales] = useState<boolean>(false);
    const [pageKey, setPageKey] = useState<string>('');
    const [isEnd, setEnd] = useState<boolean>(false);
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        loadCollections();
        loadListedNFT();
    }, []);

    useEffect(() => {
        if (isLoadedSales) {
            loadRestNFT();
        }
    }, [isLoadedSales, collections])

    const loadCollections = async() => {
        await axios.get(
            `${process.env.NEXT_PUBLIC_API}/api/collections?category=all`
        ).then(res => {
            setCollections(res.data);
        }).catch(err => {

        });
    }

    const loadListedNFT = async() => {
        setLoading(true);
        await axios.get(
            `${process.env.NEXT_PUBLIC_API}/api/sales?from=${start}`
        ).then(async(res) => {
            setLoadedSales(res.data.length < 12 ? true : false);
            setSaleList([ ...saleList, ...res.data ]);
            setStart(res.data[res.data.length - 1].id);
        }).catch(err => {

        });
    }

    const loadRestNFT = async() => {
        if (collections.length > activeCollection) {
            setLoading(true);
            try {
                const network = collections[activeCollection].network as NETWORK_NAME;
                const settings = ALCHEMY_NETWORK[network];
                const alchemy = new Alchemy(settings);
                const res = await alchemy.nft.getNftsForContract(
                    collections[activeCollection].address,
                    {
                        omitMetadata: false,
                        pageKey,
                        pageSize: 12
                    }
                );
                const newList:NFT[] = [];
                res.nfts.map(item => {
                    newList.push({
                        collection: item.contract.address,
                        tokenId: item.tokenId,
                        network: network
                    })
                });
                setPageKey(res.pageKey ? res.pageKey: '');
                if (!res.pageKey) setActiveCollection(activeCollection + 1);
                setSaleList([...saleList, ...newList]);
            } catch(err) {
                // console.log(err);
            }
        }
        else {
            setEnd(true);
        }
        setLoading(false);
    }

    return (
        <SectionContainer>
            <InfiniteScroll
                dataLength={saleList.length}
                next={ isLoadedSales ? loadRestNFT : loadListedNFT }
                hasMore={!isEnd}
                loader={<NFTCardSkeletonBundle/>}
                // height={height}
                className="grid grid-cols-card-layout gap-8 items-center !overflow-hidden pb-2"
                scrollableTarget={"container"}
            >
                {
                    saleList.map((item, idx) => (
                        <SaleCard item={item} key={idx}/>
                    ))
                }
                {
                    isLoading ? <NFTCardSkeletonBundle/> : ""
                }
            </InfiniteScroll>
        </SectionContainer>
    )
}