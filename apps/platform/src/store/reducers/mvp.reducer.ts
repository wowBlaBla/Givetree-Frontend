import { REDUCER, UPDATE_PROVIDER, UPDATE_CHAINID, UPDATE_CONTRACTS } from "../types";
import {Contract} from 'web3-eth-contract';
import Web3 from "web3";

export interface Contracts {
    factoryContract?: Contract;
    singleNFTContract?: Contract;
    marketplaceContract?: Contract;
}

export interface MVP {
    provider?: Web3;
    chainID?: number;
    contracts: Contracts;
}

export interface IStore {
    mvp: MVP
}

const data:MVP = {
    contracts: {}
}

export default function(state = data, action:REDUCER) {
    switch(action.type) {
        case UPDATE_PROVIDER:
            return { ...state, provider: action.payload };
        case UPDATE_CHAINID:
            return { ...state, chainID: action.payload };
        
        case UPDATE_CONTRACTS:
            return { ...state, contracts: action.payload };
        default:
            return state;
    }
}