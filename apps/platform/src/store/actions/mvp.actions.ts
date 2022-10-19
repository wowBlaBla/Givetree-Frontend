import { Contracts } from "../reducers/mvp.reducer";
import { UPDATE_CONTRACTS } from "../types";

export const updateContracts =
  (payload: Contracts): any =>
  (dispatch: any) => {
    dispatch({
        type: UPDATE_CONTRACTS,
        payload
    });
}