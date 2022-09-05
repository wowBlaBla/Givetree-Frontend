import { AUTH_REDUCER, UPDATE_PROVIDER, OPEN_MODAL } from "../types";

export interface AUTH {
    openAuthModal: boolean;
    walletAddress: string;
    email: string;
    provider: Object;
}

export interface IStore {
    auth: AUTH
}

const data:AUTH = {
    openAuthModal: false,
    walletAddress: "",
    email: "",
    provider: {}
}

export default function(state = data, action:AUTH_REDUCER) {
    switch(action.type) {
        case OPEN_MODAL: 
            return { ...state, openAuthModal: action.payload };
        case UPDATE_PROVIDER:
            return { ...state, provider: action.payload };
        default:
            return state;
    }
}