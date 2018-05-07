
import {
  fromJS,
  Map,
  set
} from 'immutable';
import {
  selectSidebar,
  selectSelectedItem,
  selectSelectedItemId,
  selectSelectedItemLabel,
  selectSelectedItemType,
  selectIsFetching,
  selectTasks,
  selectAnnouncements,
  selectMessages,
  selectTeams
} from '../selectors';
import {
  initialState
} from '../reducer';

const reducerParam = 'sidebar';

describe('selectSidebar', () => {
  it('should select sidebar', () => {
    const selectSidebarSelector = selectSidebar;
    const mockedState = fromJS({
      [reducerParam]: initialState,
    });
    expect(selectSidebarSelector(mockedState)).toEqual(initialState);
  });
});

describe('selectHome', () => {
  it('should select the sidebar state', () => {
    const sidebarState = fromJS({
      isFetching: false,
    });
    const mockedState = fromJS({
      [reducerParam]: initialState,
    });
    expect(selectIsFetching()(mockedState)).toEqual(false);
  });
});

describe('selectTasks', () => {
  it('should select the tasks', () => {
    const selectTasksSelector = selectTasks();
    testEmptyArray(selectTasksSelector);
  });
});

describe('selectTeams', () => {
  it('should select the teams', () => {
    const selectTeamsSelector = selectTeams();
    const mockedState = new Map({[reducerParam]: initialState});
    expect(selectTeamsSelector(mockedState)).toEqual(initialState.get('teams'));
  });
});

describe('selectAnnouncements', () => {
  it('should select the announcements', () => {
    const selectAnnouncementsSelector = selectAnnouncements();
    testEmptyArray(selectAnnouncementsSelector);
  });
});

describe('selectMessages', () => {
  it('should select the messages', () => {
    const selectMessagesSelector = selectMessages();
    testEmptyArray(selectMessagesSelector);
  });
});

describe('selectSelected', () => {
  it('should select selected', () => {
    const selectSelectedSelector = selectSelectedItem();
    const mockedState = fromJS({
      [reducerParam]: initialState,
    });
    expect(selectSelectedSelector(mockedState)).toEqual(fromJS({
      type: null,
      id: null,
      name: '',
      properties: {}
    }));
  });
});

describe('selectSelectedItemId', () => {
  it('should select selected ID', () => {
    const selectSelectedItemLabelSelector = selectSelectedItemId();
    const mockedState = fromJS({
      [reducerParam]: initialState,
    });
    expect(selectSelectedItemLabelSelector(mockedState)).toEqual(initialState.getIn(['currentTeam', 'selectedItem', 'id']));
  });
});

describe('selectSelectedItemLabel', () => {
  it('should select selected label', () => {
    const selectSelectedItemLabelSelector = selectSelectedItemLabel();
    const mockedState = fromJS({
      [reducerParam]: initialState,
    });
    expect(selectSelectedItemLabelSelector(mockedState)).toEqual(initialState.getIn(['currentTeam', 'selectedItem', 'name']));
  });
});


describe('selectSelectedItemType', () => {
  it('should select selected type', () => {
    const selectSelectedItemTypeSelector = selectSelectedItemType();
    const mockedState = fromJS({
      [reducerParam]: initialState,
    });
    expect(selectSelectedItemTypeSelector(mockedState)).toEqual(initialState.getIn(['currentTeam', 'selectedItem', 'type']));
  });
});


function testEmptyArray(selectorFn) {
  const list = fromJS([]);
  const mockedState = new Map({[reducerParam]: initialState});
  expect(selectorFn(mockedState)).toEqual(list);
}
