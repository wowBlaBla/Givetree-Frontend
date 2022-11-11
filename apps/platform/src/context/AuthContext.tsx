/* eslint-disable @typescript-eslint/no-empty-function */
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { useLocation } from "wouter";
import { LoadingContainer } from "../components/LoadingContainer";

import { CharityProperties } from "../typed/charity";
import { useWallet } from "./WalletContext";

export type AuthRequestBody = {
  username?: string;
  email?: string;
  password?: string;
  address?: string;
  network?: string;
  type?: string;
  signature?: string;
};

export type EmailVerifyRequestBody = {
  token: string;
};

export type AuthType = "email" | "wallet";

export type UserLinkData = {
  social: string;
  link: string;
};

export type AccountType = "standard" | "charity";

export type WalletAddressData = {
  address: string;
  type: string;
  network: string;
};

export type User = {
  id: number;
  createdAt: string;
  updatedAt: string;
  email: string | undefined;
  userName: string | undefined;
  type: AccountType;
  title: string | undefined;
  bio: string;
  location: string;
  socials: UserLinkData[];
  profileImage: string;
  banner: string;
  visibility: "private" | "public";
  isEmailVerified: boolean;
  tax: boolean;
  walletAddresses: WalletAddressData[];
  refreshTokens: string[];
  charityProperty: CharityProperties;
};

export type AUTH_USER = {
  user: User;
  accessToken: string;
  refreshToken: string;
};

