import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from './../../utils/request';

import {
  SIDEBAR_GET_DATA,
  SIDEBAR_GET_TEAMS
} from './constants';

import {
  getSidebarComplete,
  getSidebarFail,
  getTeamsComplete,
  getTeamsFail
} from './actions';

// Individual exports for testing
export function* getSidebar() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(SIDEBAR_GET_DATA, getSidebarData);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* getSidebarData({params}) {
  debugger;
 // Select username from store
 const requestURL = `http://localhost:8080/v1/teams/${params.get('id')}`;
 try {
   // Call our request helper (see 'utils/request')
   const results = yield call(request, requestURL);
   yield put(getSidebarComplete(results));
 } catch (err) {
   yield put(getSidebarFail(err));
 }
}

export function* getTeams() {
  const watcher = yield takeLatest(SIDEBAR_GET_TEAMS, getSidebarTeams);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* getSidebarTeams() {
  // TODO no hardcoding
  const requestURL = `http://localhost:8080/v1/teams`;
  try {
      const results = yield call(request, requestURL);
      yield put(getTeamsComplete(results));
  } catch (err) {
    yield put(getTeamsFail(err));
  }
}

// All sagas to be loaded
export default [
  getSidebar,
  getTeams
];
