import { fromJS } from 'immutable';

import sidebarReducer from '../reducer';
import {
  selectSidebarItem,
} from '../actions';

describe('sidebarReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      teams: {
        isFetching: false,
        isFetched: false,
        error: null,
        list: []
      },
      currentTeam: {
        id: null,
        name: '',
        isFetched: false,
        isFetching: false,
        selectedItem: {
          type: null,
          id: null,
          name: '',
          properties: {}
        },
        team: [],
        personal: [],
        conversations: [],
        tasks: [],
        messages: [],
        announcements: []
      }
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(sidebarReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the selectSidebarItem action correctly', () => {
    const fixture = {
      type: 'message',
      id: 1,
      label: 'Takuto Suzuki',
      properties: {}
    };
    const expectedResult = state.setIn(['currentTeam', 'selectedItem'], fixture);
    expect(sidebarReducer(state, selectSidebarItem(fixture))).toEqual(expectedResult);
  });


});
