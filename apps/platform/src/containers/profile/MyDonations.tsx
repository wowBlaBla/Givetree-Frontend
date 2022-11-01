import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useWallet } from "../../context/WalletContext";
import { Crypto, CryptoIcon, CurrencyIcon, Fiat, Tokens } from "../../utils/constants";
import { toast } from "react-toastify";
import moment from "moment";
import Skeleton from "react-loading-skeleton";

interface History {
  crypto: Crypto;
  cryptoAmount: string;
  fiat: Fiat;
  fiatAmount: string;
  walletAddress: string;
  created_at: Date;
}

interface Rate {
  [key: string]: string;
}

export const MyDonations: FC = () => {
  const { authUser, logout } = useAuth();
  const { web3Instance } = useWallet();

  const [editType, setEditType] = useState<"wallet" | "received" | "made">("wallet");

  const [walletAddress, setWalletAddress] = useState("");
  const [history, setHistory] = useState<History[]>([]);
  const [totalDonationValue, setTotalDonationValue] = useState<string>('0');
  const [isLoading, setLoading] = useState<boolean>(true);

  const updateWallet = async () => {
    if (authUser) {
      try {
        const res = await axios.put(
          `${process.env.NEXT_PUBLIC_API}/api/users/profile`,
          {
            walletAddress: walletAddress,
          },
          {
            headers: {
              Authorization: `Bearer ${authUser.accessToken}`,
            },
          }
        );
        toast.success("Added wallet address");
      } catch (err) {
        toast.error("Failed to add wallet address");
      }
    }
  };

  useEffect(() => {
    async function fetchDonations() {
      setLoading(true);
      await axios.post(
        `${process.env.NEXT_PUBLIC_API}/api/donations/${editType == "received" ? "to" : "from"}`, {},
        {
          headers: {
            Authorization: `Bearer ${authUser?.accessToken}`
          }
        }
      ).then(res => {
        setHistory(res.data);
      }).catch(err => {
        if (err.response.status == 401) logout();
      })
      setLoading(false);
    }

    if (editType == "received" || editType == "made") fetchDonations();
  }, [editType])

  useEffect(() => {
    async function calculateValue() {
      await axios.get('https://api.coinbase.com/v2/exchange-rates?currency=USD').then(res => {
        const rates = res.data.data.rates;
        let _value = 0;
        history.map(item => {
          _value += +item.fiatAmount / +rates[item.fiat]
        });
        setTotalDonationValue(_value.toFixed(2).toString());
      }).catch(err => {

      });
    }

    if (history.length) calculateValue();
    else setTotalDonationValue('0');
  }, [history]);

  return (
    <div className="profile">
      <div className="profile-save-section px-8 pt-8">
        <h1 className="font-bold text-black text-[24px] mb-4">My donations</h1>
        <div className="flex flex-col lg:flex-row justify-between max-w-layout-xl items-start lg:items-center">
          <div className="tabs">
            <div
              className={`tab ${editType === "wallet" ? "tab-active" : ""}`}
              onClick={() => setEditType("wallet")}
            >
              My wallets
            </div>
            <div
              className={`tab ${editType === "received" ? "tab-active" : ""}`}
              onClick={() => setEditType("received")}
            >
              Donations received
            </div>
            <div
              className={`tab ${editType === "made" ? "tab-active" : ""}`}
              onClick={() => setEditType("made")}
            >
              Donations made
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 max-w-layout-xl">
        {editType === "wallet" ? (
          <div className="wallets-body bg-white rounded-2xl-1 border border-[#717171] mt-4 mb-8 px-4">
            {Tokens.filter((token) => !token.disabled).map((token, index) => (
              <div key={`token-currency-${index}`} className="wallet-item text-black">
                <div className="flex items-center">
                  <div className="flex items-center cursor-pointer">
                    <div className="w-[40px] h-[40px] flex items-center justify-center">
                      <token.icon />
                    </div>
                    <div className="flex flex-col ml-2">
                      <span className="text-xs">{token.crypto}</span>
                      <span className="text-sm">{token.currency}</span>
                    </div>
                  </div>
                  <div className="flex lg:hidden items-center">
                    <button className="btn btn-primary mr-2 btn-connect">Save</button>
                    <div>
                      <svg
                        width="20"
                        height="26"
                        viewBox="0 0 20 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.77946 0C6.86653 0 6.11406 0.752467 6.11406 1.6654V2.77567H0.562724C0.363222 2.7735 0.176732 2.87759 0.0748132 3.05107C-0.0249377 3.22455 -0.0249377 3.43706 0.0748132 3.61054C0.176732 3.78402 0.363222 3.88811 0.562724 3.88594H1.11786V23.8708C1.11786 24.788 1.86599 25.5362 2.78326 25.5362H17.2167C18.134 25.5362 18.8821 24.788 18.8821 23.8708V3.88594H19.4373C19.6368 3.88811 19.8233 3.78402 19.9252 3.61054C20.0249 3.43706 20.0249 3.22455 19.9252 3.05107C19.8233 2.87759 19.6368 2.7735 19.4373 2.77567H13.8859V1.6654C13.8859 0.752467 13.1335 0 12.2205 0H7.77946ZM7.77946 1.11027H12.2205C12.5285 1.11027 12.7757 1.35748 12.7757 1.6654V2.77567H7.22433V1.6654C7.22433 1.35748 7.47154 1.11027 7.77946 1.11027ZM6.11406 9.99241C6.25501 9.99241 6.39814 10.0466 6.50656 10.155L10 13.6485L13.4934 10.155C13.7103 9.9382 14.0616 9.9382 14.2784 10.155C14.4953 10.3719 14.4953 10.7232 14.2784 10.94L10.785 14.4335L14.2784 17.9269C14.4953 18.1438 14.4953 18.4951 14.2784 18.7119C14.17 18.8203 14.0291 18.8746 13.8859 18.8746C13.7428 18.8746 13.6019 18.8203 13.4934 18.7119L10 15.2185L6.50656 18.7119C6.39814 18.8203 6.25718 18.8746 6.11406 18.8746C5.97094 18.8746 5.82999 18.8203 5.72157 18.7119C5.50472 18.4951 5.50472 18.1438 5.72157 17.9269L9.21501 14.4335L5.72157 10.94C5.50472 10.7232 5.50472 10.3719 5.72157 10.155C5.82999 10.0466 5.97311 9.99241 6.11406 9.99241Z"
                          fill="#929191"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <input
                    type="text"
                    className="input input-bordered block w-full outline-none"
                  />
                </div>
                <div className="hidden lg:flex">
                  <button className="btn btn-primary mr-2 btn-connect w-[200px] lg:w-auto">
                    Save
                  </button>
                  <div>
                    <svg
                      width="20"
                      height="26"
                      viewBox="0 0 20 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.77946 0C6.86653 0 6.11406 0.752467 6.11406 1.6654V2.77567H0.562724C0.363222 2.7735 0.176732 2.87759 0.0748132 3.05107C-0.0249377 3.22455 -0.0249377 3.43706 0.0748132 3.61054C0.176732 3.78402 0.363222 3.88811 0.562724 3.88594H1.11786V23.8708C1.11786 24.788 1.86599 25.5362 2.78326 25.5362H17.2167C18.134 25.5362 18.8821 24.788 18.8821 23.8708V3.88594H19.4373C19.6368 3.88811 19.8233 3.78402 19.9252 3.61054C20.0249 3.43706 20.0249 3.22455 19.9252 3.05107C19.8233 2.87759 19.6368 2.7735 19.4373 2.77567H13.8859V1.6654C13.8859 0.752467 13.1335 0 12.2205 0H7.77946ZM7.77946 1.11027H12.2205C12.5285 1.11027 12.7757 1.35748 12.7757 1.6654V2.77567H7.22433V1.6654C7.22433 1.35748 7.47154 1.11027 7.77946 1.11027ZM6.11406 9.99241C6.25501 9.99241 6.39814 10.0466 6.50656 10.155L10 13.6485L13.4934 10.155C13.7103 9.9382 14.0616 9.9382 14.2784 10.155C14.4953 10.3719 14.4953 10.7232 14.2784 10.94L10.785 14.4335L14.2784 17.9269C14.4953 18.1438 14.4953 18.4951 14.2784 18.7119C14.17 18.8203 14.0291 18.8746 13.8859 18.8746C13.7428 18.8746 13.6019 18.8203 13.4934 18.7119L10 15.2185L6.50656 18.7119C6.39814 18.8203 6.25718 18.8746 6.11406 18.8746C5.97094 18.8746 5.82999 18.8203 5.72157 18.7119C5.50472 18.4951 5.50472 18.1438 5.72157 17.9269L9.21501 14.4335L5.72157 10.94C5.50472 10.7232 5.50472 10.3719 5.72157 10.155C5.82999 10.0466 5.97311 9.99241 6.11406 9.99241Z"
                        fill="#929191"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="wallet-item">
              <div>
                <button
                  className="btn btn-primary mr-2 w-full !bg-[#0075FF] !text-white"
                  onClick={updateWallet}
                >
                  Add
                </button>
              </div>
            </div> */}
          </div>
        ) : (
          <>
            <div className="flex flex-col lg:flex-row mt-4 mb-8">
              <div className="flex flex-col bg-white rounded-2xl-1 border border-[#717171] text-black w-[400px] h-[176px] px-8 py-6 mb-4 lg:mb-0">
                <span className="text-xl font-bold mb-4">
                  Total donations value (cumulative)
                </span>
                <span className="text-[40px] font-bold">${totalDonationValue}</span>
              </div>
              <div className="flex flex-col bg-white rounded-2xl-1 border border-[#717171] text-black w-[400px] h-[176px] px-8 py-6 lg:ml-4">
                <span className="text-xl font-bold mb-4">Total charities supported</span>
                <span className="text-[40px] font-bold">{history.length}</span>
              </div>
            </div>

            <div className="bg-white rounded-t-2xl-1 border border-[#717171] text-black">
              <div className="donation-item flex items-center">
                <span className="text-lg font-bold">Donations</span>
              </div>
              <div className="donation-item flex items-center justify-between">
                <span className="text-sm">Search</span>
                <span className="text-sm">Filter</span>
              </div>
              {/* <div className="donation-item flex items-center">
                <span className="text-sm mr-6">#</span>
                <span className="text-sm mr-6">Crypto</span>
                <span className="text-sm mr-6">Amount</span>
                <span className="text-sm mr-6">Currency</span>
                <span className="text-sm mr-6">Amount</span>
                <span className="text-sm mr-6">Date</span>
                <span className="text-sm mr-6">Wallet</span>
                <span className="text-sm">Incoming/outgoing</span>
              </div>
              <div className="donation-item"></div> */}
              <div className="overflow-x-auto w-full">
                <table className="table w-full border-base-100">
                  <thead className="border-b border-base-100/80 text-center">
                    <th>#</th>
                    <th>Crypto</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Wallet</th>
                  </thead>
                  <tbody className="text-center">
                    {
                      history.map((item, idx) => (
                        <tr key={idx} className="border-b border-base-100/80">
                          <td>{idx + 1}</td>
                          <td>{CryptoIcon[item.crypto]({ className: "w-8 h-8 inline-block "})}</td>
                          <td>{web3Instance?.utils.fromWei(`${item.cryptoAmount}`)}</td>
                          <td>{CurrencyIcon[item.fiat]({ className: "w-8 h-8 inline-block "})}</td>
                          <td>{item.fiatAmount}</td>
                          <td>{moment(item.created_at).format("YYYY-MM-DD")}</td>
                          <td>{item.walletAddress}</td>
                        </tr>
                      ))
                    }
                    {
                      isLoading ? (
                        <>
                          <tr>
                            <td colSpan={8}><Skeleton className="h-6"/></td>
                          </tr>
                          <tr>
                            <td colSpan={8}><Skeleton className="h-6"/></td>
                          </tr>
                          <tr>
                            <td colSpan={8}><Skeleton className="h-6"/></td>
                          </tr>
                          <tr>
                            <td colSpan={8}><Skeleton className="h-6"/></td>
                          </tr>
                          <tr>
                            <td colSpan={8}><Skeleton className="h-6"/></td>
                          </tr>
                          <tr>
                            <td colSpan={8}><Skeleton className="h-6"/></td>
                          </tr>
                        </>
                      ) : (
                        !history.length && <tr><td colSpan={8} className="text-center text-sm border-b border-base-100/80 font-bold text-base-100/80">No items to display</td></tr>
                      )
                    }
                  </tbody>
                  <tfoot className="border-t border-base-100/80 text-center">
                    <th>#</th>
                    <th>Crypto</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Wallet</th>
                  </tfoot>
                  
                </table>
              </div>
            </div>
          </>
        )}
      </div>
      {/* {<ConnectWalletModal callback={handleWallet} />} */}
    </div>
  );
};
