import { Task } from "@redux-saga/types";
import { RouterState } from "connected-react-router";
import { History } from "history";
import { AnyAction, Reducer, Store } from "redux";
import { CounterState } from "../counter/constants";

export interface ApplicationState {
   counter: CounterState;
   router: RouterState
}

export type ConfigureStore = (
   initialState: ApplicationState | undefined,
   history: History,
   rootReducerFactory: (history: History) => Reducer<ApplicationState>,
   rootSaga: () => Iterator<any>,
) => Promise<{
   store: Store<ApplicationState, AnyAction>,
   rootSagaTask: Task;
}>;

