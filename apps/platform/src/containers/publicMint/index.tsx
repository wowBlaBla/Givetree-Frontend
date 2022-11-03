import { FC, useEffect, useState } from "react"
import axios from "axios";
import { useLocation, useRoute } from "wouter";
import { SectionContainer } from "../../components/SectionContainer"
import mintBanner from "../../assets/images/givetree-bg-image.png";
import DefaultMintBrand from "../../temp/images/campaigns/mulgakongz-collection-2.png";
import { PlatformRoute } from "../../configs/routes";
import { Collection } from "../../typed/collection";
import Skeleton from "react-loading-skeleton";
import { AbiItem } from "web3-utils";
import { Contract } from "web3-eth-contract";
import { useWallet } from "../../context/WalletContext";
import collectionABI from "../../assets/jsons/abi/collection.json";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { LoadingContainer } from "../../components/LoadingContainer";

export const PublicMintContainer:FC = () => {
    const [, params] = useRoute(PlatformRoute.Mint);
    const [, setLocation] = useLocation();

    const { web3Instance, address:account } = useWallet();
    const { isAuth } = useAuth();

    const [isLoading, setLoading] = useState<boolean>(true);
    const [isProcessing, setProcessing] = useState<boolean>(false);
    const [collection, setCollection] = useState<Collection>();
    const [maxSupply, setMaxSupply] = useState<string>('');
    const [totalSupply, setTotalSupply] = useState<string>('');
    const [count, setCount] = useState<number>(1);
    const [mintPrice, setMintPrice] = useState<string>('0');
    const [contract, setContract] = useState<Contract>();

    useEffect(() => {
        async function getCollection() {
            setLoading(true);
            await axios.post(
                `${process.env.NEXT_PUBLIC_API}/api/collections/get-collection`,
                {
                    pattern: params?.collectionName
                }
            ).then(res => {
                if (res.data) {
                    setCollection(res.data);
                } else setLocation('/');
            }).catch(err => {
                setLocation('/');
            });
            setLoading(false);
        }
        getCollection();
    }, []);

    useEffect(() => {
        
        fetchMintNumber();

    }, [collection, web3Instance]);

    const fetchMintNumber = async() => {
        if (!web3Instance || !collection?.address) return;
        const _contract = new web3Instance.eth.Contract(collectionABI as AbiItem[] | AbiItem, collection.address);
        const _maxSupply = await _contract.methods.maxSupply().call();
        const _totalSupply = await _contract.methods.totalSupply().call();
        const _mintPrice = await _contract.methods.mintPrice().call();

        setContract(_contract);
        setMaxSupply(_maxSupply);
        setTotalSupply(_totalSupply);
        setMintPrice(web3Instance.utils.fromWei(_mintPrice, "ether"));
    }

    const mint = async() => {
        if (!isAuth) {
            toast.warn("Please sign in");
            return;
        }

        if (!account) {
            toast.warn("Please connect your wallet");
            return;
        }

        setProcessing(true);
        try {
            const balance = await web3Instance?.eth.getBalance(account);
            const payPrice = web3Instance?.utils.toWei((+mintPrice * count).toString(), "ether");
            if (Number(balance) <= Number(payPrice)) throw Error("Insufficcient funds");
            const _totalSupply = await contract?.methods.totalSupply().call();

            if (+_totalSupply + count > +maxSupply) throw Error("Exceed max supply");

            await contract?.methods.mint(account, count).send({
                from: account,
                value: payPrice
            });
            toast.success(`Minted ${count} NFTs successfully`);
            await fetchMintNumber();
        } catch(err: any) {
            if (err?.code != 4001) {
                toast.error(err.response.message);
            }
        }

        setProcessing(false);
    }

    return (
        <SectionContainer>
            <div className="public-mint-container">
                <div className="max-w-layout-l mx-auto flex flex-col gap-3">
                    
                    {
                        isLoading ? 
                        <Skeleton
                            className="h-52 rounded-lg border border-base-content/10"
                        />
                        :
                        <div className="h-52">
                            <img
                                className="object-cover w-full h-full rounded-lg"
                                src={collection?.banner}
                            />
                        </div>

                    }

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        <div className="flex flex-col gap-3 order-2 lg:order-1 ">
                            {
                                isLoading ?
                                <Skeleton className="w-full aspect-square border border-base-content/10"/>
                                :
                                <div className="mint-collection-details p-6 !bg-white text-black flex flex-col gap-3 rounded-lg border border-base-content/50">
                                    <div className="flex flex-col gap-2">
                                        <label className="font-bold uppercase">About</label>
                                        <p>{collection?.description}</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="font-bold uppercase">Info</label>
                                        <p>NFT Collection Name: </p>
                                        <p>NFT Collection Name: </p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="font-bold uppercase">Overview</label>
                                        <p>OG Memebership</p>
                                        <p>Premium Utility</p>
                                        <p>3000 Supply</p>
                                    </div>
                                </div>
                            }
                            {
                                isLoading ?
                                <Skeleton className="w-full aspect-square border border-base-content/10"/>
                                :
                                <div className="mint-collection-panel p-6 !bg-white text-black flex flex-col gap-3 rounded-lg border border-base-content/50">
                                    <div className="text-center flex flex-col gap-1">
                                        <h2 className="uppercase text-2xl font-bold">mint a {collection?.name}</h2>
                                        <span className="font-bold text-lg">{totalSupply} minted of {maxSupply}</span>
                                    </div>
                                    <div className="flex flex-col gap-6">
                                        <div className="grid grid-cols-3 border-b border-base-100 py-4 items-center">
                                            <div className="uppercase font-bold">amount</div>
                                            <div className="text-center flex gap-3 justify-center items-center">
                                                <div
                                                    className="w-8 h-8 border border-base-content rounded-full flex items-center justify-center cursor-pointer"
                                                    onClick={() => count - 1 > 0 ? setCount(count - 1) : null}
                                                >
                                                    <span className=" text-2xl font-bold pb-1">-</span>
                                                </div>
                                                <span className="text-2xl">{count}</span>
                                                <div
                                                    className="w-8 h-8 border border-base-content rounded-full flex items-center justify-center cursor-pointer"
                                                    onClick={() => setCount(count + 1)}
                                                >
                                                    <span className=" text-xl font-bold pb-1">+</span>
                                                </div>
                                            </div>
                                            <div className="uppercase font-bold text-right">max</div>
                                        </div>
                                        <div className="grid grid-cols-2 border-b border-base-100 py-4">
                                            <div className="font-bold">Total</div>
                                            <div className="text-right font-bold">{+mintPrice * count} ETH</div>
                                        </div>
                                        <div>
                                            <button
                                                className="btn btn-info w-full font-bold text-white text-lg"
                                                onClick={mint}
                                            >mint</button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="order-1 lg:order-2 text-center">
                            {
                                isLoading ? 
                                <Skeleton className="w-full aspect-square border border-base-content/10"/>
                                :
                                <img
                                    src={collection?.logo || DefaultMintBrand.src}
                                    alt="brand"
                                    className="rounded-lg w-full aspect-square"
                                />
                            }
                        </div>
                    </div>
                </div>
            </div>
            { isProcessing ? <LoadingContainer message={"Minting . . ."}/> : "" }
        </SectionContainer>
    )
}