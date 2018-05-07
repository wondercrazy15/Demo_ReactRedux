import React from 'react';
import { shallow } from 'enzyme';
import MessageItem from '../index';
import { List, fromJS } from 'immutable';

describe('<MessageItem />', () => {

  it('should set props if all are defined', () => {
    const item = fromJS({"id":73432,"sender_id":19,"message":"quibusdam aspernatur et","date":"Wed Sep 06 2017 00:00:00 GMT+0530 (India Standard Time)","user":{"id":19,"name":"Grayce Torp","image_url":"http://lorempixel.com/640/480/abstract","is_online":"true","is_me":false}})
    const wrapper = shallow(<MessageItem    {...{ message: item }} />);
    expect(wrapper.contains("quibusdam aspernatur et")).toBe(true);
  });
});
