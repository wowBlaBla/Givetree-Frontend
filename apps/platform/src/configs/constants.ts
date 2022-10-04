// IMPORTANT: Must include environment variables in next.config.js for environment variables to work.

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

export const SOLANA_NETWORK: WalletAdapterNetwork = process.env.NEXT_PUBLIC_SOLANA_NETWORK as WalletAdapterNetwork;
