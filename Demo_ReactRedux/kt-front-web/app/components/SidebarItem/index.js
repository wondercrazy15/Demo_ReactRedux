/**
*
* SidebarItem
*
*/

import React, { PropTypes } from 'react';


class SidebarItem extends React.Component {
    render() {
        const { label, iconColor,icon } = this.props;
        var color = String(iconColor).toLocaleLowerCase();
        return (
            <div>
                <div className="submenu_list"><span className={"submenu_icon " + color + " fa " + icon}></span><span className="submenu_label">{label}</span></div>
            </div>
        );
    }
}

SidebarItem.propTypes = {
    label: PropTypes.string.isRequired
};

export default SidebarItem;
