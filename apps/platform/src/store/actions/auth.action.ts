import { OPEN_MODAL, OPEN_SIDEBAR, UPDATE_ADDRESS, UPDATE_PROVIDER } from "../types"

export const openModal = (payload:boolean):any => (dispatch:any) => {
    dispatch({
        payload,
        type: OPEN_MODAL
    });
}

export const openSidebar = (payload: boolean):any => (dispatch:any) => {
    dispatch({
        payload,
        type: OPEN_SIDEBAR
    });
}

export const updateProvider = (payload: Object):any => (dispath:any) => {
    dispath({
        payload,
        type: UPDATE_PROVIDER
    });
}

export const updateAddress = (payload: string):any => (dispatch: any) => {
    dispatch({
        payload,
        type: UPDATE_ADDRESS
    })
}