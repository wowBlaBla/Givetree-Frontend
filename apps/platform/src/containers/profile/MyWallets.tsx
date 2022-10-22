import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_USER, IStore } from "../../store/reducers/auth.reducer";

import { BitCoinIcon } from "../../components/icons/BitcoinIcon";
import { EthereumIcon } from "../../components/icons/EthereumIcon";
import { SolanaIcon } from "../../components/icons/SolanaIcon";
import { PolygonIcon } from "../../components/icons/PolygonIcon";
import { FlowIcon } from "../../components/icons/FlowIcon";
import { AlgorandIcon } from "../../components/icons/AlgorandIcon";
import { AvalancheIcon } from "../../components/icons/AvalancheIcon";
import { CardanoIcon } from "../../components/icons/CardanoIcon";
import { Doguecoin } from "../../components/icons/Doguecoin";

export const Tokens = [
  { crypto: "Bitcoin", currency: "BTC", icon: BitCoinIcon },
  { crypto: "Ethereum", currency: "ETH", icon: EthereumIcon },
  { crypto: "Solana", currency: "SOL", icon: SolanaIcon },
  { crypto: "Polygon", currency: "MATIC", icon: PolygonIcon },
  { crypto: "Flow", currency: "FLOW", icon: FlowIcon },
  { crypto: "Algorand", currency: "ALGO", icon: AlgorandIcon },
  { crypto: "Avalanche", currency: "AVAX", icon: AvalancheIcon },
  { crypto: "Cardano", currency: "ADA", icon: CardanoIcon },
  { crypto: "Doguecoin", currency: "Dogue", icon: Doguecoin },
];

export const MyWallets: FC = () => {
  const authedUser = useSelector<IStore, AUTH_USER | undefined>(
    (state) => state.auth.authedUser
  );
  const dispatch = useDispatch();

  return (
    <div className="profile">
      <div className="p-8 max-w-[825px]">
        <h1 className="font-bold text-black text-[24px] mb-2">My Wallets</h1>
        <span className="text-black">
          Add your wallet addresses for the cryptocurrencies you would like to recieve as
          donations
        </span>
        {/* <div className="profile-section relative !p-0 !mt-4 !mb-0">
          <div className="wallet-item">
            <div>
              <span>Cryptocurrency</span>
            </div>
            <div>
              <span>Wallet address</span>
            </div>
            <div>
              <span>Status</span>
            </div> 
          </div>
        </div> */}
      </div>
    </div>
  );
};
