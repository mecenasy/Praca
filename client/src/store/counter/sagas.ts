import { takeEvery, put } from 'redux-saga/effects';
import { incrementCount } from './acrions';
import { CounterAction, CounterActionType } from './constants';

export function* counterWatcher() {
   yield takeEvery(CounterActionType.IncrementByCountRequest, counterWorker);
}

function* counterWorker(action: CounterAction) {
   if (action.type === CounterActionType.IncrementByCountRequest) {
      yield put(incrementCount(action.count));
   }
}
