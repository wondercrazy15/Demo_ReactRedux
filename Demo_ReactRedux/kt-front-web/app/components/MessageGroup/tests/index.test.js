import React from 'react';
import { shallow, render } from 'enzyme';
import { IntlProvider } from 'react-intl';
import MessageGroup from '../index';
import { List, fromJS } from 'immutable';
import { each } from 'lodash';

describe('<MessageGroup />', () => {

  it('should set props if all are defined', () => {
    const MessageData = fromJS(
      [
        { 
          date: "09/06/2017 12:00 AM",
          data: [{ 
                    id: 73432,
                    sender_id: 19,
                    message: "quibusdam aspernatur et",
                    date: "Wed Sep 06 2017 00:00:00 GMT+0530 (India Standard Time)",
                    user: 
                        { 
                          id: 19, 
                          name: "Grayce Torp",
                          image_url: "http://lorempixel.com/640/480/abstract",
                          is_online: "true",
                          is_me: false 
                        } 
                  }] 
        }, 
        { 
          date: "09/07/2017 12:00 AM",
          data: [{ 
                    id: 72992,
                    sender_id: 5,
                    message: "fugit non et",
                    date: "Thu Sep 07 2017 00:00:00 GMT+0530 (India Standard Time)",
                    user: 
                        { 
                          id: 5,
                          name: "Kylee Schuster",
                          image_url: "http://lorempixel.com/640/480/nightlife",
                          is_online: "true",
                          is_me: false 
                        } 
                }] 
        },
        {
          date: "09/10/2017 12:00 AM",
          data: [{
                    id: 41470,
                    sender_id: 12,
                    message: "voluptatem explicabo similique",
                    date: "Sun Sep 10 2017 00:00:00 GMT+0530 (India Standard Time)",
                    user: 
                        { 
                          id: 12,
                          name: "Lester Lind",
                          image_url: "http://lorempixel.com/640/480/city",
                          is_online: "true",
                          is_me: false 
                        } 
                  }, 
                  { 
                    id: 8564,
                    sender_id: 14,
                    message: "nostrum ut explicabo",
                    date: "Sun Sep 10 2017 00:00:00 GMT+0530 (India Standard Time)",
                    user: 
                        { 
                          id: 14,
                          name: "Mary Hirthe",
                          image_url: "http://lorempixel.com/640/480/sports",
                          is_online: "true",
                          is_me: false 
                        } 
                }] 
        }, 
        { 
          date: "09/13/2017 12:00 AM",
          data: [{ 
                    id: 26653,
                    sender_id: 9,
                    message: "sed corporis iure",
                    date: "Wed Sep 13 2017 00:00:00 GMT+0530 (India Standard Time)",
                    user: 
                        { 
                          id: 9,
                          name: "Miller Pouros",
                          image_url: "http://lorempixel.com/640/480/people",
                          is_online: "true",
                          is_me: false 
                        } 
                }]
        }
    ])
    const renderedComponent = shallow(<MessageGroup {...{ list: MessageData }} />);
    expect(renderedComponent.find('MessageList').length).toBe(4);
  });
});
