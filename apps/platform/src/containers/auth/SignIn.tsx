import React, { FC, useState } from "react";
import { AuthType, useAuth } from "../../context/AuthContext";
import { useWallet } from "../../context/WalletContext";
import { usePrevious } from "../../hooks/usePrevious";
import { ConnectWallet } from "../../components/ConnectWallet";

export const SignIn: FC = () => {
  const { address } = useWallet();
  const { loading: authLoading, login } = useAuth();
  const prevAuthLoading = usePrevious(authLoading);

  const [selected, setSelected] = useState<boolean>(false);
  const [authType, setAuthType] = useState<AuthType>();

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  React.useEffect(() => {
    if (selected && address) {
      login({ address }, "wallet");
    }
  }, [selected, address, login]);

  React.useEffect(() => {
    if (prevAuthLoading === true && authLoading === false) {
      setSelected(false);
    }
  }, [prevAuthLoading, authLoading]);

  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center h-full max-w-layout-s mx-auto pt-16">
        <h1 className="text-[50px] font-bold text-black mb-4">Sign in</h1>
        {!authType ? (
          <>
            <span className="text-black text-center mb-8">
              Sign in with a cryptocurrency wallet or email address.
            </span>
            <div className="flex flex-col w-full border border-black bg-white rounded-2xl-1 px-8 py-8">
              <button
                className="btn rounded-2xl-1 h-[100px] bg-[#0057FF] text-[20px] font-bold text-white mb-4"
                onClick={() => {
                  setAuthType("wallet");
                }}
              >
                Cryptocurrency Wallet
              </button>
              <button
                className="btn rounded-2xl-1 h-[100px] bg-[#0057FF] text-[20px] text-white font-bold"
                onClick={() => {
                  setAuthType("email");
                }}
              >
                Email address
              </button>
            </div>
          </>
        ) : authType === "email" ? (
          <div className="flex flex-col w-full border border-black bg-white rounded-2xl-1 px-8 py-8 text-black">
            <div className="input-form-group flex flex-col items-start mb-4">
              <label className="font-bold mb-2">Username</label>
              <input
                type="text"
                className={`outline-none focus:border-sky-400 mt-1 block w-full sm:text-sm border rounded-md p-3 bg-transparent border-black`}
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {/* <span className="text-red-500 text-xs mt-1"></span> */}
            </div>
            <div className="input-form-group flex flex-col items-start mb-4">
              <label className="font-bold mb-2">Email</label>
              <input
                type="email"
                className={`outline-none focus:border-sky-400 mt-1 block w-full sm:text-sm border rounded-md p-3 bg-transparent border-black`}
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* <span className="text-red-500 text-xs mt-1"></span> */}
            </div>
            <div className="input-form-group flex flex-col items-start mb-4">
              <label className="font-bold mb-2">Password</label>
              <input
                type="password"
                className={`outline-none focus:border-sky-400 mt-1 block w-full sm:text-sm border rounded-md p-3 bg-transparent border-black`}
                placeholder="Enter a secure password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <span className="text-red-500 text-xs mt-1"></span> */}
            </div>
            <div className="flex w-full justify-between mt-4">
              <button
                className="btn rounded-2xl-1 h-[60px] bg-[#0057FF] border-none text-[20px] font-bold text-white w-full"
                onClick={() => login({ email, password }, "email")}
              >
                Sign in
              </button>
            </div>
          </div>
        ) : (
          <ConnectWallet callback={() => setSelected(true)} />
        )}
      </div>
    </div>
  );
};
