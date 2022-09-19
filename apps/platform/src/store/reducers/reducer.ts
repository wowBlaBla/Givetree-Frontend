import { combineReducers } from "redux";
import auth from "./auth.reducer";
import mvp from "./mvp.reducer";

const reducers = combineReducers({
    auth: auth,
    mvp: mvp,
});

export default reducers;