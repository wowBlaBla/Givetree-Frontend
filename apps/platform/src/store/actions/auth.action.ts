import { AUTH_USER } from "../reducers/auth.reducer";
import {
  OPEN_MODAL,
  OPEN_SIDEBAR,
  UPDATE_ADDRESS,
  UPDATE_AUTHED,
  UPDATE_PROVIDER,
} from "../types";

export const openModal =
  (payload: boolean): any =>
  (dispatch: any) => {
    dispatch({
      payload,
      type: OPEN_MODAL,
    });
  };

export const openSidebar =
  (payload: boolean): any =>
  (dispatch: any) => {
    dispatch({
      payload,
      type: OPEN_SIDEBAR,
    });
  };

export const updateProvider =
  (payload: any): any =>
  (dispath: any) => {
    dispath({
      payload,
      type: UPDATE_PROVIDER,
    });
  };

export const updateAddress =
  (payload: string): any =>
  (dispatch: any) => {
    dispatch({
      payload,
      type: UPDATE_ADDRESS,
    });
  };

export const updateAuthed =
  (payload: AUTH_USER | undefined): any =>
  (dispatch: any) => {
    dispatch({
      payload,
      type: UPDATE_AUTHED,
    });
  };
