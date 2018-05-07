/**
*
* SidebarItem
*
*/

import React, { PropTypes } from 'react';
import moment from 'moment'

class MessageItem extends React.Component {
    render() {
        const { message } = this.props;
        return (
            <div className="msg_section">
                <span className="user_profile">
                    <img src={message.get("user").get("image_url")} alt="" />
                </span>
                <div className="msg_container">
                    <p className="user_name">{message.get("user").get("name")}</p>
                    <span className={"msg_time "+ (message.get("user").get("is_online") == "true" ? "online_icon" : "" )}><span>
                        {moment(message.get("date")).format("hh:mm A")}</span></span>
                    <p className="join_msg">{message.get("message")}</p>
                </div>
            </div>
        );
    }
}

export default MessageItem;
