import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

// const getEnv = (key: string) => {
//   const value = process.env[key];

//   if (!value) {
//     throw new Error(`Missing config value for ${key}`);
//   }

//   return value;
// };

export const SOL_NETWORK = WalletAdapterNetwork.Mainnet;
export const ETH_NETWORK = "mainnet";
