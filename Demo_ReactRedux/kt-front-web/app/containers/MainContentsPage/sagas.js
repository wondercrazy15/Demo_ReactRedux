import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from './../../utils/request';

import {
  SIDEBAR_SELECT_ITEM,
  SELECTION_TYPE_ANNOUNCEMENT,
  SELECTION_TYPE_TASK,
  SELECTION_TYPE_TEAM,
  SELECTION_TYPE_MESSAGE,
} from './../Sidebar/constants';
import {
  selectSelectedItemType,
  selectSelectedItemId
} from './../Sidebar/selectors';
import {
  getSidebar,
  getSidebarComplete,
  getSidebarFail
} from './../Sidebar/actions';

// Individual exports for testing
export function* getSelectedItemDetail() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(SIDEBAR_SELECT_ITEM, getSidebarData);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* getSidebarData(obj) {
  // const type = yield select(selectSelectedItemType());
  const id = yield select(selectSelectedItemId());
  // Select username from store
  const requestURL = `http://localhost:8080/v1/conversation/${id}`;

 try {
   // Call our request helper (see 'utils/request')
   const results = yield call(request, requestURL);
   yield put(getSidebarComplete(results));
 } catch (err) {
   yield put(getSidebarFail(err));
 }
}

// All sagas to be loaded
export default [
  getSelectedItemDetail
];
