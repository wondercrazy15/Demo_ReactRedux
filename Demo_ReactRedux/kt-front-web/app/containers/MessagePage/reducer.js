/*
 *
 * MessagePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  FETCH_CONVERSATION,
  FETCH_CONVERSATION_SUCCESS,
  FETCH_CONVERSATION_ERROR,
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_ERROR
} from './constants';

const initialState = fromJS({
  conversation: {
    messages: [
      // {
      //   id: 1234252,
      //   sender_id: 1234,
      //   name: 'Taku',
      //   message: 'Message'
      // }
    ],
    participants: {
      total: 0,
      list: [
        // {
        //   id: 12345,
        //   name: 'Takuto Suzuki',
        //   image_url: 'example.com'
        // }
      ]
    },
  },
  isFetching: false,
  isFetched: false,
  error: {
    type: null,
    message: null
  }
});

function messagePageReducer(state = initialState, action) {
  
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case FETCH_CONVERSATION:
      return state.withMutations((ctx) => {
        ctx.set('isFetching', false);
      });
    case FETCH_CONVERSATION_SUCCESS:
      return state.withMutations((ctx) => {
        ctx.set('isFetching', false)
          .set('isFetched', true)
          .setIn(['conversation', 'messages'], fromJS(action.data.messages))
          .setIn(['conversation', 'participants'], fromJS(action.data.participants))
      });
      return state;
    case FETCH_CONVERSATION_ERROR:
      return state;
    case SEND_MESSAGE:
      return state.withMutations((ctx) => {
        ctx.set('isFetching', false);
      });
    case SEND_MESSAGE_SUCCESS:
      return state.withMutations((ctx) => {
        ctx.set('isFetching', false)
          .set('isFetched', true)
          .setIn(['conversation', 'messages'], fromJS(action.data.messages))
      });
      return state;
    case SEND_MESSAGE_ERROR:
      return state;
    default:
      return state;
  }
}

export default messagePageReducer;
