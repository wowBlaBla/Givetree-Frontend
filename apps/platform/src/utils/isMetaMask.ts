import { MetaMaskStatus } from "../typed/enum/metaMaskStatus";

export const isMetaMaskInstalled = (): boolean => {
  if (!window.ethereum?.isMetaMask) {
    return false;
  }

  return true;
};

export const isMetaMaskConnected = (status: MetaMaskStatus): boolean => {
  if (status === MetaMaskStatus.Connected) {
    return true;
  }

  return false;
};

export const isMetaMaskNotConnected = (status: MetaMaskStatus): boolean => {
  if (status !== (MetaMaskStatus.Connecting || MetaMaskStatus.Connected)) {
    return true;
  }

  return false;
};
