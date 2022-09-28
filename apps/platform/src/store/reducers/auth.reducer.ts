import {
  REDUCER,
  OPEN_MODAL,
  UPDATE_ADDRESS,
  OPEN_SIDEBAR,
  UPDATE_AUTHED,
} from "../types";

export interface User {
  id: number;
  createdAt: string;
  updatedAt: string;
  email: string | undefined;
  userName: string | undefined;
  type: "standard" | "charity";
  bio: string;
  profileImage: string;
  bannerImage: string;
  posts: string[];
  walletAddresses: string[];
  refreshTokens: string[];
}
export interface AUTH_USER {
  user: User;
  accessToken: string;
  refreshToken: string;
}
export interface AUTH {
  openAuthModal: boolean;
  walletAddress: string;
  registeredWallets: string[];
  email: string;
  openSidebarMenu: boolean;
  authedUser: AUTH_USER | undefined;
}

export interface IStore {
  auth: AUTH;
}

const data: AUTH = {
  openAuthModal: false,
  walletAddress: "",
  registeredWallets: [],
  email: "",
  openSidebarMenu: true,
  authedUser: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = data, action: REDUCER) {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, openAuthModal: action.payload };
    case UPDATE_AUTHED:
      return { ...state, authedUser: action.payload };
    case OPEN_SIDEBAR:
      return { ...state, openSidebarMenu: action.payload };
    case UPDATE_ADDRESS:
      return { ...state, walletAddress: action.payload };
    default:
      return state;
  }
}
