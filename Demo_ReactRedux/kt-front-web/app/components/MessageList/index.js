/**
*
* SidebarList
*
*/

import React, { PropTypes } from 'react';
import MessageItem from './../MessageItem';
import { FormattedMessage } from 'react-intl';
import { List, Map } from 'immutable';
import moment from 'moment'

class MessageList extends React.Component {
    render() {
        let { list } = this.props;
        return (
            <div>
                {
                    list == undefined ? null : (
                        list.map((item, index) => {
                            
                            return (
                                <div key={index}>
                                    <MessageItem    {...{ message: item}}  />
                                </div>
                            );
                        })
                    )
                }
            </div>
        );
    }
}

MessageList.propTypes = {
    list: PropTypes.instanceOf(Array).isRequired
};

export default MessageList;
