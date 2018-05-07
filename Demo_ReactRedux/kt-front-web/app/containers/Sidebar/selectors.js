import { createSelector } from 'reselect';

/**
 * Direct selector to the sidebar state domain
 */
const selectSidebar = (state) => state.get('sidebar');

/**
 * Other specific selectors
 */
const selectSelectedItem = () => createSelector(
  selectSidebar,
  (state) => state.getIn(['currentTeam', 'selectedItem']));

const selectSelectedItemId = () => createSelector(
  selectSelectedItem(),
  (state) => state.get('id')
);

const selectSelectedItemType = () => createSelector(
  selectSelectedItem(),
  (state) => state.get('type')
);

const selectSelectedItemLabel = () => createSelector(
  selectSelectedItem(),
  (state) => state.get('name')
);

/**
 * Default selector used by Sidebar
 */
const selectIsFetching = () => createSelector(
  selectTeams(),
  (state) => state.get('isFetching'));

const selectTeams = () => createSelector(
  selectSidebar,
  (state) => state.get('teams'));

const selectTeamsList = () => createSelector(
  selectTeams(),
  (state) => state.get('list'));

const selectTeamsCount = () => createSelector(
  selectTeamsList(),
  (state) => state.size
);

const selectTeamsIsFetching = () => createSelector(
  selectTeams(),
  (state) => state.get('isFetching')
);

const selectTeamsIsFetched = () => createSelector(
  selectTeams(),
  (state) => state.get('isFetched')
);

const selectSelectedTeam = () => createSelector(
  selectSidebar,
  (state) => state.get('currentTeam')
);

const selectSelectedTeamId = () => createSelector(
  selectSelectedTeam(),
  (state) => state.get('id'));

const selectSelectedTeamName = () => createSelector(
  selectSelectedTeam(),
  (state) => state.get('name'));

const selectSelectedTeamIsFetched = () => createSelector(
  selectSelectedTeam(),
  (state) => state.get('isFetched'));

const selectSelectedTeamIsFetching = () => createSelector(
  selectSelectedTeam(),
  (state) => state.get('isFetching'));

const selectSelectedTeamAnnouncements = () => createSelector(
  selectSelectedTeam(),
  (state) => state.get('announcements'));

const selectSelectedTeamMessages = () => createSelector(
  selectSelectedTeam(),
  (state) => state.get('messages'));

const selectSelectedTeamTasks = () => createSelector(
  selectSelectedTeam(),
  (state) => state.get('tasks'));

const selectSelectedTeamConversations = () => createSelector(
    selectSelectedTeam(),
    (state) => state.get('conversations'));

const selectSelectedTeamTeams = () => createSelector(
    selectSelectedTeam(),
    (state) => state.get('team'));

const selectSelectedTeamPersonal = () => createSelector(
    selectSelectedTeam(),
    (state) => state.get('personal'));


const selectTasks = () => createSelector(
  selectSelectedTeam(),
  (state) => state.get('tasks'));

const selectAnnouncements = () => createSelector(
  selectSelectedTeam(),
  (state) => state.get('announcements'));

const selectMessages = () => createSelector(
  selectSelectedTeam(),
  (state) => state.get('messages'));



export {
  selectSidebar,
  selectSelectedItem,
  selectSelectedItemId,
  selectSelectedItemLabel,
  selectSelectedItemType,
  selectIsFetching,
  selectTasks,
  selectAnnouncements,
  selectMessages,
  selectTeams,
  selectTeamsList,
  selectTeamsCount,
  selectTeamsIsFetching,
  selectTeamsIsFetched,
  selectSelectedTeam,
  selectSelectedTeamId,
  selectSelectedTeamName,
  selectSelectedTeamIsFetched,
  selectSelectedTeamIsFetching,
  selectSelectedTeamConversations,
  selectSelectedTeamTeams,
  selectSelectedTeamPersonal,
  selectSelectedTeamAnnouncements,
  selectSelectedTeamMessages,
  selectSelectedTeamTasks
};
