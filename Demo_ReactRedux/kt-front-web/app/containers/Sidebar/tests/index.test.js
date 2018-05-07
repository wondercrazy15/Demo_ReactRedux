import React from 'react';
import { shallow, render } from 'enzyme';
import { IntlProvider } from 'react-intl';
import { fromJS } from 'immutable';
import { Sidebar } from '../index';
import Collapsible from 'react-collapsible';
import SidebarList from '../../../components/SidebarList';
import SidebarItem from '../../../components/SidebarItem';



describe('<Sidebar />', () => {
    it('should render main page', () => {
        const wrapper = shallow(<Sidebar />);
    });

    it('should render a conversions sidebar items', () => {
        const conversations = fromJS([{ "id": 8775, "type": "Conversations", "name": "A conversation with one or more selected person", "color": "Purple", "icon": "fa-users" }, { "id": 75854, "type": "Conversations", "name": "An announcement", "color": "Red", "icon": "fa-bullhorn" }, { "id": 75854, "type": "Conversations", "name": "A group chat", "color": "Green", "icon": "fa-comments" }, { "id": 75854, "type": "Conversations", "name": "A meeting", "color": "Orange", "icon": "fa-handshake-o" }, { "id": 75854, "type": "Conversations", "name": "A task", "color": "Pink", "icon": "fa-tasks" }]);
        const scrollableConfig = {
            overflowWhenOpen: 'scroll',
            open: true
        };

        const onSelectItem = state => state;
        const renderedComponent = shallow(
            <SidebarList {...{ list: conversations, onSelectItem }} />
        );
        expect(renderedComponent.find('SidebarItem').length).toBe(5);
    });

    it('should render a teams sidebar items', () => {
        const teams = fromJS([{ "id": 8775, "type": "Team", "name": "Projects", "color": "Pink", "icon": "fa-files-o" }, { "id": 75854, "type": "Team", "name": "Documentation", "color": "Green", "icon": "fa-file-text-o" }, { "id": 75854, "type": "Team", "name": "Calendar", "color": "Orange", "icon": "fa-calendar-o" }, { "id": 75854, "type": "Team", "name": "Requests", "color": "Red", "icon": "fa-hand-paper-o" }]);
        const scrollableConfig = {
            overflowWhenOpen: 'scroll',
            open: true
        };

        const onSelectItem = state => state;
        const renderedComponent = shallow(
            <SidebarList {...{ list: teams, onSelectItem }} />
        );
        expect(renderedComponent.find('SidebarItem').length).toBe(4);


    });

    it('should render a personal sidebar items', () => {
        const personal = fromJS([{ "id": 8775, "type": "Personal", "name": "Goal Settings", "color": "Blue", "icon": "fa-cog" }, { "id": 75854, "type": "Personal", "name": "Notes", "color": "Green", "icon": "fa-sticky-note-o" }]);
        const scrollableConfig = {
            overflowWhenOpen: 'scroll',
            open: true
        };

        const onSelectItem = state => state;
        const renderedComponent = shallow(
            <SidebarList {...{ list: personal, onSelectItem }} />
        );
        expect(renderedComponent.find('SidebarItem').length).toBe(2);


    });
});
