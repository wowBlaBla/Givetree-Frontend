import { FC, useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Tokens } from "../../utils/constants";

export const Settings: FC = () => {
  const { authUser } = useAuth();

  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    if (authUser && authUser.user) {
      setUserName(authUser.user.userName || "");
      setEmail(authUser.user.email || "");
    }
  }, [authUser]);

  return (
    <div className="profile">
      <div className="p-8 max-w-layout-xl">
        <h1 className="font-bold text-black text-[24px] mb-2">Settings</h1>
        <div className="profile-section !mt-6">
          <label className="mb-1 text-md text-white">Email</label>
          <input
            type="email"
            className="input input-bordered border-base-content profile-item mt-1 block w-full outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="mb-1 text-md text-white">Username</label>
          <input
            type="text"
            className="input input-bordered border-base-content profile-item mt-1 block w-full outline-none"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label className="mt-4 mb-1 text-md text-white">Wallet Address</label>
          <div className="wallets-body">
            {Tokens.filter((token) => !token.disabled).map((token, index) => (
              <div key={`token-currency-${index}`} className="wallet-item text-black">
                <div className="flex items-center !justify-between">
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
          </div>
        </div>
      </div>
    </div>
  );
};
