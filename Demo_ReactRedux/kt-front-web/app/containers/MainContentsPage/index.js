/*
 *
 * MainContentsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import messages from './messages';
import { List } from 'immutable';
import {
  selectSelectedItem,
  selectSelectedItemLabel,
  selectSelectedItemType
} from './../Sidebar/selectors';
import {
  SELECTION_TYPE_ANNOUNCEMENT,
  SELECTION_TYPE_TASK,
  SELECTION_TYPE_MESSAGE
} from './../Sidebar/constants';
import MessagePageHeaderDefault from './../../components/MessagePageHeaderDefault';
import MessagePage from './../MessagePage';

export class MainContentsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidUpdate() {
    console.log("mainContentscomponentDidUpdate")
  }

  render() {
    const {
      selectedItem,
      title,
      type
    } = this.props;

    const messages = new List();
    const sendMessage = (val) => {
      console.log('should send message', val);
    };
    console.log('title', selectedItem.toJS());
    console.log('type', type)

    if (type == "conversations") {
      return <MessagePage {...{selectedItem}} />;
    }
    return null;
    
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
          {
            (() => {
              switch(type) {
                case SELECTION_TYPE_TASK:
                  return (
                    <div>
                        <MessagePageHeaderDefault {...title} />
                        <div className="activeUsers">
                          {
                            map(selectedItem.participants, function(user, idx) {
                              return (<div style={{marginRight: '10px', display: 'inline-block', margin: '2px'}} key={idx}>
                                <img src={user.image_url} width="36" height="36" style={{borderRadius: '50%'}} />
                              </div>);
                            })
                          }
                          <span style={{display: 'inline-block', pointer: 'cursor', height: '36px'}}>
                            <i className="fa fa-fw fa-plus" aria-hidden="true"></i>
                          </span>
                        </div>
                      </div>
                  );
                case SELECTION_TYPE_MESSAGE:
                  return <MessagePageHeaderDefault title={map(showParticipantsName(selectedItem.participants), 'name').join(', ')} />;
                case SELECTION_TYPE_ANNOUNCEMENT:
                  return <MessagePageHeaderDefault {...title} />
                break;
                default:
                  return <MessagePageHeaderDefault {...title} />;
              }
            })()
          }
            <div className="actions">
              <i className="fa fa-fw fa-cog" aria-hidden="true"></i>
              <i className="fa fa-fw fa-users" aria-hidden="true"></i>
              <i className="fa fa-fw fa-info" aria-hidden="true" onClick={() => { console.log("selected",selectedItem); openTaskDetail(selectedItem.get('id'))}}></i>
              <i className="fa fa-fw fa-search" aria-hidden="true"></i>
              {
              //  <i className="fa fa-fw fa-code-fork" aria-hidden="true" onClick={() => {this.setState({sidebarOpen: !sidebarOpen}) }}></i>
              }
              <i className="fa fa-fw fa-thumb-tack" aria-hidden="true"></i>
            </div>
          </div>

          {
            type === 'announcement' ?
            <div style={{
              order:3,
              flexBasis: '50px',
              background: 'lightcoral'
            }}>
              <div style={{
                padding: '0 20px',
                height: '50px',
                display: 'table-cell',
                verticalAlign: 'middle'
              }}>
                <span style={{
                  fontSize: '15px',
                  fontWeight: 200
                }}>
                  Please confirm that youve read the announcement
                </span>
                <Button bsStyle="info">Read</Button>

              </div>
            </div>
            : null
          }
          <div style={{
            padding: '5px 20px',
            order: 2,
            overflowY: 'scroll',
            flexGrow: 6
          }}>
            <ul className="no-indent">
            {
              // messages.map(function(obj, index) {
              //
              //   return (
              //     <li key={index} style={{minHeight: '40px'}}>
              //       <div style={{marginBottom: '6px'}}>
              //         <div style={{float: 'left', marginRight: '10px'}}>
              //           <img src={obj.sender.image_url} width="36" height="36" style={{borderRadius: '50%'}} />
              //         </div>
              //         <div style={{marginLeft: '48px'}}>
              //           <span style={{display: 'block', fontWeight: 500, margin: '5px 0'}}>{obj.sender.name}</span>
              //           <span>{obj.message}</span>
              //         </div>
              //       </div>
              //     </li>
              //   );
              // })
            }
            </ul>
            <div style={ {float:"left", clear: "both"} }
                  ref={(el) => { this.messagesEnd = el; }}>
            </div>

          </div>
          <div style={{
            order: 4,
            flexBasis: '100px'
          }}>
            <div style={{
              margin: '10px',
              border: '1px solid grey',
              borderRadius: '5px'
            }}>
              <textarea ref="sendText" style={{
                minHeight:'50px',
                height:'auto',
                resize: 'vertical',
                margin: '10px',
                border: '1px solid grey',
                boxShadow: 'none',
                borderRadius: '5px',
                padding: '15px',
                fontSize: '16px',
                width: '100%'
              }} onKeyUp={sendMessage} />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

MainContentsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  selectedItem: selectSelectedItem(),
  type: selectSelectedItemType(),
  title: selectSelectedItemLabel()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContentsPage);
