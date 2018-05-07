import React from 'react';
import { shallow } from 'enzyme';

import SidebarListHeader from '../index';
import Img from '../../Img';

const src = 'test.png';
const alt = 'test';
const renderComponent = (props = {}) => shallow(
  <SidebarListHeader />
);

describe('<SidebarListHeader />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.is('div')).toBe(true);
  });

  it('should have Img and two spans', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.containsMatchingElement(<Img />)).toBe(true);
    expect(renderedComponent.find('span').length).toBe(2);
  });

});
