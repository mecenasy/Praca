import { Task } from "@redux-saga/types";
import { AnyAction, Reducer, Store } from "redux";
import { CounterState } from "../counter/constants";

export interface ApplicationState {
   counter: CounterState;
}

export type ConfigureStore = (
   initialState: ApplicationState | undefined,
   reducers: Reducer<ApplicationState>,
   rootSaga: () => Iterator<any>,
) => {
   store: Store<ApplicationState, AnyAction>, rootSagaTask: Task;
}
