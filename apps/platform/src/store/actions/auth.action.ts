import { OPEN_MODAL, UPDATE_PROVIDER } from "../types"

export const openModal = (payload:boolean):any => (dispatch:any) => {
    dispatch({
        payload: payload,
        type: OPEN_MODAL
    });
}

export const updateProvider = (payload: Object):any => (dispath:any) => {
    dispath({
        payload: payload,
        type: UPDATE_PROVIDER
    });
}