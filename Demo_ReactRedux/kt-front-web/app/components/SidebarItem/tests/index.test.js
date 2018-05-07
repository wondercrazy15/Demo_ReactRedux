import React from 'react';
import { shallow } from 'enzyme';

import SidebarItem from '../index';

describe('<SidebarItem />', () => {
  it('should render sidebar item', () => {
      //const wrapper = shallow(<SidebarItem label={'no label'} />);
      const wrapper = shallow(<SidebarItem    {...{ label: "no label", iconColor: "red", icon: "fa-user" }} />);

      

    expect(wrapper.contains(<div>
        <div className="submenu_list"><span className="submenu_icon red fa fa-user"></span><span className="submenu_label">no label</span></div>
    </div>)).toBe(true);
  });
});
