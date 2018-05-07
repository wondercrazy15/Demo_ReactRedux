import React from 'react';
import { shallow, render } from 'enzyme';
import { IntlProvider } from 'react-intl';
import MessageList from '../index';
import { List, fromJS } from 'immutable';
import { each } from 'lodash';

describe('<MessageList />', () => {

  it('should set props if all are defined', () => {
    //const item = fromJS([{"date":"09/06/2017 12:00 AM","data":[{"id":73432,"sender_id":19,"message":"quibusdam aspernatur et","date":"Wed Sep 06 2017 00:00:00 GMT+0530 (India Standard Time)","user":{"id":19,"name":"Grayce Torp","image_url":"http://lorempixel.com/640/480/abstract","is_online":"true","is_me":false}},{"id":73432,"sender_id":19,"message":"quibusdam aspernatur et","date":"Wed Sep 06 2017 00:00:00 GMT+0530 (India Standard Time)","user":{"id":19,"name":"Grayce Torp","image_url":"http://lorempixel.com/640/480/abstract","is_online":"true","is_me":false}}]}])
    const data = fromJS([{"id":73432,"sender_id":19,"message":"quibusdam aspernatur et","date":"Wed Sep 06 2017 00:00:00 GMT+0530 (India Standard Time)","user":{"id":19,"name":"Grayce Torp","image_url":"http://lorempixel.com/640/480/abstract","is_online":"true","is_me":false}},{"id":73432,"sender_id":19,"message":"quibusdam aspernatur et","date":"Wed Sep 06 2017 00:00:00 GMT+0530 (India Standard Time)","user":{"id":19,"name":"Grayce Torp","image_url":"http://lorempixel.com/640/480/abstract","is_online":"true","is_me":false}}])
    const renderedComponent = shallow(<MessageList  {...{ list: data }} />);
    expect(renderedComponent.find('MessageItem').length).toBe(2);
  });
});
