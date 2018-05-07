import { createSelector } from 'reselect';


/**
 * Direct selector to the messagePage state domain
 */
const selectMainContentsPageDomain = () => (state) => state.get('message');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MainContentsPage
 */

const makeSelectMainContentsPage = () => createSelector(
  selectMainContentsPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectMainContentsPage;
export {
  selectMainContentsPageDomain,
};
