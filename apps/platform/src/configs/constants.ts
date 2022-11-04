// IMPORTANT: Must include environment variables in next.config.js for environment variables to work.

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { Network } from "alchemy-sdk";

export const pinata_api_key:string = "1b8dc5c608d42bdc8f63";
export const pinata_secret_api_key:string = "49e7b1be1a1f57d8b6eb956470343cef3675c91bd482f9f889b814e07daf90c5";
export const ETH_ALCHEMY:string = "LYuZuxHIZHqSqR5qCsT768jCORqGoXqn";
export const SOLANA_NETWORK: WalletAdapterNetwork = process.env.NEXT_PUBLIC_SOLANA_NETWORK as WalletAdapterNetwork;
export type NETWORK_NAME = "ethereum" | "polygon" | "arbitrum" | "optimism";
export const ALCHEMY_NETWORK = {
    ethereum: {
        apiKey: "LYuZuxHIZHqSqR5qCsT768jCORqGoXqn",
        network: Network.ETH_GOERLI
    },
    polygon: {
        apiKey: "",
        network: Network.MATIC_MUMBAI
    },
    arbitrum: {
        apiKey: "",
        network: Network.ARB_GOERLI
    },
    optimism: {
        apiKey: "",
        network: Network.OPT_GOERLI
    },
};

export const EthereumNetwork = {
    address: {
        factory: "0x8C4182b0440F8C613040EB3Fbad213eDFd391abf",
        singleNFT: "0xf348E5A0baB72C3C07d50103cB414375C7fecd2b",
        marketplace: "0x095D2c977dB8b22b0e3BBF9e29FDdaBF0a236e36",
        paymentToken: "0xf0E66b01BA2502e5aBdD81AA1f081561dCc06235"
    },
    chainId: "5"
}

export const PolygonNetwork = {
    address: {
        factory: "0x923201757209F74054E885257D5E1B3b8806CbA9",
        singleNFT: "0x86740e6165FBcdB95dA7c9E79B2cF65F8348c9d1",
        marketplace: "0xD042aFA4D0b32b36f79AE5504D0fF3543B10397C",
    },
    chainId: "80001"
}

export const CeloNetwork = {
    address: {
        factory: "0x4fA3A0739D57D9A06b165ED1de9936c4491500C2",
        singleNFT: "0xe2962eE3b19BDbE5cbfF9d53b09971d82e70A2c7",
        marketplace: "0x2326098fBd74DB0a9c3325E1755b3A62ecd009D3",
    },
    chainId: "44787"
}

export const OptimismNetwork = {
    address: {
        factory: "0x86740e6165fbcdb95da7c9e79b2cf65f8348c9d1",
        singleNFT: "0xd042afa4d0b32b36f79ae5504d0ff3543b10397c",
        marketplace: "0x923201757209f74054e885257d5e1b3b8806cba9",
    },
    chainId: "420"
}

export const ArbitrumNetwork = {
    address: {
        factory: "0x03eD16aC9a9dc39D885B000b3e7f68DE009d33D8",
        singleNFT: "0xB38F0A88898DcEb67F14A49e033B04Dcb0e80DD7",
        marketplace: "0x5f7b49E50aCD6C10f90042F3087f4876d85867f9",
    },
    chainId: "421613"
}

export interface Category {
    value?: string;
    text?: string;
}

export const Categories: Category[] = [
    {
        value: 'art',
        text: 'Art',
    },
    {
        value: 'collectible',
        text: 'Collectibles',
    },
    {
        value: 'music',
        text: 'Music NFTs',
    },
    {
        value: 'photography',
        text: 'Photography',
    },
    {
        value: 'sport',
        text: 'Sport NFTs',
    },
    {
        value: 'trading',
        text: 'Trading Card NFTs',
    },
    {
        value: 'utility',
        text: 'Utility'
    },
]