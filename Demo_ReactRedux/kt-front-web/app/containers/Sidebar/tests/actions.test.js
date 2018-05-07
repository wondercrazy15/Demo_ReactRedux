
import {
  selectSidebarItem,
} from '../actions';
import {
  SIDEBAR_SELECT_ITEM,
} from '../constants';

describe('Sidebar actions', () => {
  describe('Sidebar select item', () => {
    it('has a type of SIDEBAR_SELECT_ITEM', () => {
      const params = {
        foo: 'bar'
      };
      const expected = {
        type: SIDEBAR_SELECT_ITEM,
        data: params
      };
      expect(selectSidebarItem(params)).toEqual(expected);
    });
  });
});
