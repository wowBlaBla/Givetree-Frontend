import { combineReducers } from "redux";
import auth from "./auth.reducer";

const reducers = combineReducers({
    auth: auth
});

export default reducers;