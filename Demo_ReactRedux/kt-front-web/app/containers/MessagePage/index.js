/*
 *
 * MessagePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import moment from 'moment'
import {
    getParticipantsCount,
    getParticipantsList,
    getMessages
} from './selectors';
import messages from './messages';
import MessagePageHeaderDefault from './../../components/MessagePageHeaderDefault';
import { List, Map } from 'immutable';
import MessageGroup from './../../components/MessageGroup';
import { fetchConversation, sendMessage } from './actions';





export class MessagePage extends React.Component { // eslint-disable-line react/prefer-stateless-function


    
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: this.props.selectedItem
        };
        this.getUser = this.getUser.bind(this)
    }

    componentDidMount() {
        const { selectedItem } = this.props;
        console.log("MessagePage.componentDidMountselectedItem", selectedItem.toJS());
        if (selectedItem.get('type')) {
            this.props.onFetchConversation(selectedItem);
        }
    }

    componentDidUpdate() {
        const { selectedItem } = this.props;
        console.log("MessagePage.componentDidUpdate");
        if (!this.state.selectedItem || this.state.selectedItem.get('id') != selectedItem.get('id')) {
            console.log('isfetching again', this.state.selectedItem.toJS());
            this.setState({ selectedItem });
            this.props.onFetchConversation(selectedItem);

        }

        var el = this.refs.Messages;
        el.scrollTop = el.scrollHeight;
    }

    getUser(senderId) {
        return participantsList.find(p => {
            console.log('getuser', p.id, senderId);
            p.id == senderId;
        });
    }

    handleKeyPress = (event) => {
        if (event.key == 'Enter' && (event.ctrlKey === null || event.ctrlKey === false) && (event.altKey === null || event.altKey === false)) {
            var msg = this.refs.sendText.value;
            if (msg.trim() != "") {
                this.props.onSendMessage(this.props.selectedItem, msg);
            }
            this.refs.sendText.value = "";
        }
    }

    render() {

        
          
        const { messages, participantsList,selectedItem,selected } = this.props;
        const { getUser } = this;
        let messageList = messages;
        var message = [];

        let MessageData = [];

        messageList = messages.sort(function (a, b) {
            return moment(b.get("date")) < moment(a.get("date"));
        })



        messageList.map((item, i) => {
            var exists = null;
            if (i === 0) {
                var date = moment(item.get("date")).format("MM/DD/YYYY hh:mm A");
                var message = { date: date, data: [item] };
                MessageData.push(message)
            }
            else {

                for (var k = 0; k < MessageData.length; k++) {

                    if (moment(item.get("date")).format("MM/DD/YYYY") === moment(MessageData[k].date).format("MM/DD/YYYY")) {
                        exists = MessageData[k];
                        break;
                    }

                }

                if (exists != null) {
                    var index = MessageData.indexOf(exists);
                    MessageData[index].data.push(item);

                }
                else {
                    MessageData.push({
                        date: moment(item.get("date")).format("MM/DD/YYYY hh:mm A"),
                        data: [item]
                    })
                }
            }

        })

        return (
            <div>
                <Helmet
                    title="MainContentsPage"
                    meta={[
                        { name: 'description', content: 'Description of MainContentsPage' },
                    ]}
                />
                <div className="message-view">
                    <div className="header">
                        <span className="message-view-header">{selectedItem.get("name")}</span>
                        {
                            // (() => {
                            //   switch(type) {
                            //     case SELECTION_TYPE_TASK:
                            //       return (
                            //         <div>
                            //             <MessagePageHeaderDefault {...title} />
                            //             <div className="activeUsers">
                            //               {
                            //                 map(selected.participants, function(user, idx) {
                            //                   return (<div style={{marginRight: '10px', display: 'inline-block', margin: '2px'}} key={idx}>
                            //                     <img src={user.image_url} width="36" height="36" style={{borderRadius: '50%'}} />
                            //                   </div>);
                            //                 })
                            //               }
                            //               <span style={{display: 'inline-block', pointer: 'cursor', height: '36px'}}>
                            //                 <i className="fa fa-fw fa-plus" aria-hidden="true"></i>
                            //               </span>
                            //             </div>
                            //           </div>
                            //       );
                            //     case SELECTION_TYPE_MESSAGE:
                            //       return <MessagePageHeaderDefault title={map(showParticipantsName(selected.participants), 'name').join(', ')} />;
                            //     case SELECTION_TYPE_ANNOUNCEMENT:
                            //       return <MessagePageHeaderDefault {...title} />
                            //     break;
                            //     default:
                            //       return <MessagePageHeaderDefault {...title} />;
                            //   }
                            // })()
                        }
                        <div className="actions">
                       
                            <span className="adduser-icon bg-icon md-icon" aria-hidden="true"></span>
                            <span className="info-icon bg-icon md-icon" aria-hidden="true" onClick={() => { console.log("selected", selected); openTaskDetail(selected.get('id')) }}></span>
                            <span className="cog-icon bg-icon md-icon" aria-hidden="true"></span>
                            <span className="md-icon"><i className="fa fa-list" aria-hidden="true"></i></span>
                        </div>
                    </div>

                    {
                        // type === 'announcement' ?
                        // <div style={{
                        //   order:3,
                        //   flexBasis: '50px',
                        //   background: 'lightcoral'
                        // }}>
                        //   <div style={{
                        //     padding: '0 20px',
                        //     height: '50px',
                        //     display: 'table-cell',
                        //     verticalAlign: 'middle'
                        //   }}>
                        //     <span style={{
                        //       fontSize: '15px',
                        //       fontWeight: 200
                        //     }}>
                        //       Please confirm that youve read the announcement
                        //     </span>
                        //     <Button bsStyle="info">Read</Button>
                        //
                        //   </div>
                        // </div>
                        // : null
                    }
                    <div className="right_main_container">
                        <div className="hidden">
                            <ul className="no-indent">
                                {
                                    messages.map(function (obj, index) {
                                        return (
                                            <li key={index} style={{ minHeight: '40px' }}>
                                                <div style={{ marginBottom: '6px' }}>
                                                    <div style={{ float: 'left', marginRight: '10px' }}>
                                                        <img src={obj.get('sender_id')} width="36" height="36" style={{ borderRadius: '50%' }} />
                                                    </div>
                                                    <div style={{ marginLeft: '48px' }}>
                                                        <span style={{ display: 'block', fontWeight: 500, margin: '5px 0' }}>{obj.get('name')}</span>
                                                        <span>{obj.get('message')}</span>
                                                    </div>
                                                </div>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                            <div style={{ float: "left", clear: "both" }}
                                ref={(el) => { this.messagesEnd = el; }}>
                            </div>

                        </div>


<div ref="Messages" className="message-box ">
                        <MessageGroup {...{ list: MessageData }} />
</div>

                        {/* <div className="mb15">
                            <div className='day_label'>
                                <span> today </span>
                            </div> */}

                        {/* <div className="msg_section">
                                <span className="user_profile">
                                    <img src="https://media.licdn.com/mpr/mpr/shrinknp_100_100/p/8/005/08a/352/269b954.jpg" alt="" />
                                </span>
                                <div className="msg_container">
                                    <p className="user_name">Takutosuzuki </p>
                                    <span className="msg_time green_icon"><span>6:00 PM</span></span>
                                    <p className="join_msg">Hi Kapil, How are you?</p>
                                </div>
                            </div> */}
                        {/* </div> */}
                        {/* <div className="mb15">
                            <div className="msg_section">
                                <span className="user_profile">
                                    <img src="https://media.licdn.com/mpr/mpr/shrinknp_100_100/p/8/005/08a/352/269b954.jpg" alt="" />
                                </span>
                                <div className="msg_container">
                                    <p className="user_name">Takutosuzuki </p>
                                    <span className="msg_time blue_icon"><span>6:04 PM</span></span>
                                    <p className="join_msg">I am good, thanks and you?</p>
                                </div>
                            </div>
                        </div> */}
                        <div style={{
                            order: 4,
                            flexBasis: '100px'
                        }}>
                            <div className="textarea-container">
                                <div className="textarea-icon-container">
                                    <span className="textarea-icon bg-icon-gray add-icon"></span>
                                    <span className="textarea-icon bg-icon-gray pin-icon"></span>
                                    <span className="textarea-icon bg-icon-gray smile-icon"></span>
                                </div>

                                <textarea ref="sendText" className="message-container" onKeyUp={this.handleKeyPress}
                                    placeholder={'Message'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

MessagePage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    selectedItem: PropTypes.instanceOf(Map).isRequired,
    participantsList: PropTypes.instanceOf(List).isRequired,
    participantsCount: PropTypes.number.isRequired,
    messages: PropTypes.instanceOf(List).isRequired,
};

const mapStateToProps = createStructuredSelector({
    messages: getMessages(),
    participantsList: getParticipantsList(),
    participantsCount: getParticipantsCount(),

});

function mapDispatchToProps(dispatch) {
    return {
        onFetchConversation: (obj) => dispatch(fetchConversation(obj)),
        onSendMessage: (obj, msg) => dispatch(sendMessage(obj, msg)),
        dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagePage);
