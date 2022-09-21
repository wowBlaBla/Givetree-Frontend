import { REDUCER, OPEN_MODAL, UPDATE_ADDRESS, OPEN_SIDEBAR } from "../types";

export interface AUTH {
    openAuthModal: boolean;
    walletAddress: string;
    email: string;
    openSidebarMenu: boolean;
}

export interface IStore {
    auth: AUTH
}

const data:AUTH = {
    openAuthModal: false,
    walletAddress: "",
    email: "",
    openSidebarMenu: true,
}

export default function(state = data, action:REDUCER) {
    switch(action.type) {
        case OPEN_MODAL: 
            return { ...state, openAuthModal: action.payload };
        case OPEN_SIDEBAR:
            return { ...state, openSidebarMenu: action.payload };
        case UPDATE_ADDRESS:
            return { ...state, walletAddress: action.payload};
        default:
            return state;
    }
}