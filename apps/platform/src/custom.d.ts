import { MetaMaskInpageProvider } from "@metamask/providers";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

type PhantomEvent = "disconnect" | "connect" | "accountChanged";

interface ConnectOpts {
  onlyIfTrusted: boolean;
}

interface PhantomProvider {
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
  disconnect: ()=>Promise<void>;
  on: (event: PhantomEvent, callback: (args:any)=>void) => void;
  isPhantom: boolean;
}

export type WindowWithSolana = Window & { 
  solana: PhantomProvider;
}

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
    phantom: WindowWithSolana;
  }
}

declare module "*.mp4" {
  const src: string;
  export default src;
}
