/* eslint-disable @typescript-eslint/no-empty-function */
import axios from "axios";
import React, { useCallback } from "react";
import { toast } from "react-toastify";
import { useLocation } from "wouter";

import { CharityProperties } from "../typed/charity";

export type AuthRequestBody = {
  username?: string;
  email?: string;
  password?: string;
  address?: string;
};

export type AuthType = "email" | "wallet";

export type UserLinkData = {
  social: string;
  link: string;
};

export type User = {
  id: number;
  createdAt: string;
  updatedAt: string;
  email: string | undefined;
  userName: string | undefined;
  title: string | undefined;
  type: "standard" | "charity";
  visibility: "private" | "public";
  bio: string;
  location: string;
  tax: boolean;
  profileImage: string;
  banner: string;
  posts: string[];
  walletAddresses: string[];
  refreshTokens: string[];
  charityProperty: CharityProperties | any;
  socials: UserLinkData[];
};

export type AUTH_USER = {
  user: User;
  accessToken: string;
  refreshToken: string;
};

interface IAuthProvider {
  loading: boolean;
  isAuth: boolean;
  authUser?: AUTH_USER;
  updateUserData: (data: Partial<User>) => void;
  register: (body: AuthRequestBody, authType: AuthType) => void;
  login: (body: AuthRequestBody, authType: AuthType) => void;
  logout: () => void;
  refreshAccount: (token: string) => void;
}

const AuthContext = React.createContext<IAuthProvider>({
  loading: false,
  isAuth: false,
  register: () => {},
  login: () => {},
  logout: () => {},
  refreshAccount: () => {},
  updateUserData: () => {},
});

// eslint-disable-next-line @typescript-eslint/ban-types
export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [, setLocation] = useLocation();
  const [isAuth, setIsAuth] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [authUser, setAuthUser] = React.useState<AUTH_USER>();

  React.useEffect(() => {
    if (isAuth) {
      setLocation("/profile/home");
    }
  }, [isAuth, setLocation]);

  const register = React.useCallback((body: AuthRequestBody, authType: AuthType) => {
    const api = `${process.env.NEXT_PUBLIC_API}/api/auth/${
      authType === "email" ? "register-email" : "register-wallet"
    }`;

    setLoading(true);
    axios
      .post(api, body)
      .then((res: any) => {
        toast.success("You have registered successfully!");

        localStorage.setItem("access_token", res.data.accessToken);
        localStorage.setItem("refresh_token", res.data.refreshToken);
        setAuthUser(res.data);
        setIsAuth(true);
      })
      .catch((err) => {
        if (err?.response?.data?.message) {
          toast.error(err?.response?.data?.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const login = React.useCallback((body: AuthRequestBody, authType: AuthType) => {
    const api = `${process.env.NEXT_PUBLIC_API}/api/auth/${
      authType === "email" ? "login-email" : "login-wallet"
    }`;

    setLoading(true);
    axios
      .post(api, body)
      .then((res: any) => {
        toast.success("You have logined successfully!");

        localStorage.setItem("access_token", res.data.accessToken);
        localStorage.setItem("refresh_token", res.data.refreshToken);
        setAuthUser(res.data);
        setIsAuth(true);
      })
      .catch((err) => {
        if (err?.response?.data?.message) {
          toast.error(err?.response?.data?.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const logout = useCallback(() => {
    localStorage.clear();
    setAuthUser(undefined);
    setIsAuth(false);
    setLocation("/");
  }, [setAuthUser, setIsAuth, setLocation]);

  const refreshAccount = React.useCallback(
    (refreshToken: string) => {
      axios
        .post(`${process.env.NEXT_PUBLIC_API}/api/auth/refresh`, { refreshToken })
        .then((res) => {
          localStorage.setItem("access_token", res.data.accessToken);
          setAuthUser(res.data);
          setIsAuth(true);
        })
        .catch((err) => {
          logout();
        });
    },
    [logout]
  );

  const updateUserData = (data: Partial<User>) => {
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
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        isAuth,
        authUser,
        register,
        login,
        logout,
        refreshAccount,
        updateUserData,
      }}
    >
      {children}
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
