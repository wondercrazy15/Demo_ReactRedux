import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import SidebarList from '../index';
import { List } from 'immutable';
import { each } from 'lodash';

describe('<SidebarList />', () => {

  it('should set props if all are defined', () => {
    const selectItem = state => state;
    const list = new List();
    const wrapper = shallow(<SidebarList {...{list, selectItem}} />);
    const props = wrapper.props();
  });

});
