import { combineReducers } from "redux";
import { counterReducer } from "../counter/reducers";
import { ApplicationState } from "./constants";

export const rootReducer = combineReducers<ApplicationState>({
   counter: counterReducer,
})
