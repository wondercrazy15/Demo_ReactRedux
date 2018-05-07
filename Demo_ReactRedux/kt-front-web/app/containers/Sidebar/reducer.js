/*
 *
 * Sidebar reducer
 *
 */

import {
    fromJS,
    List
} from 'immutable';
import {
    head
} from 'lodash';
import {
    SIDEBAR_GET_DATA,
    SIDEBAR_GET_DATA_SUCCESS,
    SIDEBAR_GET_DATA_ERROR,
    SIDEBAR_SELECT_ITEM,
    SIDEBAR_GET_TEAMS,
    SIDEBAR_GET_TEAMS_SUCCESS,
    SIDEBAR_GET_TEAMS_ERROR,
    SELECTION_TYPE_TEAM
} from './constants';
import {

} from './selectors';

const initialState = fromJS({
    teams: {
        isFetching: false,
        isFetched: false,
        error: null,
        list: []
    },
    currentTeam: {
        id: null,
        name: '',
        isFetched: false,
        isFetching: false,
        selectedItem: {
            type: null,
            id: null,
            name: '',
            properties: {}
        },
        team: [],
        personal: [],
        conversations: [],
        tasks: [],
        messages: [],
        announcements: []
    }
});

function sidebarReducer(state = initialState, action) {
    debugger;
    switch (action.type) {
        case SIDEBAR_GET_DATA:
            return state.withMutations((ctx) => {
                ctx.setIn(['currentTeam', 'isFetching'], true)
                    .setIn(['currentTeam', 'id'], action.params.get('id'))
                    .setIn(['currentTeam', 'name'], action.params.get('name'));
            });
        case SIDEBAR_GET_DATA_SUCCESS:
            const { tasks, messages, teams, announcements, team, personal, conversations } = action.data;
            // const conv = [{ "id": 8775, "type": "Conversations", "name": "A conversation with one or more selected person", "color": "Purple", "icon": "fa-users" }, { "id": 75854, "type": "Conversations", "name": "An announcement", "color": "Red", "icon": "fa-bullhorn" }, { "id": 75854, "type": "Conversations", "name": "A group chat", "color": "Green", "icon": "fa-comments" }, { "id": 75854, "type": "Conversations", "name": "A meeting", "color": "Orange", "icon": "fa-handshake-o" }, { "id": 75854, "type": "Conversations", "name": "A task", "color": "Pink", "icon": "fa-tasks" }];
            // const tm = [{ "id": 8775, "type": "Team", "name": "Projects", "color": "Pink", "icon": "fa-files-o" }, { "id": 75854, "type": "Team", "name": "Documentation", "color": "Green", "icon": "fa-file-text-o" }, { "id": 75854, "type": "Team", "name": "Calendar", "color": "Orange", "icon": "fa-calendar-o" }, { "id": 75854, "type": "Team", "name": "Requests", "color": "Red", "icon": "fa-hand-paper-o"  }];
            // const prs = [{ "id": 8775, "type": "Personal", "name": "Goal Settings", "color": "Blue", "icon": "fa-cog" }, { "id": 75854, "type": "Personal", "name": "Notes", "color": "Green", "icon": "fa-sticky-note-o"  }];

            //const { team, personal, teams, conversations } = action.data;
            return state.withMutations((ctx) => {
                ctx.setIn(['currentTeam', 'isFetching'], false)
                    .setIn(['currentTeam', 'isFetched'], true)
                    .setIn(['currentTeam', 'announcements'], fromJS(action.data.announcements))
                    .setIn(['currentTeam', 'messages'], fromJS(action.data.messages))
                    .setIn(['currentTeam', 'tasks'], fromJS(action.data.tasks))
                    .setIn(['currentTeam', 'conversations'], fromJS(conversations))
                    .setIn(['currentTeam', 'personal'], fromJS(personal))
                    .setIn(['currentTeam', 'team'], fromJS(teams));
            });
        case SIDEBAR_GET_DATA_ERROR:
            return state.withMutations((ctx) => {
                ctx.setIn(['currentTeam', 'isFetching'], false)
                    .setIn(['currentTeam', 'isFetched'], true)
                    .setIn(['error', 'type'], action.type)
                    .setIn(['error', 'message'], action.message)
                    .setIn(['error', 'properties'], action.properties);
            });
        case SIDEBAR_SELECT_ITEM:
            return state.withMutations((ctx) => {
                debugger
                ctx.setIn(['currentTeam', 'selectedItem'], action.data);
            });
        case SIDEBAR_GET_TEAMS:
            return state.setIn(['teams', 'isFetching'], true);
        case SIDEBAR_GET_TEAMS_SUCCESS:
            return state.withMutations((ctx) => {
                ctx.setIn(['teams', 'list'], fromJS(action.data))
                    .setIn(['teams', 'isFetching'], false)
                    .setIn(['teams', 'isFetched'], true);
            });
        case SIDEBAR_GET_TEAMS_ERROR:
            return state.withMutations((ctx) => {
                ctx.setIn(['teams', 'isFetching'], false)
                    .setIn(['teams', 'isFetched'], true)
                    .setIn(['teams', 'error'], fromJS(action.error));
            });
        default:
            return state;
    }
}


export default sidebarReducer;
export {
    initialState
}
