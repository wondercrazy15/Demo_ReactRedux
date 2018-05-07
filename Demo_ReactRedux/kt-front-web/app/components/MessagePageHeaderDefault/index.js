/**
*
* MessagePageHeaderDefault
*
*/

import React, { Component, PropTypes } from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class MessagePageHeaderDefault extends Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <div className="title">{this.props.title}</div>
      </div>
    );
  }
}

MessagePageHeaderDefault.propTypes = {
  title: PropTypes.string
};

export default MessagePageHeaderDefault;
