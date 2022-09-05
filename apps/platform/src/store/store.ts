import { applyMiddleware,createStore, compose } from "redux";
import reducers from "./reducers/reducer";
import middleware from 'redux-thunk';

export const store:any = createStore(reducers, compose(applyMiddleware(middleware)));