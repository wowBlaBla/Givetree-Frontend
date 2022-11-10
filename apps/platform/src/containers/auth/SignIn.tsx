import React, { FC, useState } from "react";
import { AuthType, useAuth } from "../../context/AuthContext";
import { useWallet } from "../../context/WalletContext";
import { ConnectWallet } from "../../components/ConnectWallet";
import { GiveTreeLogo } from "../../components/GiveTreeLogo";
import { useLocation } from "wouter";

export const SignIn: FC = () => {
  const [_, setLocation] = useLocation();

  const { address, provider } = useWallet();
  const { isAuth, login } = useAuth();

  const [authType, setAuthType] = useState<AuthType>();

  const [emailorUserName, setEmailOrUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  React.useEffect(() => {
    if (isAuth) {
      setLocation("/profile/home");
    }
  }, [isAuth]);

  const handleLogin = async () => {
    if (authType === "email") {
      login({ email: emailorUserName, password }, "email");
    } else {
      if (provider) {
        login({ address, network: "ethereum" }, "wallet");
      }
    }
  };

  return (
    <div className="w-full auth-wallet">
      <div className="flex flex-col items-center max-w-[400px] mx-auto my-24 border border-black bg-white rounded-2xl-1 px-6 py-6">
        <div className="flex items-center mb-4">
          <GiveTreeLogo className="w-[60px]" />
          <span className="text-[50px] font-bold text-black ml-2">GiveTree</span>
        </div>
        {!authType ? (
          <>
            <span className="text-[#646464] font-bold text-md text-center mb-6">
              Sign in with wallet or email
            </span>

            <button
              className="btn rounded-2xl-1 w-full h-[60px] font-bold text-[#646464] bg-transparent hover:bg-[#0057FF] hover:text-white capitalize mb-4 hover"
              onClick={() => {
                setAuthType("wallet");
              }}
            >
              Cryptocurrency Wallet
            </button>
            <button
              className="btn rounded-2xl-1 w-full h-[60px] font-bold text-[#646464] bg-transparent hover:bg-[#0057FF] hover:text-white capitalize"
              onClick={() => {
                setAuthType("email");
              }}
            >
              Email address
            </button>
          </>
        ) : authType === "email" ? (
          <>
            <span className="text-[#646464] font-bold text-md text-center mb-6">
              Input account information
            </span>
            <div className="flex flex-col w-full text-black">
              <div className="input-form-group flex flex-col items-start mb-4">
                <label className="font-bold mb-2">
                  Username or email <b className="text-[#FF0000]">*</b>
                </label>
                <input
                  type="text"
                  className={`outline-none focus:border-sky-400 mt-1 block w-full sm:text-sm border rounded-2xl-1 p-3 bg-transparent h-[60px] border-black`}
                  placeholder="Enter username or email"
                  value={emailorUserName}
                  onChange={(e) => setEmailOrUserName(e.target.value)}
                />
                {/* <span className="text-red-500 text-xs mt-1"></span> */}
              </div>
              <div className="input-form-group flex flex-col items-start mb-4">
                <label className="font-bold mb-2">
                  Password <b className="text-[#FF0000]">*</b>
                </label>
                <input
                  type="password"
                  className={`outline-none focus:border-sky-400 mt-1 block w-full sm:text-sm border rounded-2xl-1 p-3 bg-transparent h-[60px] border-black`}
                  placeholder="Enter a secure password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* <span className="text-red-500 text-xs mt-1"></span> */}
              </div>
              <button
                className="btn rounded-2xl-1 h-[60px] bg-[#0057FF] border-none font-bold text-white w-full capitalize"
                onClick={() => login({ email: emailorUserName, password }, "email")}
              >
                Sign in
              </button>
            </div>
          </>
        ) : (
          <>
            <span className="text-[#646464] font-bold text-md text-center mb-6">
              Select your account sign in wallet
            </span>
            <ConnectWallet callback={handleLogin} />
          </>
        )}
      </div>
    </div>
  );
};
