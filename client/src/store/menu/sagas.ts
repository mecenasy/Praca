import { call, put, takeLatest } from 'redux-saga/effects';
import { getMenu } from '../../api/menu/requests';
import { getMenuFail, getMenuSuccess } from './actions';
import { MenuActionType } from './constants';

export function* getMenuWatcher() {
   yield takeLatest(MenuActionType.GetMenuRequest, getMenuWorker);
}
export function* getMenuWorker() {
   try {
      const { data } = yield call(getMenu);

      yield put(getMenuSuccess(data))
   } catch (error) {
      yield put(getMenuFail(error))

   }
}
