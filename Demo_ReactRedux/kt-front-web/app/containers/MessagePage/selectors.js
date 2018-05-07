import { createSelector } from 'reselect';

/**
 * Direct selector to the messagePage state domain
 */
const selectMessageDomain = (state) => state.get('message');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MessagePage
 */


const getConvo = () => createSelector(
  selectMessageDomain,
  logger('getConvo'),
  (state) => state.get('conversation'));

const logger = (name) => (state) => {
  console.log('state at', name, state.toJS());
  return state;
}

const getParticipants = () => createSelector(
  getConvo(),
  logger('getParticipants'),
  (state) => state.get('participants'));

const getParticipantsCount = () => createSelector(
  getParticipants(),
  (state) => state.get('total'));

const getParticipantsList = () => createSelector(
  getParticipants(),
  (state) => state.get('list'));

const getMessages = () => createSelector(
  getConvo(),
  (state) => state.get('messages'));

export {
  selectMessageDomain,
  getParticipants,
  getParticipantsCount,
  getParticipantsList,
  getMessages
};
