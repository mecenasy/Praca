import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import { counterReducer } from "../counter/reducers";
import { menuReducer } from "../menu/reducers";
import { ApplicationState } from "./constants";

export const rootReducerFactory = (history: History) => (
   combineReducers<ApplicationState>({
      counter: counterReducer,
      router: connectRouter(history),
      menu: menuReducer,
   })
);
