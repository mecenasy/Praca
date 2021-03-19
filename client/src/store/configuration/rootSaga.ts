import { fork, all } from "@redux-saga/core/effects";
import { counterWatcher } from "../counter/sagas";

export function* rootSaga() {
   yield all([
      fork(counterWatcher)
   ]);
}
