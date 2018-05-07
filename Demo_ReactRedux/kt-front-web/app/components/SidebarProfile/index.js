/**
*
* SidebarListHeader
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Img from './../Img';


class SidebarListHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      teamName
    } = this.props;
    return (
        <div>
            <span className="profile_header">{teamName}</span>
          
            <div className="profile_name_container">
        <Img className="sidebar_profile" src={'https://media.licdn.com/mpr/mpr/shrinknp_100_100/p/8/005/08a/352/269b954.jpg'}
              alt={'profile'}
              style={{ float: 'left' }} />
        <span className="profile_name" style={{ display: 'block', fontWeight: 400 }}>Takuto Suzuki</span>
                </div>
       
      </div>
    );
  }
}

SidebarListHeader.propTypes = {
  teamName: React.PropTypes.string
};

export default SidebarListHeader;
