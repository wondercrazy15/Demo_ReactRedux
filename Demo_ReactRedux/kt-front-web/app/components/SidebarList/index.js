/**
*
* SidebarList
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import SidebarItem from './../SidebarItem';
import { List } from 'immutable';

class SidebarList extends React.Component {
    render() {
        const {
      onSelectItem,
            list
      } = this.props;
        return (
            <ul className={'no-indent'}>
                {
                    list == undefined ? null : (
                        list.map((item, index) => {
                            
                            return (
                                <div key={index} onClick={() => { onSelectItem(item) }} >
                                    <SidebarItem    {...{ label: item.get('name'), iconColor: item.get('color'), icon: item.get('icon')}}  />
                                </div>
                            );
                        })
                    )
                }
            </ul>
        );
    }
}

SidebarList.propTypes = {
    list: PropTypes.instanceOf(List).isRequired,
    onSelectItem: PropTypes.func.isRequired
};

export default SidebarList;
