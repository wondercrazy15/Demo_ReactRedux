/*
 *
 * Sidebar
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { List, Map } from 'immutable';
import {
    selectTeamsList,
    selectTeamsCount,
    selectTeamsIsFetching,
    selectTeamsIsFetched,
    selectSelectedTeam,
    selectSelectedTeamId,
    selectSelectedTeamName,
    selectSelectedTeamIsFetched,
    selectSelectedTeamIsFetching,
    selectSelectedTeamAnnouncements,
    selectSelectedTeamMessages,
    selectSelectedTeamTasks,
    selectSelectedTeamConversations,
    selectSelectedTeamTeams,
    selectSelectedTeamPersonal,
    selectIsFetching,
    selectTasks,
    selectAnnouncements,
    selectMessages
} from './selectors';
import messages from './messages';
import Collapsible from 'react-collapsible';
import SidebarProfile from './../../components/SidebarProfile';
import SidebarList from './../../components/SidebarList';
import {
    getSidebar,
    getTeams,
    selectSidebarItem
} from './actions';

export class Sidebar extends React.Component { // eslint-disable-line react/prefer-stateless-function

    componentDidMount() {
        const {
      teamsCount,
            teamsIsFetched,
            teamsIsFetching
    } = this.props;
        if (teamsIsFetched === false && teamsIsFetching === false) {
            this.props.onGetTeams();
        }
    }

    componentDidUpdate() {
        const {
      onGetSidebar,
            teams,
            teamsIsFetched,
            selectedTeam,
            selectedTeamId,
            selectedTeamIsFetched,
            selectedTeamIsFetching
    } = this.props;
        if (teamsIsFetched === true && selectedTeamIsFetched === false && selectedTeamIsFetching === false) {
            let params = selectedTeamId ? selectedTeam : teams.first();
            onGetSidebar(params);
        }
    }

    
    render() {

        const {
      teamsCount,
            teams,
            selectedItem,
            selectedTeamName,
            tasks,
            announcements,
            messages,
            personal,
            conversations,
            team,
            onSelectItem,
            onGetSidebar
    } = this.props;

    

        const scrollableConfig = {

            overflowWhenOpen: 'scroll',
            open: true
        };

       
        
        return (
            <div className='sidebar_section' style={{ height: '100%' }}>
                <div className='first_menu'>
                    <Collapsible
                        trigger={<SidebarProfile {...{ teamName: selectedTeamName }} />}
                        transitionTime={scrollableConfig.transitionTime}
                        overflowWhenOpen={scrollableConfig.overflowWhenOpen}
                        open={false} >
                        <SidebarList {...{ list: teams, onSelectItem: onGetSidebar }} />
                    </Collapsible>
                </div>
                {
                    teamsCount < 1 ? null :
                        (<div className="menu_conatiner">
                            <div>
                                <span className='menu_name'>
                                    <span className='icon_container dashboard-icon bg-icon'>                                   
                                    </span>
                                    <span className="menu_label dashboard ">
                                        Dashboard
                                     </span>
                                </span>
                            </div>
                            <div>
                                <span className='menu_name'>
                                    <span className='icon_container team-icon bg-icon'></span>
                                    <span className="menu_label">
                                        <Collapsible trigger="Teams"
                                            transitionTime={scrollableConfig.transitionTime}
                                            overflowWhenOpen={scrollableConfig.overflowWhenOpen}
                                            open={!scrollableConfig.open} >
                                            <SidebarList {...{ list: team, onSelectItem }} />
                                        </Collapsible>
                                    </span>
                                </span>
                            </div>
                            <div>
                                <span className='menu_name'>
                                    <span className='icon_container personal-icon bg-icon'></span>
                                    <span className="menu_label">
                                        <Collapsible trigger="Personal"
                                            transitionTime={scrollableConfig.transitionTime}
                                            overflowWhenOpen={scrollableConfig.overflowWhenOpen}
                                            open={!scrollableConfig.open} >
                                            <SidebarList {...{ list: personal, onSelectItem }} />
                                        </Collapsible>
                                    </span>
                                </span>
                            </div>
                            <div className='conversation_menu'>
                                <span className='menu_name'>
                                    <span className='icon_container conversation-icon bg-icon'></span>
                                    <div className="conversation-icon-list" >
                                        <i className="fa fa-sort m-5" aria-hidden="true" ></i>
                                        <i className="fa fa-ban m-5" aria-hidden="true"></i>
                                        <i className="fa fa-plus-circle m-5" aria-hidden="true"></i>
                                    </div>
                                    
                                    <span className="menu_label" >
                                    {/* onOpen  ={() => test()} */}
                                        <Collapsible trigger="Conversations" 
                                            transitionTime={scrollableConfig.transitionTime}
                                            overflowWhenOpen={scrollableConfig.overflowWhenOpen}
                                            open={true} >
                                            <SidebarList {...{ list: conversations, onSelectItem }} />
                                        </Collapsible>
                                    </span>
                                </span>
                            </div>
                        </div>)
                }
            </div>
        );
    }
}

Sidebar.propTypes = {
    teams: PropTypes.instanceOf(List).isRequired,
    teamsCount: PropTypes.number.isRequired,
    teamsIsFetching: PropTypes.bool.isRequired,
    teamsIsFetched: PropTypes.bool.isRequired,
    selectedTeamId: PropTypes.number,
    selectedTeamName: PropTypes.string,
    selectedTeamIsFetched: PropTypes.bool.isRequired,
    selectedTeamIsFetching: PropTypes.bool.isRequired,
    tasks: PropTypes.instanceOf(List),
    announcements: PropTypes.instanceOf(List),
    messages: PropTypes.instanceOf(List),
    team: PropTypes.instanceOf(List),
    conversations: PropTypes.instanceOf(List),
    personal: PropTypes.instanceOf(List)
}

const mapStateToProps = createStructuredSelector({
    teams: selectTeamsList(),
    teamsCount: selectTeamsCount(),
    teamsIsFetching: selectTeamsIsFetching(),
    teamsIsFetched: selectTeamsIsFetched(),
    selectedTeam: selectSelectedTeam(),
    selectedTeamId: selectSelectedTeamId(),
    selectedTeamName: selectSelectedTeamName(),
    selectedTeamIsFetched: selectSelectedTeamIsFetched(),
    selectedTeamIsFetching: selectSelectedTeamIsFetching(),
    team: selectSelectedTeamTeams(),
    conversations: selectSelectedTeamConversations(),
    personal: selectSelectedTeamPersonal(),
    tasks: selectSelectedTeamTasks(),
    announcements: selectSelectedTeamAnnouncements(),
    messages: selectSelectedTeamMessages()
});

function mapDispatchToProps(dispatch) {
    return {
        onGetTeams: () => dispatch(getTeams()),
        onGetSidebar: (params) => dispatch(getSidebar(params)),
        onSelectItem: (obj) => dispatch(selectSidebarItem(obj))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
