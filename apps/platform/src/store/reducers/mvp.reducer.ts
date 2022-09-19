import { REDUCER, UPDATE_PROVIDER, OPEN_MODAL, UPDATE_ADDRESS, OPEN_SIDEBAR, UPDATE_CHAINID } from "../types";

export interface MVP {
    provider: Object;
    chainID?: number;

}

export interface IStore {
    auth: MVP
}

const data:MVP = {
    provider: {},
}

export default function(state = data, action:REDUCER) {
    switch(action.type) {
        case UPDATE_PROVIDER:
            return { ...state, provider: action.payload };
        case UPDATE_CHAINID:
            return { ...state, chainID: action.payload };
        default:
            return state;
    }
}