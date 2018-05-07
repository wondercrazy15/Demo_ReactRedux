import React from 'react';
import { shallow } from 'enzyme';

import MessagePageHeaderDefault from '../index';

describe('<MessagePageHeaderDefault />', () => {
  it('should pass title prop correctly', () => {
    const wrapper = shallow(<MessagePageHeaderDefault title={'some title'} />);
    expect(wrapper.contains(<div className="title">some title</div>));
  });
});
