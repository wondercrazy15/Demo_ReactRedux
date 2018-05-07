/*
 *
 * MessagePage actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCH_CONVERSATION,
  FETCH_CONVERSATION_SUCCESS,
  FETCH_CONVERSATION_ERROR,
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_ERROR
} from './constants';

export function fetchConversation(params) {
  return {
    type: FETCH_CONVERSATION,
    params
  }
}


export function fetchConversationComplete(data) {
  return {
    type: FETCH_CONVERSATION_SUCCESS,
    data
  }
}

export function fetchConversationFail(error) {
  return {
    type: FETCH_CONVERSATION_ERROR,
    error
  }
}


export function sendMessage(params,msg) {
  return {
    type: SEND_MESSAGE,
    params,
    msg
  }

}


export function sendMessageComplete(data) {
  return {
    type: SEND_MESSAGE_SUCCESS,
    data
  }
}

export function sendMessageFail(error) {
  return {
    type: SEND_MESSAGE_ERROR,
    error
  }
}
export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