interface IAuthProvider {
  loading: boolean;
  isAuth: boolean;
  initialized: boolean;
  authUser?: AUTH_USER;
  updateUserData: (data: Partial<User>) => void;
  register: (body: AuthRequestBody, authType: AuthType) => Promise<boolean>;
  login: (body: AuthRequestBody, authType: AuthType) => Promise<boolean>;
  verifyEmail: (token: string) => Promise<boolean>;
  resetPassword: (token: string, password: string) => Promise<boolean>;
  requestResetPassword: (email: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = React.createContext<IAuthProvider>({
  loading: false,
  isAuth: false,
  initialized: false,
  register: () => new Promise((resolve) => resolve(false)),
  login: () => new Promise((resolve) => resolve(false)),
  verifyEmail: () => new Promise((resolve) => resolve(false)),
  resetPassword: () => new Promise((resolve) => resolve(false)),
  requestResetPassword: () => new Promise((resolve) => resolve(false)),
  logout: () => {},
  updateUserData: () => {},
});

// eslint-disable-next-line @typescript-eslint/ban-types
export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [, setLocation] = useLocation();
  const { reset } = useWallet();

  const [initialized, setInitialized] = React.useState(false);
  const [isAuth, setIsAuth] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [authUser, setAuthUser] = React.useState<AUTH_USER>();

  const register = React.useCallback(
    async (body: AuthRequestBody, authType: AuthType): Promise<boolean> => {
      const api = `${process.env.NEXT_PUBLIC_API}/api/auth/${
        authType === "email" ? "register-email" : "register-wallet"
      }`;

      if (authType === "wallet") {
        body.type = "auth";
      }

      setLoading(true);
      const status = await axios
        .post(api, body)
        .then((res: any) => {
          toast.success("You have registered successfully!");

          localStorage.setItem("access_token", res.data.accessToken);
          localStorage.setItem("refresh_token", res.data.refreshToken);
          reset();
          setAuthUser(res.data);
          setIsAuth(true);
          setLoading(false);
          return true;
        })
        .catch((err) => {
          console.log("cache-errr", err);
          if (err?.response?.data?.message) {
            toast.error(err?.response?.data?.message);
          }
          setLoading(false);
          return false;
        });
      return status;
    },
    []
  );

  const login = React.useCallback(
    async (body: AuthRequestBody, authType: AuthType): Promise<boolean> => {
      const api = `${process.env.NEXT_PUBLIC_API}/api/auth/${
        authType === "email" ? "login-email" : "login-wallet"
      }`;

      if (authType === "wallet") {
        body.type = "auth";
      }

      setLoading(true);
      return await axios
        .post(api, body)
        .then((res: any) => {
          toast.success("You have logined successfully!");

          localStorage.setItem("access_token", res.data.accessToken);
          localStorage.setItem("refresh_token", res.data.refreshToken);
          setAuthUser(res.data);
          setIsAuth(true);
          setLoading(false);
          return true;
        })
        .catch((err) => {
          if (err?.response?.data?.message) {
            toast.error(err?.response?.data?.message);
          }
          setLoading(false);
          return false;
        });
    },
    []
  );

  const requestVerifyEmail = React.useCallback(() => {
    setLoading(true);
  }, []);

  const verifyEmail = React.useCallback(async (token: string): Promise<boolean> => {
    setLoading(true);
    return await axios
      .post(`${process.env.NEXT_PUBLIC_API}/api/auth/verify-email`, { token })
      .then((res: any) => {
        toast.success("You have logined successfully!");

        localStorage.setItem("access_token", res.data.accessToken);
        localStorage.setItem("refresh_token", res.data.refreshToken);
        setAuthUser(res.data);
        setIsAuth(true);
        setLoading(false);
        return true;
      })
      .catch((err) => {
        if (err?.response?.data?.message) {
          toast.error(err?.response?.data?.message);
        }
        setLoading(false);
        return false;
      });
  }, []);

  const requestResetPassword = React.useCallback(async (email: string) => {
    setLoading(true);
    try {
      const res = await axios.post<boolean>(
        `${process.env.NEXT_PUBLIC_API}/api/auth/request-reset-password`,
        { email }
      );
      setLoading(false);
      return res.data;
    } catch (err: any) {
      setLoading(false);
      toast.error(err?.response?.data?.message);
      return false;
    }
  }, []);

  const resetPassword = React.useCallback(async (token: string, password: string) => {
    setLoading(true);
    try {
      const res = await axios.post<boolean>(
        `${process.env.NEXT_PUBLIC_API}/api/auth/reset-password`,
        { token, password }
      );
      setLoading(false);
      return res.data;
    } catch (err: any) {
      setLoading(false);
      toast.error(err?.response?.data?.message);
      return false;
    }
  }, []);

  const logout = React.useCallback(() => {
    localStorage.clear();
    setAuthUser(undefined);
    setIsAuth(false);
    setLocation("/explore/home");
  }, []);

  const refreshAccount = React.useCallback(
    (refreshToken: string) => {
      setLoading(true);
      axios
        .post(`${process.env.NEXT_PUBLIC_API}/api/auth/refresh`, { refreshToken })
        .then((res) => {
          localStorage.setItem("access_token", res.data.accessToken);
          setAuthUser(res.data);
          setIsAuth(true);
        })
        .catch((err) => {
          logout();
        })
        .finally(() => {
          setLoading(false);
          setInitialized(true);
        });
    },
    [logout]
  );

  const updateUserData = React.useCallback((data: Partial<User>) => {
    setAuthUser((prev) => {
      if (prev) {
        return {
          ...prev,
          user: {
            ...prev.user,
            ...data,
          },
        };
      }
      return undefined;
    });
  }, []);

  React.useEffect(() => {
    const refreshToken = localStorage.getItem("refresh_token");
    if (refreshToken) {
      refreshAccount(refreshToken);
    } else {
      setInitialized(true);
    }
  }, [refreshAccount]);

  return (
    <AuthContext.Provider
      value={{
        loading,
        isAuth,
        authUser,
        initialized,
        register,
        login,
        logout,
        verifyEmail,
        updateUserData,
        resetPassword,
        requestResetPassword,
      }}
    >
      {children}
      {loading && <LoadingContainer message={"Welcome to GiveTree"} />}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth hook must be used inside AuthProvider");
  }

  return context;
};
