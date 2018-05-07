/**
*
* SidebarItem
*
*/

import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import { List } from 'immutable';
import moment from 'moment'
import MessageList from '../../components/MessageList'

class MessageGroup extends React.Component {
    render() {
        let { list } = this.props;
        return (
            <div>
                {
                    list == undefined ? null : (
                        list.map((item, index) => {

                            return (
                                <div key={index} >
                                    <div className='day_label'>
                                        <span> {moment(item.date).format("YYYY") == moment().format("YYYY") ?  moment(item.date).format("MM/DD/YYYY") === moment().format("MM/DD/YYYY") ? "Today" :  moment(item.date).format("dddd DD MMM") : moment(item.date).format("dddd DD MMM YYYY")} </span>
                                    </div>
                                    <MessageList    {...{ list: item.data }} />
                                </div>

                            );
                        })
                    )

                }
            </div>

        );
    }
}

export default MessageGroup;
