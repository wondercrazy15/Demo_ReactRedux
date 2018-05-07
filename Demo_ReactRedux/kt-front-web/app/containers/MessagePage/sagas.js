import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from './../../utils/request';

import {
  FETCH_CONVERSATION,
  SEND_MESSAGE
} from './constants';

import {
  fetchConversationComplete,
  fetchConversationFail,
sendMessageComplete,
sendMessageFail
} from './actions';

// Individual exports for testing
export function* fetchConversation() {
  
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(FETCH_CONVERSATION, fetchConversationData);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* fetchConversationData({params}) {
  debugger;
 // Select username from store
 const requestURL = `http://localhost:8080/v1/conversations/${params.get('id')}`;
 try {
   // Call our request helper (see 'utils/request')
   const results = yield call(request, requestURL);
   yield put(fetchConversationComplete(results));
 } catch (err) {
   yield put(fetchConversationFail(err));
 }
}

// Individual exports for testing
export function* sendMessage({params,msg}) {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(SEND_MESSAGE, sendMessageData);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* sendMessageData({params,msg}) {
 // Select username from store
 const requestURL = `http://localhost:8080/v1/conversation/${params.get('id')}/${msg}`;
 try {
   // Call our request helper (see 'utils/request')
   const results = yield call(request, requestURL);
   yield put(sendMessageComplete(results));
 } catch (err) {
   yield put(sendMessageFail(err));
 }
}

// All sagas to be loaded
export default [
  fetchConversation,
sendMessage
];
