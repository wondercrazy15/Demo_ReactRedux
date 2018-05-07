import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { MainPage } from '../index';

describe('<MainPage />', () => {
  it('should render main page', () => {
    const wrapper = shallow(<MainPage />);
  });
});
